<template>
  <div class="ctx-menu" v-if="isOpen" @contextmenu.prevent :style="{ top: pos.y + 'px', left: pos.x + 'px' }"
    :class="{isLowScreen: isLowScreen, isRightScreen: isRightScreen}">
    <div>
      <IntensContextMenuItem v-for="(option, i) in options" :option="option" :key="i"></IntensContextMenuItem>
    </div>
  </div>
</template>

<script lang="ts">
import IntensContextMenuItem from "./IntensContextmenuItem.vue";
import Component from "vue-class-component";
import { CtxOption } from "../../dataTypes";
import Vue from "vue";

@Component({
  components: {
    IntensContextMenuItem,
  },
})
export default class IntensContextMenu extends Vue {
  isOpen = false;
  pos = { x: 0, y: 0 };
  clickChecked = false;
  isLowScreen = false // If we are in the lower half of the screen we want to show the menu going up
  isRightScreen = false // If we are in the lower half of the screen we want to show the menu going up
  // Options: Array of objects
  // Object in array: label, callback, submenu
  options: CtxOption[] = [];

  mounted() {
    document.body.addEventListener("mousedown", this._bodyClickListener);
  }

  open(e: MouseEvent, data: CtxOption[]) {
    console.debug("IntensContextMenu options", data);
    this.isOpen = true;
    this.pos.x = e.pageX;
    this.pos.y = e.pageY;
    // 32 is the height of the menu item
    // if the menu items together would end up outside the screen we move the menu up
    this.isLowScreen = e.clientY > window.innerHeight - (data.length * 32);
    this.isRightScreen = e.clientX > window.innerWidth - 160;
    this.options = data;
    this.clickChecked = false;
  }
  close() {
    this.isOpen = false;
  }
  _bodyClickListener(e: Event) {
    if (!this.isOpen) return;

    if (!this.clickChecked) {
      this.clickChecked = true;
      return;
    }

    let outsideClick = !this.$el.contains(e.target as Node);
    if (outsideClick) {
      this.isOpen = false;
    }
  }
}
</script>

<style lang="scss">
.ctx-menu {
  cursor: default !important;
  position: absolute;
  white-space: nowrap;
  z-index: 270000;
  background: white;
  min-width: max-content;
  overflow: visible !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.isLowScreen {
  transform: translateY(-100%);
}
.isRightScreen {
  transform: translateX(-100%);
}
</style>
