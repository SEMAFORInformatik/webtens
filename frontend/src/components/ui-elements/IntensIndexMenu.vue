<template>
  <div class="intens-index-menu" :class="intensClass" @contextmenu="openCtxMenu">
    <label>{{ label }}</label>
  </div>
</template>
<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { CtxOption } from "../../dataTypes";
import IntensContextMenu from "./IntensContextmenu.vue";
import { in_proto } from "../../proto";

interface IntensIndexMenu {
  data: in_proto.IIndexMenu;
}

@Component
class IntensIndexMenu extends mixins(base) {
  label = "";

  created() {
    this.$ids.addComponent(this);
  }

  mounted() {
    this.label = this.data.label;
  }

  getNewValue(data: in_proto.IndexMenu) {
    this.intensClass = this.prefixCssClass(data.base.styleClass)
    this.label = data.label;
  }

  openCtxMenu(e: MouseEvent) {
    e.preventDefault();
    const ctxmenu: IntensContextMenu = this.$ctxMenu.comp;
    let menus: CtxOption[] = [];
    for (const menu of this.data.popupMenu.elements) {
      const element = this.getElementData(menu);
      if (element.action === "MENU_BUTTON_ACTION") {
        menus.push({
          label: element.label,
          type: menu.type,
          callback: async () => {
            await this.guiElementMethod({
              name: this.data.guielement,
              method: "MenuButtonAction",
              argument: JSON.stringify({ id: menu.id }),
            });
            ctxmenu.close()
          },
        });
      }
    }
    ctxmenu.open(e, menus);
  }
}

export default IntensIndexMenu;
</script>
<style lang="scss">
.intens-index-menu {
  text-align: center;
  width: 100%;
}
</style>
