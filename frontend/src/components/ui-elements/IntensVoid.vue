<template>
  <div
    class="intens-void"
    :class="intensClass"
    :style="`height: ${data.height ? data.height + 'px' : 'auto'};               width: ${
      data.width ? data.width + 'px' : 'auto'
    };`"
  ></div>
</template>

<script lang="ts">
import Component, { mixins } from "vue-class-component";
import { in_proto } from "../../proto";
import base from "./base";

@Component
export default class IntensVoid extends mixins(base) {
  created() {
    this.getNewValue(this.data)
  }
  getNewValue(data: in_proto.Void) {
    this.intensClass = this.prefixCssClass(data.base.styleClass)
  }
}
</script>
