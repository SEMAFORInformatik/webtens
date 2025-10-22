<template>
  <textarea
    class="intens-scrolled-text"
    :class="intensClass"
    v-model="currentValue"
    :readonly="!data.editable"
    :cols="cols"
    :rows="rows"
  ></textarea>
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { in_proto } from "../../proto";

interface IntensScrolledText {
  data: in_proto.DataField;
}

@Component
class IntensScrolledText extends mixins(base) {
  currentValue = "";
  rows = this.data.base.rowspan;
  cols = this.data.base.colspan;

  created() {
    this.$ids.addComponent(this);
  }

  mounted() {
    this.currentValue = this.data.value.stringValue.replace(/<\/?b>/g, "");
  }

  getNewValue(logs: in_proto.DataField) {
    this.intensClass = this.prefixCssClass(logs.base.styleClass)
    this.currentValue = logs.value.stringValue.replace(/<\/?b>/g, "");
  }
}

export default IntensScrolledText;
</script>

<style lang="scss">
.intens-scrolled-text {
  padding: 8px;
  font-family: monospace;
  white-space: pre;
  width: 100%;
  height: 100%;
}
</style>
