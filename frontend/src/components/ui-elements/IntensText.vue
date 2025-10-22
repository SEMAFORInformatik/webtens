<template>
  <div class="intens-text" :class="intensClass" @contextmenu="openCtxMenu">
    <iframe class="html-area" v-if="mimetype === 'text/html'" :srcdoc="currentValue"></iframe>
    <div class="svg-area grid" v-if="mimetype === 'image/svg+xml'" ref="svgDragArea" @wheel="activatePanZoom" :key="panzoomKey"
      :style="{
        'grid-template-columns': `${!dragXInit ? 'calc(900px - 20px)' : svgWidth + 'px'} 20px`,
        'grid-template-rows': `${!dragYInit ? 'calc(420px - 20px)' : svgHeight + 'px'} 20px`,
      }"
    >
      <img alt="" v-if="!zoomEnabled" :src="currentValue" ref="svgImage"
        :style="{
        width: resizeAspectCheck('x') ? 'auto' : '100%',
        height: resizeAspectCheck('y') ? 'auto' : '100%'
      }" />
      <svg-pan-zoom
        v-else
        style="width: 100%; height: 100%"
        :maxZoom="100"
        :fit="true"
        :zoomScaleSensitivity="0.15"
        @svgpanzoom="registerSvgPanZoom"
        ><svg v-html="svgInner" style="width: 100%; height: 100%"></svg
      ></svg-pan-zoom>
      <template>
        <button class="bidirectional-resize" :id="'bidirectional-resize-' + data.base.base.id">
          <img alt="resize bi-directional" :src="getBaseUrl() + '/res/bi-resize.png'" />
        </button>
        <button class="right-resize" :id="'right-resize-' + data.base.base.id">
          <img alt="resize horizontal" :src="getBaseUrl() + '/res/horizontal-resize.png'" />
        </button>
        <button class="bottom-resize" :id="'bottom-resize-' + data.base.base.id">
          <img alt="resize vertical" :src="getBaseUrl() + '/res/horizontal-resize.png'" />
        </button>
      </template>
    </div>
    <textarea
      class="text-area"
      v-if="mimetype === 'text/plain'"
      v-model="currentValue"
      @blur="updateValue"
      :disabled="disabled"
      :cols="data.base.length"
      :rows="data.base.precision"
      :style="{ 'background-color': backgroundColor, color: color }"
      :class="{ disabled: disabled }"
    ></textarea>
    <div v-else :height="height"></div>
  </div>
</template>
<script lang="ts">
import base from "./base";
import SvgPanZoom from "vue-svg-pan-zoom";
import SvgPanZoomInstance from "svg-pan-zoom";
import Component, { mixins } from "vue-class-component";
import interact from "interactjs";
import { CtxOption } from "../../dataTypes";
import { in_proto } from "../../proto";
import { Base64 } from "js-base64";

interface IntensText {
  data: in_proto.IText;
}

@Component({
  components: { SvgPanZoom },
})
class IntensText extends mixins(base) {
  currentValue = "";
  svgContent = "";
  disabled = !this.data.base.editable;
  showDiv = false;
  mimetype = "";
  viewBox = "";
  menus = [];
  svgpanzoom: typeof SvgPanZoomInstance | null = null;
  svgWidth = 0;
  dragXInit = false;
  svgHeight = 0;
  dragYInit = false;
  panzoomKey = 0;
  zoomEnabled = false;
  width = this.data.base.base.width;
  height = this.data.base.base.height;
  color: string = "";
  backgroundColor: string = "";
  fullName = "";

  created() {
    console.log(this.data)
    this.$ids.addComponent(this);
    //Component has already been initialized
    if (!this.currentValue) {
      this.getNewValue(this.data);
    }
    interact("#bidirectional-resize-" + this.data.base.base.id)
      .resizable({
        listeners: {
          move: (event: Interact.ResizeEvent) => {
            this.setInitialDragSize();
            this.dragXInit = true;
            this.dragYInit = true;
            this.svgWidth += event.delta.x;
            this.svgHeight += event.delta.y;
          },
        },
      })
      .styleCursor(false);
    interact("#right-resize-" + this.data.base.base.id)
      .resizable({
        listeners: {
          move: (event: Interact.ResizeEvent) => {
            this.setInitialDragSize();
            this.dragXInit = true;
            this.svgWidth += event.delta.x;
          },
        },
      })
      .styleCursor(false);
    interact("#bottom-resize-" + this.data.base.base.id)
      .resizable({
        listeners: {
          move: (event: Interact.ResizeEvent) => {
            this.setInitialDragSize();
            this.dragYInit = true;
            this.svgHeight += event.delta.y;
          },
        },
      })
      .styleCursor(false);
  }

