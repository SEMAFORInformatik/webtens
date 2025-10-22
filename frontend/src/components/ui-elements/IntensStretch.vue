<template>
  <div class="intens-stretch" :class="{ horizontal: data.horizontalFactor == 1 }"></div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class IntensStretch extends Vue {
  @Prop() data: any;
  @Prop() form: any;
}
</script>
<style>
.intens-stretch.horizontal {
  flex-grow: 1;
}
</style>
