<template>
  <div
    class="intens-diagram"
    :id="data.base.Name"
    :class="intensClass"
    @drop.prevent="handleDrop"
    @dragover.prevent
    @dragenter.prevent
    :style="{
      'grid-template-columns': `${container_width}px 20px`,
      'grid-template-rows': `${container_height}px 20px`,
    }">
    <div>
      <div
        class="wrapper"
        :style="{
          width: container_width + 'px',
          height: container_height + 'px',
        }">
        <canvas ref="canvas" :id="`c-${data.base.id}`"></canvas>
      </div>
    </div>
    <template v-if="isResizeButtons">
      <button class="bidirectional-resize" :id="'bidirectional-resize-' + data.base.id">
        <img alt="resize bi-directional" :src="getBaseUrl() + '/res/' + 'bi-resize.png'" />
      </button>
      <button class="right-resize" :id="'right-resize-' + data.base.id">
        <img alt="resize horizontally" :src="getBaseUrl() + '/res/' + 'horizontal-resize.png'" />
      </button>
      <button class="bottom-resize" :id="'bottom-resize-' + data.base.id">
        <img alt="resize vertically" :src="getBaseUrl() + '/res/' + 'horizontal-resize.png'" />
      </button>
    </template>
  </div>
</template>

<script lang="ts">
import base from "../base";
import Component, { mixins } from "vue-class-component";
import * as t from "../../../dataTypes";
import {
  IntensDiagramNodeData,
  CtxOption,
} from "../../../dataTypes";
import IntensContextMenu from "../IntensContextmenu.vue";
import { fabric } from "fabric";
import * as f from "./funcs";
import * as c from "./const";
import interact from "interactjs";
import { in_proto } from "../../../proto";


interface IntensDiagram {
  data: in_proto.Navigator;
}

@Component
class IntensDiagram extends mixins(base) {
  response: in_proto.Navigator | null = null;
  nodes: in_proto.INavigatorNode[] = [];
  canvas: fabric.Canvas | null = null;
  canvasBuffer: any = {};
  selectedLine: fabric.Line | null = null;
  ongoingConnection: t.NodeConnection | null = null;
  nodesThatNeedSelection: string[] = []; // identifier is fullName
  connections: in_proto.IConnection[] = [];
  connectionsAttr: in_proto.IConnectionAttr[] = [];
  diagram_connection_ratio: number = 1;
  ranGetNewValue: boolean = false;
  enabled: boolean = true;
  canvas_width = 2 * 600;
  canvas_height = 2 * 300;
  container_width = 575;
  container_height = 575;
  sizeFromContainer: boolean = false; // when size was set from IntensContainer.vue
  fullName = "";
  allowChangeOfCanvasSize = true;
  isResizeButtons = true;
  // to capture both left and right buttons at the same time
  leftButtonDown = false;
  rightButtonDown = false;
  middleButtonDown = false;
  tooltipState: t.TooltipState = {
    active: false,
    timeout_id: null,
    object: null,
  };

  created() {
    this.$ids.addComponent(this);
  }

  // to capture both left and right buttons at the same time
  setMiddleClick(on: boolean, ev: any, type: "doc" | "fabric") {
    let leftClick = type === "doc" ? ev.button === 0 : ev.button === 1;
    let rightClick = type === "doc" ? ev.button === 2 : ev.button === 3;
    let middleClick = type === "doc" ? ev.button === 1 : ev.button === 2;
    if (leftClick) {
      this.leftButtonDown = on;
    } else if (rightClick) {
      this.rightButtonDown = on;
    } else if (middleClick) {
      this.middleButtonDown = on;
    }
  }

