<template>
  <div class="intens-textfield" :class="intensClass" :style="{ padding: definePadding, margin: defineMargin }">
    <select
      class="intens-select"
      v-model="value"
      :tabindex="data.hasTable ? -1 : undefined"
      @change="updateValue"
      @focus="$store.commit('setLastCompId', data.base.id)"
      hint=""
      :id="fullName"
      ref="select"
      :disabled="disabled || !editable"
      v-tooltip="data.base.helptext"
      v-if="!disabled"
      :style="{
        'background-color': disabled ? 'lightgrey' : backgroundColor ,
        color: color,
        width: data.hasTable ? '100%' : defineWidth,
      }"
    >
      <option v-for="(option, index) in output" :value="option" :id="fullName + '-' + option.replaceAll(' ', '-')">
        {{ input[index] }}
      </option>
      <option v-if="input.length > output.length" :value="null"></option>
    </select>
    <input
      class="intens-select-input"
      v-model="value"
      hint=""
      disabled=true
      v-tooltip="data.base.helptext"
      v-if="disabled"
      :style="{
        'background-color': '#cbced0',
        width: data.hasTable ? '100%' : defineWidth,
      }"
    >
    </input>
  </div>
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import { in_proto } from "../../proto";

interface IntensSelect {
  data: in_proto.ComboBox;
}

@Component
class IntensSelect extends mixins(base) {
  @Prop({ default: false })
  focused!: boolean;
  @Prop({ default: 0 })
  columnWidth!: number;
  @Prop({ default: true })
  editable!: boolean;
  value = this.data.base.value.stringValue || this.data.base.value.intValue || this.data.base.value.formattedValue;
  disabled = !this.data.base.editable;
  output = this.data.outputDataset
  input = this.data.inputDataset;
  fullName = this.data.base.fullName;
  color: string = this.data.base.fgColor ? this.data.base.fgColor : "#000000";
  backgroundColor: string = this.data.base.bgColor ? this.data.base.bgColor : "#ffffff";
  definePadding: string = this.data.style?.noMargin ? "0px" : "1px";
  defineMargin: string = this.data.style?.noMargin || this.disabled ? "0px" : "1px";
  defineWidth: string = this.data.style?.width == null ? this.data.base.length / 2 + 4 + "em" : this.data.style?.width;

  created() {
    this.$ids.addComponent(this);
    if (!this.value && !this.output) {
      this.getNewValue(this.data);
    }
    // only filled bgcolor
    if (this.data.base.bgColor && this.data.base.bgColor.length) {
      this.backgroundColor = this.data.base.bgColor;
    }
  }

  mounted() {
    this.changeFocus();
  }

  @Watch("focused")
  changeFocus() {
    if (!this.focused) return;
    const select = this.$refs["select"] as HTMLElement;
    //console.debug("changeFocus focusing")
    select.focus();
  }

  getNewValue(data: in_proto.ComboBox) {
    this.intensClass = this.prefixCssClass(data.class)
    this.disabled = !data.base.editable;
    this.input = data.inputDataset;
    this.output = data.outputDataset;
    this.value = data.base.value.stringValue || data.base.value.intValue || data.base.value.formattedValue;
    this.fullName = data.base.fullName!;
    this.color = data.base.fgColor && data.base.fgColor.length ? data.base.fgColor : "#000000";
    this.backgroundColor = data.base.bgColor && data.base.bgColor.length ? data.base.bgColor : "#ffffff";
    this.defineMargin = this.data.style?.noMargin ? "0px" : "1px";
    if (this.disabled) {
       let index = data.outputDataset.indexOf(this.value);
       if (index >=0) {
        this.value = data.inputDataset[index];
       }
      this.defineMargin = "0px";

    }
  }
  async updateValue() {
    this.getTracer().startActiveSpan("select value", async span => {
      if (this.data.base.action) {
        await this.execute({
          action: this.data.base.action,
          value: this.value,
          index: this.data.index,
          reason: "input",
          name: this.fullName,
        });
      } else {
        await this.setDatapool(this.fullName, this.value);
      }
      span.end()
    })
  }

  focus() {
    (this.$refs.select as HTMLSelectElement).focus();
  }

  @Watch("data")
  dataChanged() {
    this.getNewValue(this.data);
  }
}

export default IntensSelect;
</script>

<style lang="scss">
.intens-select {
  width: 100%;
  border: 1px solid var(--background-color-dark);
  text-overflow: "";
  line-height: 1em;
  border-radius: 3px;
  font-family: "Courier New", Courier, monospace;
  &:focus {
    border: 2px solid black;
  }
}

.intens-select-input {
  font-family: monospace;
  width: 100%;
  border: 1px solid var(--background-color-dark);
  line-height: 1em;
  border-radius: 3px;
}
</style>
