<template>
  <div class="intens-message"></div>
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";

@Component
export default class IntensMessage extends mixins(base) {
  created() {
    this.$ids.addComponent(this);
  }
  getNewValue(value: any) {
    console.info("Message:", value);
  }
}
</script>
