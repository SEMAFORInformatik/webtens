<template>
  <div class="intens-label" :class="intensClass" :style="`text-align: ${alignment};`">
    <label v-if="label" v-html="label"></label><img :src="iconSrc" :alt="data.icon" />
  </div>
</template>
<script lang="ts">
import base from "./base";
import unescape from "unescape";
import Component, { mixins } from "vue-class-component";
import { in_proto } from "../../proto";

interface IntensLabel {
  data: in_proto.Label;
}

@Component
class IntensLabel extends mixins(base) {
  label = "";
  iconSrc = "";
  alignment = "";

  mounted() {
    this.getNewValue(this.data);
  }

  getNewValue(data: in_proto.Label) {
    this.intensClass = this.prefixCssClass(data.base.styleClass)
    this.alignment = data.base.alignment === in_proto.GuiElement.Alignment.Right ? "right" : "left"
    if (data.label) {
      this.label = unescape(data.label.replaceAll("\n", "<br/>"));
    } else if (data.icon) {
      this.iconSrc = data.icon;
    }
  }
}

export default IntensLabel;
</script>
<style lang="scss">
.intens-label {
  padding: 0 5px;
  white-space: nowrap;
}
</style>
