<template>
  <div :id="data?.base?.id">
    <h3 v-if="data.title !== ''" style="margin: 0px">{{ data.title }}</h3>
    <div
      class="intens-container"
      :class="{ framed: data.frame }"
      :style="{
        'flex-direction': flexDirection
      }">
      <component
        class="intens-container-item" v-for="component in data.elements"
        :key="getCompId(component)"
        :is="'intens-' + typeToString(component.type)"
        :form="form"
        :data="getElementData(component)"> 
      </component>
    </div>
  </div>
</template>
<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { in_proto } from "../../proto";

interface IntensContainer {
  data: in_proto.Container;
}

@Component
class IntensContainer extends mixins(base) {
  get flexDirection() {
    return this.data.orientation === in_proto.GuiElement.Orientation.Vertical ? "column" : "row"
  }
}

export default IntensContainer;
</script>
<style lang="scss">
.intens-container {
  display: flex;
  width: 100%;
  height: 100%;
  &.framed {
    border: 1px solid black;
    border-radius: 3px;
    padding: 3px;
    margin: 2px !important;
  }
}
</style>