  mounted() {
    this.enabled = this.data.base.enabled;
    this.initCanvas();
    document.addEventListener("keydown", this.keyDownEvent);
    document.addEventListener("contextmenu", (e: MouseEvent) => {
      let canvas = document.getElementById(`c-${this.data.base.id}`)!;
      if (!canvas) return;
      let bound = canvas.getBoundingClientRect();
      if (e.x >= bound.left && e.y >= bound.top && e.x <= bound.left + bound.width && e.y <= bound.top + bound.height) {
        e.preventDefault();
      }
    });
    document.addEventListener("mousedown", (ev) => this.setMiddleClick(true, ev, "doc"));
    document.addEventListener("mouseup", (ev) => this.setMiddleClick(false, ev, "doc"));
  }

  destroyed() {
    document.removeEventListener("keydown", this.keyDownEvent);
    document.removeEventListener("contextmenu", (e: MouseEvent) => {
      let canvas = document.getElementById(`c-${this.data.base.id}`)!;
      let bound = canvas.getBoundingClientRect();
      if (e.x >= bound.left && e.y >= bound.top && e.x <= bound.left + bound.width && e.y <= bound.top + bound.height) {
        e.preventDefault();
      }
    });
    document.removeEventListener("mousedown", (ev) => this.setMiddleClick(true, ev, "doc"));
    document.removeEventListener("mouseup", (ev) => this.setMiddleClick(false, ev, "doc"));
  }

  private getDataHash(nodes: IntensDiagramNodeData[], connections: any[]) {
    let hash = nodes.reduce((s, c) => s + c.fullName, "")
    hash = connections.reduce((s, c) => s + c[0] + c[1], hash)
    return hash;
  }

  getNewValue(value: in_proto.Navigator) {
    this.intensClass = this.prefixCssClass(value.base.styleClass)
    this.enabled = value.base.enabled;
    //if (this.getDataHash(this.unwrapNodes(value.root[0].node), value.connect) === this.getDataHash(this.nodes, this.connections)) {
///      return;
    //}
    console.debug("getNewValueBase new Value D");
    this.ranGetNewValue = true;
    this.connectionsAttr = value.connectionAttrs;
    this.diagram_connection_ratio = value.diagramConnectionRatio;
    this.storeNodes(value);
    this.canvasIsActive(() => {
      this.drawObjects();
      if (this.allowChangeOfCanvasSize) this.resizeCanvas();
    });
    this.fullName = value.fullName!;
  }

  get middleClick() {
    return (this.leftButtonDown && this.rightButtonDown) || this.middleButtonDown;
  }

