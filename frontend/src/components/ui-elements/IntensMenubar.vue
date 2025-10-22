<template>
  <nav class="intens-menubar columns" :class="intensClass" :key="updateIndex">
    <div :id="`menubar-${form.base.Name}-${menu.e.label}`" class="menu-entry" v-for="(menu, i) in menuData.elements" @click.self="openMenu(i)" v-if="menu?.e">
      {{ menu.e.label }}
      <div class="pulldown-container" :class="{ open: openStates[i] }">
        <div class="pulldown-menu">
          <intens-MenuButton
            v-for="(entry, index) in menu.e.elements"
            @finished="closeMenu(i)"
            @clickClosed="closePulldowns"
            :visible="openStates[i]"
            :data="entry"
            :ref="entry.id"
            :form="form"
            :parent="`menubar-${form.base.Name}-${menu.e.label}`"
            :key="entry.id || 'Separator_' + index"
          ></intens-MenuButton>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { in_proto } from "../../proto";

interface IntensMenubar {
  data: in_proto.Menubar;
}

@Component
class IntensMenubar extends mixins(base) {
  openStates = [];
  menuData = {}
  updateIndex = 0

  mounted() {
    this.$ids.addComponent(this);
    this.getNewValue(this.data)
  }

  getNewValue(newData) {
    this.intensClass = this.prefixCssClass(newData.class)
    this.updateIndex++
    this.menuData = newData
    this.menuData.elements = newData.elements.map(ref => {
      const ele = this.getElementData(ref) as in_proto.IPulldownMenu;
      if (!ele) return
      ele.elements = ele.elements.map(ref => ({...ref, e: this.getElementData(ref)}))
      return {...ref, e: ele}
    }).filter(Boolean);
  }

  closeMenu(menu: any) {
    this.$set(this.openStates, menu, false)
  }

  closePulldowns() {
    this.menuData.elements.forEach(i => {
      if (!i) return
      i.e.elements.forEach(e => {
        if (!this.$refs[e.id]) return;
        this.$refs[e.id][0].open = false
      });
    });
  }

  openMenu(menu: any) {
    if (this.openStates[menu]) {
      this.$set(this.openStates, menu, false)
      return
    }
    this.openStates.forEach((_, i) => {
      this.$set(this.openStates, i, false)
    })
    this.closePulldowns();
    this.$set(this.openStates, menu, !this.openStates[menu])
  }
}

export default IntensMenubar;
</script>

<style lang="scss">
.intens-menubar {
  display: flex;
}

.menu-entry {
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 0 0 4px 4px;
  background: linear-gradient(white, #f0f0f0);

  &:hover {
    background: var(--hover-color-dark);
  }
  .pulldown-container.open > .pulldown-menu {
    visibility: visible;
  }
}


.pulldown-container {
  margin-left: 5px;
}

.pulldown-menu {
  margin-top: 6px;
  margin-left: -16px;
  position: absolute;
  visibility: hidden;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2), -5px 5px 8px rgba(0, 0, 0, 0.2);
  z-index: 10000;
}
</style>
