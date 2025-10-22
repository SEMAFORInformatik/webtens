<template>
  <div class="intens-icon-view grid" :style="{ width: data.width + 'px' }">
    <div
      class="grid-item"
      draggable="draggable"
      @dragstart="dragStart($event, node)"
      v-for="node in nodes"
      :key="node.fullName"
    >
      <img :alt="node.tooltip" :src="node.icon" height="40px" v-tooltip="node.tooltip" />
    </div>
  </div>
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { IntensIconViewNodeData, IntensIconViewData } from "../../dataTypes";

interface IntensIconView {
  data: IntensIconViewData;
}

@Component
class IntensIconView extends mixins(base) {
  nodes: IntensIconViewNodeData[] = [];
  ranGetNewValue = false;

  created() {
    this.$ids.addComponent(this);
  }

  mounted() {
    setTimeout(() => {
      // run getNewValue when its was not run by itself
      if (this.ranGetNewValue === false) {
        this.getNewValue(this.data);
      }
    }, 500);
  }

  getNewValue(value: IntensIconViewData) {
    this.ranGetNewValue = true;
    this.storeNodes(value);
  }

  storeNodes(value: IntensIconViewData) {
    try {
      this.nodes = value.root[0].node;
    } catch (e) {
      console.error("could not store nodes");
    }
  }

  dragStart(event: DragEvent, node: IntensIconViewNodeData) {
    if (event.dataTransfer != null) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.setData("text/plain", JSON.stringify(node));
      this.$emit("node-dragged", event);
    }
  }
}

export default IntensIconView;
</script>

<style lang="scss">
@import "../../assets/main.scss";
.intens-icon-view {
  display: grid;
  grid-template-columns: repeat(auto-fill, 60px);
  border: black solid 1px;
  border-radius: 5px;
  background-color: $backgroundColor;
  margin-bottom: 2px;
  padding-left: 10px;
  padding-bottom: 20px;

  .grid-item {
    margin-top: 1px;
    margin-bottom: 1px;
  }
  img {
    max-width: 60px;
    max-height: 40px;
    width: auto;
    height: auto;
  }
}
</style>