  initCanvas() {
    const canvas = new fabric.Canvas(`c-${this.data.base.id}`, {
      fireMiddleClick: true,
      fireRightClick: true,
      perPixelTargetFind: true,
      backgroundColor: "white",
      height: 2 * this.canvas_height,
      width: 2 * this.canvas_width,
      selection: this.enabled
    });

    this.initInteract();
    // the user is drawing the line
    canvas.on("mouse:down", async (ev) => {
      this.setMiddleClick(true, ev, "fabric");
      console.debug("mouse:down", ev.button, ev.pointer?.x, ev.pointer?.y, ev);
      this.$store.commit("setLastCompId", this.data.base.id);

      // moving in canvas with alt
      if (ev.e.altKey === true) {
        this.canvasBuffer.isDragging = true;
        this.canvasBuffer.selection = false;
        this.canvasBuffer.lastPosX = ev.e.clientX;
        this.canvasBuffer.lastPosY = ev.e.clientY;
      }
      const images = f.cursorInsideImage(ev);
      console.debug("mouse:down Line", this.middleClick, images.length);
      // the user started drawing a line - when middle click or left and right simultaneous
      if (this.enabled && this.middleClick && images.length != 0) {
        this.selectedLine = new fabric.Line(
          [
            ev.target.left + ev.target.width / 2,
            ev.target.top + ev.target.height / 2,
            ev.absolutePointer.x,
            ev.absolutePointer.y,
          ],
          {
            stroke: c.LINE_CREATED_COLOR,
            strokeWidth: 3,
            selectable: false,
          }
        );
        this.selectedLine.bringForward(true);
        canvas.add(this.selectedLine);
        canvas.renderAll();
        this.ongoingConnection = {
          start: ev.target as fabric.Image,
          line: this.selectedLine,
          end: null,
        };
      }
      // popupmenu right click options
      else if (this.rightButtonDown && !this.leftButtonDown) {
        // popup menu options inside node
        if (f.cursorInsideImage(ev).length != 0) {
          const obj = f.cursorInsideImage(ev)[0];
          const index = this.nodes.findIndex((node) => node.nodeName === JSON.parse(obj.name).nodeName);
          if (index != -1) {
            const node = this.nodes[index];
            this.openCtxMenu(t.CtxMenu.Name, ev.e, node.popupMenu, node.fullName);
          }
        }
        // popup menu options for multiple selected nodes
        else if (canvas.getActiveObjects().length > 1) {
          const completed_option = this.getElementData(this.response.popupMenu.elements[0]);
          const completed_popup_menu = this.response.popupMenu;
          const delete_selected_option = {
            action: this.response.action,
            id: completed_option.base.id,
            label: c.DELETE_MULTIPLE_ELEMENTS_TEXT,
            reason: c.DELETE_MULTIPLE_ELEMENTS_REASON,
            type: this.response.popupMenu.elements[0].type,
          }
          const objectsFullname: string[] = canvas
            .getActiveObjects()
            .map((image) => (JSON.parse(image.name) as t.NodeDataInJSON).fullName);
          const popupmenu = {
            clearDefaultMenu: completed_popup_menu.clearDefaultMenu,
            elements: [delete_selected_option],
            tearOff: completed_popup_menu.tearOff,
            title: completed_popup_menu.title,
          };
          this.openCtxMenu(t.CtxMenu.Source, ev.e, popupmenu, objectsFullname);
        }
        // global popuup menu options
        else {
          this.openCtxMenu(
            t.CtxMenu.Name,
            ev.e,
            this.response.popupMenu,
            this.response.fullName,
            ev.pointer.x,
            ev.pointer.y
          );
        }
      }
    });
    canvas.on("mouse:move", (ev) => {
      if (this.canvasBuffer.isDragging) {
        canvas.viewportTransform[4] += ev.e.clientX - this.canvasBuffer.lastPosX;
        canvas.viewportTransform[5] += ev.e.clientY - this.canvasBuffer.lastPosY;
        canvas.requestRenderAll();
        this.canvasBuffer.lastPosX = ev.e.clientX;
        this.canvasBuffer.lastPosY = ev.e.clientY;
      }
      if (this.selectedLine !== null) {
        const image = f.cursorInsideImage(ev)[0];
        if (image) {
          image.lockMovementX = this.middleClick;
          image.lockMovementY = this.middleClick;
        }

        this.selectedLine.set({
          x2: ev.absolutePointer.x,
          y2: ev.absolutePointer.y,
        });
        canvas.renderAll();
      } else {
        canvas.remove(this.selectedLine);
      }
      const image = f.cursorInsideImage(ev)[0];
      if (image != null) {
        const text = (JSON.parse(image.name) as t.NodeDataInJSON).tooltip;
        this.enableTooltip(image.left, image.top + image.height, text);
      } else {
        this.disableTooltip();
      }
      if (!this.leftButtonDown && !this.middleButtonDown && !this.rightButtonDown) {
        return
      }
      // Don't redraw if a line is selected
      if (this.canvas.getObjects().reduce((p, c) => p || (c.isType("group") && !c.hasBorders), false)) {
        return
      }
      // remove the paths from the canvas and re-add them
      this.canvas.getObjects().forEach((object) => {
        if (object.isType("group") && object.hasBorders) {
          this.canvas.remove(object)
        }
      });
      f.drawConnections(this.canvas, this.connections, this.connectionsAttr);
    });
    canvas.on("mouse:up", async (ev) => {
      this.setMiddleClick(false, ev, "fabric");

      this.$store.commit("setLastCompId", this.data.base.id);
      // for moving inside canvas when alt key pressed
      canvas.setViewportTransform(canvas.viewportTransform);
      const images = f.cursorInsideImage(ev);
      this.canvasBuffer.isDragging = false;
      this.canvasBuffer.selection = true;
      // the user finished drawing the line
      if (images.length != 0 && this.ongoingConnection != null) {
        this.ongoingConnection.end = (ev as any).currentTarget;
        try {
          const startData = JSON.parse(this.ongoingConnection.start.name);
          const endData = JSON.parse(this.ongoingConnection.end.name);
          this.lockCanvas()
          await this.execute({
            action: startData.action,
            source: startData.fullName,
            source2: endData.fullName,
            reason: "new_connection",
            name: this.fullName,
          });
        } catch (e) {
          console.error(e);
          console.error("failed to connect nodes");
        } finally {
          this.unlockCanvas()
        }
      } // select a node when a user click on it
      canvas.remove(this.selectedLine);
      this.selectedLine = null;
      this.ongoingConnection = null;
    });
    canvas.on("mouse:wheel", (ev) => {
      this.$store.commit("setLastCompId", this.data.base.id);
      // zooming in and out of canvas
      if (this.data.scrollable && ev.e.ctrlKey || !this.data.scrollable) {
        this.canvasZoom(ev.e.deltaY, ev.e.offsetX, ev.e.offsetY);
        ev.e.preventDefault();
        ev.e.stopPropagation();
      }
    });
    canvas.on("mouse:dblclick", async (ev) => {
      this.$store.commit("setLastCompId", this.data.base.id);
      const images = f.cursorInsideImage(ev);
      if (images.length != 0) {
        const data: t.NodeDataInJSON = JSON.parse(images[0].name);
        this.lockCanvas()
        await this.execute({
          action: data.action,
          name: data.fullName,
          reason: "activate",
        });
        this.unlockCanvas()
      }
    });
    canvas.on("selection:created", (e) => {
      try {
        console.debug("e.target", e.target, e);
        for (let target of (e as any).selected as fabric.Object[]) {
          target.hasControls = false
          target.hasBorders = false
          target.dirty = true
        }
        this.canvas.renderAll();
      } catch (e) {
        console.error("selection:creating failed", e);
      }
    });
    canvas.on("object:modified", async (e) => {
      // handle object movement -> sync diagram state with intens
      if (e.target.type === "activeSelection") {
        // delta init
        let delta_left = -e.target.width;
        let delta_top = -e.target.height;
        const images = (e.target as fabric.ActiveSelection).getObjects().filter((e) => e.type === "image");
        const nodes: IntensDiagramNodeData[] = [];
        images.forEach((image) => {
          nodes.push(JSON.parse(image.name));
          // guess delta
          if (image.left > delta_left) {
            delta_left = image.left;
            delta_top = image.top;
          }
          if (image.top > delta_top) {
            delta_top = image.top;
            delta_left = image.left;
          }
        });
        // only neg delta
        if (delta_left > 0) delta_left = 0;
        if (delta_top > 0) delta_top = 0;

        console.info(
          "PosTarget: " + e.target.left + "**" + e.target.top + ", moveDiff: " + delta_left + ":" + delta_top
        );
        this.nodesThatNeedSelection = nodes.map((node) => node.fullName);
        this.lockCanvas()
        await this.execute({
          action: nodes[0].action,
          source: nodes.map((node) => node.fullName),
          reason: "move",
          x_pos: f.intensFormat(e.target?.left - e.transform?.original.left),
          y_pos: f.intensFormat(e.target?.top - e.transform?.original.top),
          name: this.fullName,
        });
        this.unlockCanvas()
      } else if (e.target.type === "image") {
        const node = JSON.parse(e.target.name);
        this.lockCanvas()
        await this.execute({
          action: node.action,
          source: [node.fullName],
          reason: "move",
          x_pos: f.intensFormat(e.target?.left - e.transform?.original.left),
          y_pos: f.intensFormat(e.target?.top - e.transform?.original.top),
        });
        this.unlockCanvas()
        canvas.renderAll();
        f.drawConnections(this.canvas, this.connections, this.connectionsAttr);
      }
    });
    this.canvas = canvas;
    setTimeout(() => {
      // run getNewValue when its was not run by itself
      if (this.ranGetNewValue === false) {
        this.getNewValue(this.data);
      }
    }, 500);
  }