  setInitialDragSize() {
    if (this.dragXInit || this.dragYInit) return;

    this.svgWidth = this.$refs.svgDragArea.clientWidth - 20;
    this.svgHeight = this.$refs.svgDragArea.clientHeight - 20;
  }

  resizeAspectCheck(side: "x" | "y") {
    const x = this.svgWidth || this.width;
    const y = this.svgHeight || this.height;
    const ratio = this.$refs.svgImage?.width / this.$refs.svgImage?.height;
    if (Number.isNaN(ratio) || x > y * ratio) return side === "x"
    return side ==="y";
  }

  openCtxMenu(e) {
    e.preventDefault();
    const ctxmenu: IntensContextMenu = this.$ctxMenu.comp;
    let menus: CtxOption[] = [];
    for (const menu of this.menus) {
      const element = this.getElementData(menu)
      menus.push({
        label: element.label,
        type: menu.type,
        checked: element.checked,
        callback: async () => {
          await this.guiElementMethod({
            name: this.data.base.base.Name,
            method: "MenuButtonAction",
            argument: JSON.stringify({ id: menu.id }),
          });
          ctxmenu.close()
        },
      });
    }
    ctxmenu.open(e, menus);
  }

  updateValue() {
    this.getTracer().startActiveSpan("text update", async span => {
      if (this.data.base.action) {
        await this.execute({ action: this.data.base.action, reason: "Input", name: this.fullName, value: this.currentValue });
      } else {
        await this.setDatapool(this.fullName, this.currentValue);
      }
      span.end();
    })
  }
  getNewValue(data: in_proto.IText) {
    this.intensClass = this.prefixCssClass(data.base.base.styleClass)
    this.svgpanzoom?.destroy()
    this.svgpanzoom = null;
    this.zoomEnabled = false;
    this.mimetype = data.base.value.mimetype;
    this.width = data.base.base.width;
    this.height = data.base.base.width;
    this.disabled = !data.base.editable;
    this.menus = data.popupBaseMenu?.elements;
    this.color = data.base.fgColor || "";
    this.backgroundColor = data.base.bgColor || "";
    this.fullName = data.base.fullName;
    console.debug("mimetype: " + data.base.value.mimetype);
    switch (data.base.value.mimetype) {
      case "image/svg+xml":
      // Default: show image with base64 encoded svg
      // Zoomed: decode base64 string to get svg content
        this.currentValue = data.base.value.stringValue;
        this.svgContent = Base64.decode(data.base.value.stringValue.substring(26));
        break;
      case "text/html":
        this.currentValue = Base64.decode(data.base.value.stringValue);
        break;
      case "text/plain":
        this.currentValue = data.base.value.datatype === in_proto.ValueInfo.DataType.CDATA && this.disabled ? Base64.decode(data.base.value.stringValue) : data.base.value.stringValue;
        break;
      default:
        this.currentValue = data.base.value.stringValue;
    }
  }
  registerSvgPanZoom(svgpanzoom: any) {
    this.svgpanzoom = svgpanzoom;
  }
  activatePanZoom() {
    if (!this.svgpanzoom) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(this.svgContent, "image/svg+xml");
      this.viewBox = doc.children[0].getAttribute("viewBox")!;
      console.debug("activatePanZoom: viewBox: " + this.viewBox);
      this.zoomEnabled = true;
      this.panzoomKey++;
    }
  }

  get svgInner() {
    if (!this.svgContent) return "";
    console.debug("svgInner : ", this.svgContent);
    return this.svgContent;
  }
}

export default IntensText;
</script>

<style lang="scss">
.intens-text {
  color: #2d2d2d;
  font-family: monospace;
//  margin: 5px;
//  padding: 5px;
  .html-area {
    background-color: var(--main-color-dark);
    padding: 5px;
    width: 950px;
    height: 900px;
    overflow-y: scroll;
    resize: both;
  }
  .svg-area {
    border: 1px solid black;
  }
  .text-area {
    padding: 5px;
    font-size: 0.9em;
    background-color: var(--main-color-light);
    resize: none;
  }
  .text-area.disabled {
    border: 0;
    padding: 0;
    background-color: var(--main-color-dark);
  }
  .grid {
    display: grid;

    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      > img {
        width: 24px;
      }
    }
  }
  .bidirectional-resize {
    grid-column: 2 / 2;
    grid-row: 2 / 2;
    cursor: nwse-resize;
  }

  .right-resize {
    grid-column: 2 / 2;
    grid-row: 1 / 2;
    cursor: ew-resize;
    > img {
      transform: rotate(90deg);
    }
  }

  .bottom-resize {
    grid-column: 1 / 2;
    grid-row: 2 / 2;
    cursor: ns-resize;
  }
}
</style>
