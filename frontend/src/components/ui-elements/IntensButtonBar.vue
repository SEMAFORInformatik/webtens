<template>
  <div class="intens-buttonbar" :style="`grid-template-columns: repeat(${data.elements.length}, 1fr);`">
    <template v-for="component in data.elements">
      <component :is="'intens-' + typeToString(component.type)" :data="getElementData(component)" :form="form"></component>
    </template>
  </div>
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";

@Component
export default class IntensButtonBar extends mixins(base) {}
</script>

<style lang="scss">
.intens-buttonbar {
  display: grid;
  grid-column-gap: 7px;
}
</style>
