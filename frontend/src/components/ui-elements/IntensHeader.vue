<template>
  <div class="intens-header" v-if="this.visible">
    <div class="logos">
      <img alt="semafor logo" class="left-icon" :src="'/src/assets/' + data.left_icon + '.png'" /><img
        class="right-icon" alt="semafor logo"
        :src="'/src/assets/' + data.right_icon + '.png'"
      />
    </div>
    <h1>{{ data.title }}</h1>
    <h2>{{ data.subtitle }}</h2>
  </div>
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { IntensHeaderData } from "../../dataTypes";

interface IntensHeader {
  data: IntensHeaderData;
}

@Component
class IntensHeader extends mixins(base) {
  visible = false;
}

export default IntensHeader;
</script>

<style lang="scss">
.intens-header {
  text-align: center;
  margin: 15px 0px;
  padding-top: 10px;
  padding-bottom: 20px;
  background-color: var(--main-color-dark);
  h2 {
    font-size: 1.5em;
  }
}
.intens-header img {
  &.left-icon {
    float: left;
    margin-left: 30px;
  }
  &.right-icon {
    float: right;
    margin-right: 30px;
  }
  max-width: 80px;
  display: block;
}
</style>