  initInteract() {
    interact("#bidirectional-resize-" + this.data.base.id)
      .resizable({
        listeners: {
          move: (event: Interact.ResizeEvent) => {
            this.resizeCanvas(this.container_width + event.delta.x, this.container_height + event.delta.y);
          },
        },
      })
      .styleCursor(false);
    interact("#right-resize-" + this.data.base.id)
      .resizable({
        listeners: {
          move: (event: Interact.ResizeEvent) => {
            this.resizeCanvas(this.container_width + event.delta.x, this.container_height);
          },
        },
      })
      .styleCursor(false);
    interact("#bottom-resize-" + this.data.base.id)
      .resizable({
        listeners: {
          move: (event: Interact.ResizeEvent) => {
            this.resizeCanvas(this.container_width, this.container_height + event.delta.y);
          },
        },
      })
      .styleCursor(false);
  }

  keyDownEvent(ev: KeyboardEvent) {
    if (!this.enabled || !this.isComponentInFocus(ev) || ev.key !== c.DELETE_NODE_KEYCODE) return; // Return if not in focus or not delete key

    const target = this.canvas.getActiveObject() as fabric.Object | fabric.Group | fabric.ActiveSelection;
    // Return if the target doesn't exist or doesn't have a type
    if (!target || !target.type) return;

    // delete node
    switch (target.type) {
      case "image":
        f.deleteNode(target as fabric.Image, this.execute, [this.lockCanvas, this.unlockCanvas]);
      break;
      case "group":
        const data: t.LineDataInJSON = JSON.parse(target.name);
        const start: t.NodeDataInJSON = JSON.parse(data.start as string);
        const end: t.NodeDataInJSON = JSON.parse(data.end as string);
        const connection = this.connections.find((conn) => conn[0] === start.node_name && conn[1] === end.node_name);

        if (connection) {
          f.deleteConn(this.canvas, connection, this.execute, [this.lockCanvas, this.unlockCanvas]);
        }
      break;
      case "activeSelection":
        let objects =
          (target as fabric.ActiveSelection).getObjects().filter(e => e.type === "image") as fabric.Image[];
        f.deleteNodes(objects, this.execute, [this.lockCanvas, this.unlockCanvas]);
      break;
    }
  }

