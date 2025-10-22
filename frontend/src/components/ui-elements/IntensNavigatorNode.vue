<template>
  <div
    class="navigator-node"
    :class="{
      collapsed: collapsed && data.nodes && data.nodes.length,
      visible: !collapsed && data.nodes && data.nodes.length,
    }"
  >
    <div
      class="data-container"
      v-if="data.visible"
      :style="{ 'grid-template-columns': widths }"
      :class="{
        selected: data.fullName === selection.fullName && level === selection.level,
      }"
      @click="clicked"
      @contextmenu="openCtxMenu"
    >
      <div class="column" v-for="(col, i) in column" :key="i">
        <div
          class="first-column data"
          v-if="i === 0"
          :style="{ 'margin-left': `${level * 1.5}em` }"
          v-tooltip="tooltip"
        >
          <div draggable="draggable" @dragstart="dragStart">
            <div class="drag-area">
              <div ref="toggle" v-if="data.folder" style="margin-right: 4px">
                <img alt="" :src="collapsed ? branch_closed_src : branch_open_src" :width="collapsed ? 8 : 12" />
              </div>
              <img
                class="class-icon"
                v-if="iconUrl && data.newCount <= 1 && data.visible"
                :src="iconUrl"
                :alt="data.name"
                draggable="false"
              /><span class="class-name" v-if="data.visible" :style="{color: data.fgcolor}">{{ data.labels[0] }}</span>
            </div>
          </div>
        </div>
        <template v-else>
          <div v-if="col.style !== 1">{{ data.labels[i] }}</div>
          <div v-else>
            <div v-if="data.labels[i] && !data.labels[i].startsWith('data:image')"></div>
            <img alt="" class="pixmap" v-else :src="data.labels[i]" draggable="false" />
          </div>
        </template>
      </div>
    </div>
    <intens-NavigatorNode
      v-show="!collapsed"
      :data="n"
      v-for="(n, i) in data.nodes"
      :key="n.fullName"
      :level="data.visible ? level + 1 : level"
      :column="column"
      :form="form"
      :index="i"
      :selection="selection"
      @select="$emit('select', $event)"
    ></intens-NavigatorNode>
  </div>
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { NavigatorSelection } from "./IntensNavigator.vue";
import IntensContextMenu from "./IntensContextmenu.vue";
import { Prop } from "vue-property-decorator";
import { IntensNavigatorColumn } from "../../dataTypes";
import { in_proto } from "../../proto";

interface IntensNavigatorNode {
  data: in_proto.INavigatorNode;
}

@Component
class IntensNavigatorNode extends mixins(base) {
  @Prop() level!: number;
  @Prop() column!: IntensNavigatorColumn[];
  @Prop() index!: number;
  @Prop() selection!: NavigatorSelection;

  iconUrl = "";
  collapsed = false;
  click: any = undefined;
  branch_open_src = this.getBaseUrl() + "/res/branch_open.png";
  branch_closed_src = this.getBaseUrl() + "/res/branch_closed.png";
  tooltip = this.data.tooltip || "";
  ///  tooltip = this.data.tooltip === "" ? this.data.label[0] : this.data.tooltip

  async created() {
    if (this.data.icon) {
      this.iconUrl = this.data.icon;
    }
  }

  clickNode(event: any, type: string | unknown) {
    if (["drag-area", "class-icon", "class-name"].includes(event.target.className || "")) {
      console.debug("created: clickNode: ", this.data.fullName, this.collapsed, this.data.folder);
      if (this.data.folder && type == "dblclick") {
        this.collapsed = !this.collapsed;
      }
    }
    this.$emit("select", { fullName: this.data.fullName, level: this.level });
    let reason: string = type === "dblclick" ? "activate" : "select";
    this.getTracer().startActiveSpan("click navigator node", async span => {
      await this.execute({
        reason,
        action: this.data.action,
        name: this.data.fullName,
        index: this.index,
        select_index: [this.index],
      });
      console.debug("clickNode", this.data.action || "");
      span.end();
    })
  }

  collapse() {
    console.debug("collapse", this.data.action);
    this.collapsed = !this.collapsed;
    this.$emit("select", { fullName: this.data.fullName, level: this.level });
  }

  get widths() {
    return this.column.reduce((a, e) => a + (Math.abs(e.width) > 3 ? Math.abs(e.width) : 3) * e.scale + "px ", "");
  }

  openCtxMenu(e: MouseEvent) {
    if (!this.data.popupMenu) return;
    e.preventDefault();
    const ctxmenu: IntensContextMenu = this.$ctxMenu.comp;

    let menu: any[] = [];
    for (let button of this.data.popupMenu.elements) {
      const element = this.getElementData(button)
      menu.push({
        label: element.label,
        type: button.type,
        callback: () => {
          this.execute({
            reason: "function",
            action: element.base.action,
            name: this.data.fullName,
            index: this.index,
            select_index: [this.index],
          });
          ctxmenu.close();
        },
      });
    }
    ctxmenu.open(e, menu);
  }

  // Helper function to determine dblclick event
  clicked(event: MouseEvent) {
    if (this.$refs.toggle?.[0]?.contains(event.target as Element)) {
      this.collapse();
      return;
    }
    return new Promise((resolve, reject) => {
      if (this.click) {
        clearTimeout(this.click);
        resolve("dblclick");
      }
      this.click = setTimeout(() => {
        this.click = undefined;
        resolve("click");
      }, 300);
    }).then((type) => {
      this.clickNode(event, type);
    });
  }

  dragStart(event: DragEvent) {
    if (event.dataTransfer != null) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.setData("text/plain", JSON.stringify(this.data));
      this.$emit("node-dragged", event);
    }
  }
}

export default IntensNavigatorNode;
</script>

<style lang="scss">
.intens-navigator {
  .data-container {
    display: grid;

    &:hover {
      background: var(--hover-color-light);
    }

    &.selected {
      background: var(--hover-color-dark);
    }
  }

  .navigator-node {
    > .data-container > .data .drag-area::before {
      content: "\00a0 \00a0";
      font-family: monospace;
    }
    &.collapsed > .data-container > .data .drag-area::before {
      content: "\27A4"; //"[+]";
    }
    &.visible > .data-container > .data .drag-area::before {
      content: "\1F893"; //"[-]";
    }
  }

  .data {
    display: grid;
    grid-template-columns: repeat(3, max-content);

    img {
      align-self: center;
    }
  }

  .column {
    padding-left: 5px;
  }
  .column > * {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .drag-area {
    display: flex;
    justify-content: center;
  }

  .class-icon {
    margin-right: 5px;
  }
}
</style>
