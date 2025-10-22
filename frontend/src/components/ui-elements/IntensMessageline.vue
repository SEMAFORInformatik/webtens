<template>
  <div class="intens-messageline"></div>
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";

@Component
export default class IntensMessageline extends mixins(base) {}
</script>

<style lang="scss">
.intens-messageline {
  color: cadetblue;
  height: 1em;
}
</style>
