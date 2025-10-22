<template>
  <div
    class="intens-separator"
    :class="{
      horizontal: isHorizontal,
      vertical: !isHorizontal,
    }"
  ></div>
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { in_proto } from "../../proto";

@Component
export default class IntensSeparator extends mixins(base) {
  @Prop() index!: string;

  get isHorizontal() {
    return this.data.orientation === in_proto.GuiElement.Orientation.Horizontal
  }
}
</script>

<style lang="scss">
.intens-separator {
  border: 1px solid black;
  margin: 5px 0px;
  &.horizontal {
    width: 100%;
  }
}
</style>
