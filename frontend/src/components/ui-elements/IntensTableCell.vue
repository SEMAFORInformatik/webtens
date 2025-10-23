<template>
  <div class="intens-table-cell" v-tooltip="{content: data.helptext, placement: 'right'}" :style="{
    backgroundColor: data.element.base.bgColor || !data.element.base.editable ? 'var(--main-color-dark)' : 'white'
  }">
    <template v-if="intensSelectData !== null">
      <component ref="select" :is="'intens-ComboBox'" :editable="!selectionMode" :data="intensSelectData" :form="form">
      </component>
    </template>
    <template v-else-if="intensToggleData !== null">
      <component ref="toggle" :is="'intens-Toggle'" :data="intensToggleData" :form="form"></component>
    </template>
    <template v-else>
      <input v-if="data.element.base.editable && !selectionMode" 
        :id="data.element.base.fullName || data.element.base.action" ref="input" class="edit-input" type="text" :style="{
        textAlign: !isDouble ? 'left' : 'right',
        backgroundColor: data.element.base.bgColor ? data.element.base.bgColor : 'inherit'
      }" v-model="value" @keyup.enter="sendValueUpdate" @blur="sendValueUpdate" @keydown="handleKey" autocomplete="off" />
      <span v-else
        :id="data.element.base.fullName || data.element.base.action" ref="input" class="span-input" type="text" :style="{
        textAlign: !isDouble ? 'left' : 'right',
        backgroundColor: data.element.base.bgColor ? data.element.base.bgColor : 'inherit'
      }">
      {{ value }}
      </span>
    </template>
  </div>
</template>

<script lang="ts">

import base from "./base";
import Component, { mixins } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import { in_proto } from "../../proto";


@Component
class IntensTableCellComp extends mixins(base) {
  declare data: in_proto.Table.MatrixEntry.IElementEntry;
  @Prop({ default: 0 })
  index!: number;
  @Prop({ default: false })
  selectionMode!: boolean;

  @Prop({ default: false })
  isFocused!: boolean;
  value = "";

  intensSelectData: in_proto.IComboBox & {index?: number, hasTable?: boolean, style: {noMargin:boolean}} | null = null;
  intensToggleData: in_proto.IDataField & {index?: number, hasTable?: boolean} | null = null;

  @Watch("data")
  reRender() {
    this.value = this.data.element?.base?.value?.formattedValue || this.data.element?.base?.value?.stringValue;
    this.intensSelectData = null
    this.intensToggleData = null
    if (this.data.element.inputDataset.length) {
      this.intensSelectData = this.data.element as any
      this.intensSelectData.index = this.index;
  
      this.intensSelectData.hasTable = true;
      this.intensSelectData.style = { noMargin: true }
    } else if (this.data.type === in_proto.GuiElement.Type.ETableToggleDataItem){
      this.intensToggleData = this.data.element.base
      this.intensToggleData.index = this.index;
      this.intensToggleData.hasTable = true;
    }
  }

  @Watch("isFocused")
  focus() {
    if (this.isFocused) {
      (this.$refs.input as HTMLInputElement)?.focus();
      (this.$refs.select as HTMLInputElement)?.focus();
      (this.$refs.toggle as HTMLInputElement)?.focus();
    }
  }

  created() {
    this.reRender();
    if (!this.data.element) console.log(this)
  }

  sendValueUpdate() {
    this.$emit("navigate", "blur");
    if (this.data.element.base.value.datatype === in_proto.ValueInfo.DataType.Double
      && this.value === this.data.element.base.value.formattedValue) {
      return;
      } else if ((!this.value && this.data.element.base.value.formattedValue) || (this.value === this.data.element.base.value.formattedValue as string || this.value === this.data.element.base.value.stringValue)) {
      return;
    }

    let val: string | number;
    const stringValue = String(this.value);
    if (this.data.element.base.value.datatype == in_proto.ValueInfo.DataType.Double) {
      let valStr = stringValue.replace(/,/g, ".");
      if (valStr.indexOf(".") == -1) {
        valStr += "."
      }
      val = !valStr || isNaN(Number(valStr)) ? stringValue : parseFloat(valStr) / this.data.element.base.scale;
    } else {
      val = stringValue;
    }
    this.getTracer().startActiveSpan("update table data", async span => {
      if (this.data.element.base.action) {
        await this.execute({
          reason: "Input",
          name: this.data.element.base.fullName,
          action: this.data.element.base.action,
          value: val,
        });
      } else {
        await this.setDatapool(this.data.element.base.fullName, val);
      }
      span.end();
    })
  }

  handleKey(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowUp":
        this.$emit("navigate", "up")
        break;
      case "ArrowDown":
        this.$emit("navigate", "down")
        break;
      case "ArrowLeft":
        if ((e.target as HTMLInputElement).selectionStart === 0 || e.ctrlKey) {
          this.$emit("navigate", "left")
        }
        break;
      case "ArrowRight":
        if ((e.target as HTMLInputElement).selectionStart === (e.target as HTMLInputElement).value.length || e.ctrlKey) {
          this.$emit("navigate", "right")
        }
        break;
      case "Enter":
        this.$emit("navigate", "right")
        break;
    }
  }

  get isDouble() {
    return this.data.element.base.value.datatype === in_proto.ValueInfo.DataType.Double;
  }
}

export default IntensTableCellComp;

</script>
<style lang="scss">
.intens-table-cell {
  height: 100%;
  display:flex;

  >* {
    width: 100%;
  }

  .edit-input {
    border: none;

    &:disabled {
      background-color: var(--main-color-dark);
      color: #595959;
    }
  }

  .span-input {
    padding: 1px 2px;
  }
}
</style>