  private unwrapNodes = (nodes: in_proto.INavigatorNode[]): in_proto.INavigatorNode[] => {
    let final_nodes: in_proto.INavigatorNode[] = [];
    for (const node of nodes) {
      if (!node.folder) {
        final_nodes.push(node);
      } else {
        final_nodes.push(...this.unwrapNodes(node.nodes));
      }
    }
    return final_nodes;
  };


  storeNodes(value: in_proto.Navigator) {
    try {
      // get every non-folder node in the root
      this.nodes = this.unwrapNodes(value.root.nodes);
      this.connections = value.connections;
      this.connectionsAttr = value.connectionAttrs;
      this.response = value;
    } catch (e) {
      console.error("failed to store data of nodes and connections");
      console.error(e);
    }
  }

  async drawObjects() {
    if (this.canvas == null) return;

    this.canvas.getObjects().forEach((object) => {
      this.canvas.remove(object);
    });
    this.canvas.setBackgroundColor("white", () => {});
    // draw the nodes on the cnavas
    f.drawNodes(this.canvas, this.nodes, this.enabled);
    // wait 10 ms to render all the nodes
    await f.sleep(10);
    // draw the connections
    f.drawConnections(this.canvas, this.connections, this.connectionsAttr);
    // bring all images to front of the stack and set selection
    let selectionImgs = [];
    for (const obj of this.canvas.getObjects()) {
      if (obj.type === "image") {
        obj.bringToFront();
        // selection part
        const node = JSON.parse(obj.name) as t.NodeDataInJSON;
        const needsSelection =
          this.nodesThatNeedSelection.find((fullName) => node.fullName === fullName) !== undefined;
        if (needsSelection) {
          selectionImgs.push(obj);
        }
      }
    }
    console.debug("drawObjects imgs", this.nodesThatNeedSelection, selectionImgs);
    if (this.response.selectItems.length === 1 && this.nodesThatNeedSelection.length === 1) {
      for (const id of this.response.selectItems) {
        const object = f.matchNodeName(this.canvas.getObjects(), id);
        if (object !== null) {
          this.canvas.setActiveObject(object);
        }
      }
    } else if (this.nodesThatNeedSelection.length > 0) {
      this.canvas.discardActiveObject();
      let selection = new fabric.ActiveSelection(selectionImgs, {
        canvas: this.canvas,
      });
      this.canvas.setActiveObject(selection);
      this.canvas.renderAll();
      console.debug("gret suc");
    }
  }

