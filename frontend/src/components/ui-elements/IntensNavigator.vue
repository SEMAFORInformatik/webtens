<template>
  <div class="navigator-container" :class="intensClass">
    <div class="intens-navigator" :style="`width: ${columns.reduce((p, c) => p + c.width, 0) + getScrollbarWidth() + 2}px;`"> <!-- 2 = border width -->
      <div class="column-titles" @contextmenu="openCtxMenu($event)">
        <div
          class="column-title"
          v-for="col in columns"
          :key="col.tag"
          :id="col.tag + '-' + data.base.id"
          :style="{'width':(Math.abs(col.width) > 3 ? Math.abs(col.width) : 3) * col.scale + 'px'}"
        >
          {{ col.label }}
        </div>
      </div>
      <div class="navigator-body" :style="`height: ${data.height}px;`">
        <intens-NavigatorNode
          v-for="value in nodes"
          :key="value.name"
          :data="value"
          :level="0"
          :index="0"
          :form="form"
          :selection="selection"
          :column="columns"
          @select="setSelection($event)"
        ></intens-NavigatorNode>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import IntensContextMenu from "./IntensContextmenu.vue";
import { in_proto } from "../../proto";

export interface NavigatorSelection {
  fullName: string;
  level: number | undefined;
}

interface IntensNavigator {
  data: in_proto.Navigator;
}

@Component
class IntensNavigator extends mixins(base) {
  columns: in_proto.INavigatorColumn[] = [];
  nodes: in_proto.INavigatorNode[] = [];
  observer: MutationObserver | undefined = undefined;
  selection: NavigatorSelection = {
    fullName: "",
    level: undefined,
  };
  initColumns: boolean = true;

  mutationCallback(list: MutationRecord[]) {
    //console.debug("mutationCallback list", list, "observer", observer)
    for (const node of list) {
      if (node.attributeName !== "style" || !node.oldValue) return;
      const changes = node.oldValue.split(";");
      changes.forEach((change) => {
        if (change.includes("width: ")) {
          const width = ((node.target as any).style as CSSStyleDeclaration).width;
          //console.debug("mutationCallback newWidth 1", width)
          const newWidth = parseInt(width.slice(0, width.length - 2));
          if (isNaN(newWidth)) return;
          //console.debug("mutationCallback newWidth 2", newWidth)
          const id = (node.target as any).id as string;
          //console.debug("mutationCallback newWidth 3", id)
          const tag = id.split("-")[0];
          const column = this.columns.find((value) => value.tag === tag);
          //console.debug("mutationCallback newWidth 4", column)
          if (column === undefined) return;
          column.width = newWidth;
          window.localStorage.setItem(this.getColumnID(column), String(newWidth))
        }
      });
    }
  }

  created() {
    this.getNewValue(this.data);
    this.$ids.addComponent(this);
  }

  mounted() {
    this.observer = new MutationObserver(this.mutationCallback);
    //console.debug("mounted columns", this.columns)
    for (const col in this.columns) {
      //console.debug("mounted col", col, this.columns[col])
      const node = document.getElementById(`${this.columns[col].tag}-${this.data.base.id}`)!;
      //console.debug("mounted node", node)
      this.observer.observe(node, {
        attributes: true,
        attributeOldValue: true,
      });
    }
  }

  destroyed() {
    this.observer.disconnect();
  }

  getColumnID(column: in_proto.INavigatorColumn) {
    return `${location.pathname}_${this.data.base.id}_${column.tag}`
  }

  getNewValue(value: in_proto.Navigator) {
    this.intensClass = this.prefixCssClass(value.base.styleClass)
    //console.info("name: " + value.name + ". data: " + JSON.stringify(value))
    if (this.initColumns) {
      this.columns = value.columns;
      this.columns.forEach((column) => {
        column.initialWidth = Math.abs(column.width * (16 / 2) + 9);
        let loadedWidth = window.localStorage.getItem(this.getColumnID(column));
        column.width = loadedWidth ? Number(loadedWidth) : column.initialWidth;
      });
    }
    this.nodes = [value.root];
    this.initColumns = false;
  }

  setSelection(event: NavigatorSelection) {
    this.selection = event;
  }

  resetColWidths() {
    this.columns.forEach(col => { 
      col.width = col.initialWidth
      // add delay to removal to prevent the mutationObserver from re-adding it from the reset
      setTimeout(() => window.localStorage.removeItem(this.getColumnID(col)), 500)
    });
  }

  openCtxMenu(e: MouseEvent) {
    e.preventDefault();
    const ctxmenu: typeof IntensContextMenu = this.$ctxMenu.comp;
    ctxmenu.open(e, [
      {
        label: "Reset Column sizes",
        callback: () => { this.resetColWidths(); ctxmenu.close();}
      }
    ])
  }
}

export default IntensNavigator;
</script>

<style lang="scss">
.intens-navigator {
  background: var(--main-color-light);
  margin: 5px;
  overflow-x: scroll;

  .navigator-body {
    overflow-y: scroll;

    border-style: solid;
    border-width: 0 1px 1px 1px;
    border-radius: 0 0 2px 2px;
    border-color: var(--border-color);
  }

  .column-titles {
    border: 1px solid var(--border-color-dark);
    border-radius: 2px 2px 0 0;
    background: var(--main-color-dark);
    display: flex;
  }

  .column-title {
    padding: 1px;
    border-right: 1px solid var(--border-color-dark);
    overflow: auto;
    overflow-x: hidden;
    resize: horizontal;
  }

  .column-title:last-child {
    border-right: 0;
  }

  .title {
    margin-left: 5px;
  }
}
</style>
