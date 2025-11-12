<template>
  <div
    class="intens-textfield"
    :class="[{ invalid: invalidValue }, intensClass]"
    :style="{
      width: `${data.typeLabel ? 'auto' : data.length / 2 + 2 + 'em'}`,
    }"
  >
    <input
      class="intens-input"
      v-model="currentValue"
      :id="fullName"
      v-if="!data.typeLabel"
      v-tooltip="data.helptext"
      ref="inputElement"
      autocomplete="off"
      @keyup.enter="execEnter"
      @focus="onFocus"
      @blur="exec"
      :disabled="disabled"
      hint=""
      :class="{ numerical: !isString }"
      :style="{
        'background-color': backgroundColor,
        color: color,
      }"
    />
    <div class="intens-label" v-else v-html="currentValue"></div>
  </div>
</template>
<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { in_proto } from "../../proto";

interface IntensInput {
  data: in_proto.DataField;
}

@Component
class IntensInput extends mixins(base) {
  currentValue: string | number = "";
  oldEditValue: string | number = "";
  disabled = !this.data.editable;
  fullName = "";
  focused = false;
  invalidValue = false;
  scale = 0;
  color: string = "";
  backgroundColor: string = "";
  rawValue: string | number = "";

  created() {
    this.getNewValue(this.data);
    this.$ids.addComponent(this);
  }

  convertValueToIntens(value: string | number): number | string {
    if (this.data.value.datatype == in_proto.ValueInfo.DataType.String) {
      return (value as string).trim();
    }
    let valStr = value as string;
    if (this.data.value.datatype == in_proto.ValueInfo.DataType.Double) {
      valStr = valStr.replace(/,/g, ".");
      if (valStr.indexOf(".") == -1) {
        valStr += "."
      }
    }
    return !valStr || isNaN(Number(valStr)) ? value : parseFloat(valStr) / this.scale;
    ///    return !value || isNaN(value as number) ? value : parseFloat(value as string) / this.scale;
  }

  getNewValue(data: in_proto.DataField) {
    this.intensClass = this.prefixCssClass(data.base.styleClass)
    this.disabled = !data.editable;
    this.color = data.fgColor ? data.fgColor : "";
    this.backgroundColor = data.bgColor ? data.bgColor : "";
    if (this.focused) {
      console.debug("Input focused, ignoring update");
 //     return;
    }
    //console.debug("IntensInput getNewValue", data)
    this.scale = data.scale;
    this.fullName = data.fullName!;
    this.data.value = data.value;
    this.data.helptext = data.helptext;

    // Value is only set if not macthing with currentValue
    let val: number | string;
    if (data.value.formattedValue) {
      val = data.value.formattedValue.trim();
    } else {
      val = this.formatValue({
        value: data.value.doubleValue || data.value.stringValue,
        datatype: data.value.datatype,
        scale: data.scale,
        precision: data.precision,
      });
    }
    if (val != this.currentValue) {
      this.currentValue = val;
    }
    if (this.focused) {
      this.setEditValue();
    }
    this.rawValue = data.value.doubleValue || val;

    this.invalidValue = false;
  }

  formatValue({
    value,
    datatype,
    scale,
    precision,
  }: {
    value: string | number;
    datatype: in_proto.ValueInfo.DataType;
    scale: number;
    precision: number | undefined;
  }) {
    if (datatype == in_proto.ValueInfo.DataType.String || value == "") {
      return value;
    } else {
      // if no precision is set, use default of 3
      let pre = precision >= 0 ? precision : 3;
      return Number((parseFloat(value as string) * scale).toFixed(pre));
    }
  }
  setEditValue() {
    if (this.data.value.datatype == in_proto.ValueInfo.DataType.Double) {
      let deli = '.';
      if (this.currentValue.toString().indexOf(',') > 0) deli = ',';
      let svalue = this.rawValue as string;
      let value = parseFloat(svalue) * this.scale;

      this.currentValue = String(Number(value.toPrecision(12)))
      // special cases
      if (Number.isNaN(value)) this.currentValue = "";
      if (value === 0) this.currentValue = "0";
    }
    this.oldEditValue = this.currentValue;
  }

  onFocus() {
    this.$store.commit("setLastCompId", this.data.base.id);
    this.focused = true;
    this.invalidValue = false;
    this.setEditValue();
  }

  async execEnter() {
    this.exec();
    this.focused = true
  }

  get isString() {
    return this.data.value.datatype === in_proto.ValueInfo.DataType.String
  }

  async exec() {
    if (this.focused == false) {
      return;
    }
    this.focused = false;
    let val = this.convertValueToIntens(this.currentValue);
    if (val.toString().length && this.data.value.maxValue && (val > this.data.value.maxValue || val < this.data.value.minValue)) {
      this.invalidValue = true;
    }
    if (val.toString().length && this.data.value.patternValue && !new RegExp(`^${this.data.value.patternValue}$`).test(String(val))) {
      this.invalidValue = true;
    }
    console.debug("Input, value: ", this.currentValue, " => ", val, ", locale: ");
    //console.debug("Input, vn: ", this.data.fullName, " ", this.fullName)
    if (this.invalidValue === false && this.oldEditValue !== this.currentValue) {
      this.rawValue = val
      this.getTracer().startActiveSpan("update field", async span => {
      if (this.data.action) {
          await this.execute({ action: this.data.action, reason: "Input", name: this.fullName, value: val });
        } else {
          await this.setDatapool(this.fullName, val);
        }
        span.end()
      })
    } else
    if (this.invalidValue === false && this.oldEditValue === this.currentValue)
      this.currentValue = this.formatValue({
        value: this.rawValue,
        datatype:this.data.value.datatype,
        scale:this.data.scale,
        precision:this.data.precision,
      });
    if (this.invalidValue === true) {
      setTimeout(() => {
        this.currentValue = this.rawValue;
        this.invalidValue = false;
      }, 1000);
    }
  }
}

export default IntensInput;
</script>
<style lang="scss">
.intens-input {
  font-family: monospace;
  width: 100%;
  border: 1px solid var(--background-color-dark);
  line-height: 1em;
  border-radius: 3px;

  &:disabled {
    background: var(--main-color-dark);
  }
}

.intens-textfield.invalid > input {
  border-color: red;
  box-shadow: 0 0px 5px red;
}

</style>
