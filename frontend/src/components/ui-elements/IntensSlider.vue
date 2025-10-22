<template>
  <div
    class="intens-input"
    :class="intensClass"
    :style="{
      width: `${data.typeLabel ? 'auto' : data.length / 2 + 2 + 'em'}`,
    }"
  >
    <slider
      class="intens-input"
      v-model="currentValue"
      v-bind="options"
      :id="fullName"
      v-if="(data.type = 'Slider')"
      v-tooltip="data.helptext"
      ref="slider"
      @drag-end="exec"
      :disabled="disabled"
      hint=""
      :class="{ numerical: data.datatype !== 'string' }"
      :style="{
        'background-color': backgroundColor,
        color: color,
      }"
    ></slider>
    <div class="intens-label" v-else v-html="currentValue"></div>
  </div>
</template>
<script lang="ts">
import base from "./base";
import slider from "vue-slider-component";
import Component, { mixins } from "vue-class-component";
import "vue-slider-component/theme/default.css";
import { in_proto } from "../../proto";

interface IntensSlider {
  data: in_proto.IDataField;
}

@Component({
  components: {
    slider,
  },
})
class IntensSlider extends mixins(base) {
  currentValue: string | number = "";
  disabled = !this.data.editable;
  fullName = "";
  scale = 0;
  color: string = "";
  backgroundColor: string = "";
  options = {
    dotSize: 18,
    width: "auto",
    height: 14,
    contained: false,
    direction: "ltr",
    data: null,
    dataLabel: "label",
    dataValue: "value",
    min: this.data.range.min,
    max: this.data.range.max,
    interval: this.data.range.step,
    disabled: false,
    clickable: true,
    duration: 0.5,
    adsorb: false,
    lazy: false,
    tooltip: "active",
    tooltipPlacement: "top",
    tooltipFormatter: void 0,
    useKeyboard: false,
    keydownHook: null,
    dragOnClick: false,
    enableCross: true,
    fixed: false,
    minRange: void 0,
    maxRange: void 0,
    order: true,
    marks: false,
    dotOptions: void 0,
    dotAttrs: void 0,
    process: true,
    dotStyle: void 0,
    railStyle: void 0,
    processStyle: void 0,
    tooltipStyle: void 0,
    stepStyle: void 0,
    stepActiveStyle: void 0,
    labelStyle: void 0,
    labelActiveStyle: void 0,
  };

  created() {
    this.getNewValue(this.data);
    this.$ids.addComponent(this);
  }

  convertValueToIntens(value: string | number): number | string {
    return !value || isNaN(value as number) ? value : parseFloat(value as string) / this.scale;
  }

  getNewValue(data: in_proto.IDataField) {
    this.intensClass = this.prefixCssClass(data.base.styleClass)
    this.scale = data.scale;
    this.fullName = data.fullName!;
    this.options.min = data.range.min;
    this.options.max = data.range.max;
    this.options.interval = data.range.step;

    // Value is only set if not macthing with currentValue
    const val = data.value.formattedValue.trim();
    if (val != this.currentValue) {
      this.currentValue = val;
    }

    this.disabled = !data.editable;
    this.color = data.fgColor && data.fgColor !== "#000000" ? data.fgColor : "";
    this.backgroundColor = data.bgColor ? data.bgColor : "";
  }

  formatValue({
    value,
    datatype,
    scale,
    precision,
  }: {
    value: string | number;
    datatype: string;
    scale: number;
    precision: number | undefined;
  }) {
    if (datatype == "string" || value == "") {
      return value;
    } else {
      let pre = precision ? precision : 0;
      return (parseFloat(value as string) * scale).toFixed(pre);
    }
  }

  async exec() {
    let val = this.convertValueToIntens(this.currentValue);
    this.getTracer().startActiveSpan("slider value change", async span => {
      if (this.data.action) {
        await this.execute({ action: this.data.action, reason: "Input", name: this.fullName, value: val });
      } else {
        await this.setDatapool(this.fullName, val);
      }
      span.end();
    });
  }
}

export default IntensSlider;
</script>
<style lang="scss">
.intens-slider {
  margin: 2px;
}
</style>
