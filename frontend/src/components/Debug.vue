<template>
  <div class="debug">{{ data }}<button @click="getDatapool">Get</button></div>
</template>
<script lang="ts">
import base from "./ui-elements/base";
import Component, { mixins } from "vue-class-component";

// Can be used in case of new components to look at their data structure
@Component
export default class Debug extends mixins(base) {
  created() {
    console.debug(JSON.parse(JSON.stringify(this.data)));
  }
}
</script>