  async handleDrop(event: DragEvent) {
    if (this.enabled && event.dataTransfer != null) {
      const data = JSON.parse(event.dataTransfer.getData("text/plain"));
      const canvasBounds = document.getElementById(`c-${this.data.base.id}`)?.getBoundingClientRect();
      try {
        this.lockCanvas()
        await this.execute({
          action: data.action || this.data.action || "",
          reason: "drop",
          source: data.fullName,
          x_pos: f.intensFormat(event.x - canvasBounds.x),
          y_pos: f.intensFormat(event.y - canvasBounds.y),
        });
      } catch (e) {
        console.error(e);
      } finally {
        this.unlockCanvas()
      }
    }
  }

  canvasZoom(delta: number, offsetX: number, offsetY: number) {
    let zoom = this.canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 2.5) zoom = 2.5;
    if (zoom < 0.1) zoom = 0.1;
    this.canvas.zoomToPoint({ x: offsetX, y: offsetY }, zoom);
    this.resizeCanvas(this.container_width, this.container_height);
  }

  unlockCanvas() {
    (this.$refs["canvas"] as any).nextSibling.style.display = ""
  }

  lockCanvas() {
    (this.$refs["canvas"] as any).nextSibling.style.display = "none"
  }

  openCtxMenu(
    type: t.CtxMenu,
    e: MouseEvent,
    value: in_proto.IPopupMenu,
    name: string,
    xPointer?: number,
    yPointer?: number
  ): void;
  openCtxMenu(
    type: t.CtxMenu,
    e: MouseEvent,
    value: in_proto.IPopupMenu,
    source: string | string[],
    xPointer?: number,
    yPointer?: number
  ): void;
  openCtxMenu(
    type: t.CtxMenu,
    e: MouseEvent,
    value: in_proto.IPopupMenu,
    nameOrSource: string | string[],
    xPointer?: number,
    yPointer?: number
  ): void {
    const ctxmenu: typeof IntensContextMenu = this.$ctxMenu.comp;
    let menu: CtxOption[] = [];
    if (value?.elements && type == t.CtxMenu.Name) {
      for (const _button of value.elements) {
        const button = _button.action ? _button : this.getElementData(_button) || {}
        console.log(button)
        menu.push({
          label: button.label,
          type: _button.type,
          callback: async () => {
            this.lockCanvas()
            await this.execute({
              action: button.action,
              reason: "function",
              name: nameOrSource as string,
              x_pos: f.intensFormat(xPointer),
              y_pos: f.intensFormat(yPointer),
            });
            this.unlockCanvas()
            ctxmenu.close();
          },
        });
      }
    } else if (value?.elements) {
      for (const _button of value.elements) {
        const button = _button.action ? _button : this.getElementData(_button)
        menu.push({
          label: button.label,
          type: _button.type,
          callback: async () => {
            this.lockCanvas()
            await this.execute({
              action: button.action,
              source: nameOrSource,
              reason: button.reason,
              x_pos: f.intensFormat(xPointer),
              y_pos: f.intensFormat(yPointer),
              name: this.fullName,
            });
            this.unlockCanvas()
            ctxmenu.close();
          },
        });
      }
    }
    menu.length || menu.push(
      {
        label: "Redraw",
        callback: () => {
          this.canvas.setZoom(1);
          this.canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
          this.resizeCanvas(this.container_width, this.container_height);
          ctxmenu.close();
        },
      },
      {
        label: "To Default Size",
        callback: () => {
          this.resizeCanvas();
          ctxmenu.close();
        },
      },
      {
        label: this.isResizeButtons ? "Disable Resize Buttons" : "Disable Resize Buttons ✓",
        callback: () => {
          this.isResizeButtons = !this.isResizeButtons;
          ctxmenu.close();
        },
      },
      {
        label: "Zoom in",
        callback: () => {
          this.canvasZoom(-500, e.offsetX, e.offsetY);
          ctxmenu.close();
        },
      },
      {
        label: "Zoom out",
        callback: () => {
          this.canvasZoom(500, e.offsetX, e.offsetY);
          ctxmenu.close();
        },
      },
    );

    ctxmenu.open(e, menu);
  }

  enableTooltip(x: number, y: number, text: string) {
    if (!this.tooltipState.active) {
      this.tooltipState.active = true;
      // @ts-ignore
      this.tooltipState.timeout_id = setTimeout(() => {
        this.tooltipState.object = new fabric.Text(text, {
          width: 20,
          height: 50,
          fill: "black",
          left: x,
          top: y,
          fontSize: c.TOOLTIP_FONT_SIZE,
          fontFamily: "arial",
          backgroundColor: "#ffffdc",
        });
        this.canvas?.add(this.tooltipState.object);
        this.canvas?.renderAll();
      }, c.TOOLTIP_POPUP_TIME_MS);
    }
  }

  disableTooltip() {
    this.tooltipState.active = false;
    if (this.tooltipState.object) {
      this.canvas?.remove(this.tooltipState.object);
      this.canvas?.renderAll();
    }
    if (this.tooltipState.timeout_id) {
      clearTimeout(this.tooltipState.timeout_id);
    }
  }

  resizeCanvas(width?: number, height?: number) {
    if (this.canvas != null) {
      let zoom = this.canvas.getZoom();
      console.debug("ZOOM", zoom);
      if (zoom < 1) zoom = 1;
      if (width != null && height != null) {
        this.allowChangeOfCanvasSize = false;
        this.container_width = width;
        this.container_height = height;
        this.canvas_width = 2 * width * zoom;
        this.canvas_height = 2 * height * zoom;
      } else {
        if (!this.data.expandable) {
          this.container_width = this.data.width;
          this.container_height = this.data.height;
          this.canvas_width = 2 * this.data.width * zoom;
          this.canvas_height = 2 * this.data.height * zoom;
        }
      }
      this.canvas.setDimensions({
        width: this.canvas_width,
        height: this.canvas_height,
      });
    }
  }

  /** the callback is run with the assurance that the canvas is available */
  canvasIsActive(callback: () => void) {
    let intervalId: any = null;

    const canvasActive = new Promise((resolve) => {
      intervalId = setInterval(() => {
        if (this.canvas != null) {
          resolve(true);
        }
      }, 10);
    });
    canvasActive.then(() => {
      callback();
      if (intervalId) clearInterval(intervalId);
      else console.error("could not stop interval");
    });
  }
}

export default IntensDiagram;
</script>

<style lang="scss">
.intens-diagram {
  margin: 2px;
  display: grid;
  > div {
    overflow: scroll;
  }
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      width: 24px;
    }
  }
  canvas {
    border: 1px solid black;
    border-radius: 5px;
  }
  .tooltip {
    background-color: #ffffdc;
    border: 1px black solid;
    padding: 2px;
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
