<template>
  <div v-if="lastData.base.visible" :class="`list-container ${intensClass} ${isResizeButtons ? 'has-resize' : ''}`">
    <b v-if="lastData.title" v-html="title"></b>
    <div
      class="intens-list"
      :style="`height: ${getHeight}; width: ${getWidth}px;`"
      :id="data.base.Name"
      @contextmenu="openCtxMenu($event, 'normal')">
      <div class="list-header" ref="header">
        <div class="list-row" :style="`grid-template-columns: ${template}`">
          <template v-for="(col, i) in columns">
            <div class="cell"
              v-if="col.visible"
              :id="`${data.base.id}-${i}-${col.label}`"
              :key="`${data.base.id}-${i}-${col.label}`"
              @click="sort(String(i))"
              @mouseover="gotResized = false">
              {{ col.label }}
              <img
                alt=""
                v-if="sortData !== null && sortData.column === String(i)"
                :src="arrow_down"
                :style="{
                  transform: sortData.direction === 1 ? 'rotate(0)' : 'rotate(180deg)',
                }"/>
            </div>
          </template>
        </div>
      </div>
      <div class="list-data" @scroll="syncScrollbars" :style="`height: ${getHeightBody}`">
        <div class="list-row" v-for="(row, i) in listData" :key="i"
          @click="
            clicked().then((type) => {
              selectItem($event.ctrlKey, $event.shiftKey, type, row._index);
            })
          "
          @contextmenu="setSelectedRows([row._index])"
          :style="{ gridTemplateColumns: template, background: bgColor[i] }"
          :class="{ selected: !!row['_selected'] }">
          <template v-for="(cell, col) in row">
            <div class="cell" :key="col" v-if="!col.startsWith('_') && columns[col].visible"
              :style="{
                background: columns[col].bgColors[i],
                color: columns[col].fgColors[i]
              }">
              {{ cell }}
            </div>
          </template>
        </div>
      </div>
    </div>
    <modal :name="data.base.id + '-ListConfig'" :draggable="true" :resizable="true" width="350px" height="auto">
      <div class="intens-modal">
        <div class="modal-title">Column Configuration</div>
        <div class="modal-body">
          <div class="column-table">
            <div class="column-config" v-for="(col, i) in columns" :key="i">
              <span>{{ col.label }}</span
              ><input type="checkbox" :checked="col.visible" @click="changeVisibleRows(col.label)" />
            </div>
          </div>
          <div class="modal-buttonbar" :style="`grid-template-columns: repeat(1, 1fr)`">
            <i-button class="intens-button" @click="$modal.hide(data.base.id + '-ListConfig')"><span>Close</span></i-button>
          </div>
        </div>
      </div>
    </modal>
    <img
      alt="extras-menu"
      class="plus-button"
      :style="{ left: 24 + 'px' }"
      :src="img_corner"
      @contextmenu="openCtxMenu($event, 'corner')" />
    <template v-if="isResizeButtons">
      <button class="right-resize" :id="'right-resize-' + data.base.id">
        <img alt="resizer" :src="getBaseUrl() + '/res/' + 'vertical-resize.png'" style="height: 12px;"/>
      </button>
      <button class="bottom-resize" :id="'bottom-resize-' + data.base.id">
        <img alt="resizer" :src="getBaseUrl() + '/res/' + 'horizontal-resize.png'" style="height: 12px;"/>
      </button>
    </template>
  </div>
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { CtxOption } from "../../dataTypes";
import IntensContextMenu from "./IntensContextmenu.vue";
import interact from "interactjs";
import sanitizeHtml from "sanitize-html";
import { in_proto } from "../../proto";

interface IntensList {
  data: in_proto.List;
}

interface ListColumn {
  label: string;
  width: number;
  visible: boolean;
  datatype: in_proto.ValueInfo.DataType;
}

@Component
class IntensList extends mixins(base) {
  lastData: in_proto.List = this.data;
  columns: ListColumn[] = [];
  selectedRows: number[] = this.data.selected;
  // if parent is container take container height
  height = 0;
  width = 0;
  widthDragged = false;
  sumWidth = 0;
  title = "";
  bgColor: String[] = []
  listData: { [key: string]: number }[] = [];
  sortData: { column: string; direction: 1 | -1 } | null = null;
  template: string = "";
  observer: ResizeObserver | null = null;
  click: any = null;
  arrow_down = this.getBaseUrl() + "/res/branch_open.png";
  img_corner = this.getBaseUrl() + "/res/table_corner.png";
  rowCount = 0;
  isResizeButtons = true;
  gotResized = false;

  created() {
    this.getNewValue(this.data)
    this.$ids.addComponent(this);
    document.addEventListener("keydown", this.keyEvent);
    this.initInteract();
  }

  mutationCallback() {
    this.gotResized = true;
    let widths: number[] = [];
    const elements = [];
    for(const [i, col] of this.columns.entries()) {
      elements.push(document.getElementById(`${this.data.base.id}-${i}-${col.label}`)!);
    }
    for(const element of elements) {
      if (element == null) { continue; }
      const width = element.offsetWidth
      if(width === 9 || width === 0) return;
      widths.push(element.offsetWidth);
    }
    // Make columns wider too when resized
    // if (this.widthDragged) {
    //   const sum = widths.reduce((a, b) => a + b, 0)
    //   const ratio = (this.getWidth - 4) / sum
    //   this.widthDragged = false;
    //   widths = widths.map((w, i) => w * ratio)
    // }
    let template = "";
    for (const width of widths) {
      template += `${width}px `;
    }
    this.template = template;
  }

  syncScrollbars(e: Event) {
    (this.$refs["header"] as HTMLDivElement).scrollLeft = (e.target as HTMLDivElement).scrollLeft;
  }

  mounted() {
    this.observer = new ResizeObserver(this.mutationCallback)
    for(const [i, col] of this.columns.entries()) {
      const element = document.getElementById(`${this.data.base.id}-${i}-${col.label}`)!
      if (element != null) {
       this.observer.observe(element)
      }
    }
  }

  destroyed() {
    document.removeEventListener("keydown", this.keyEvent);
    this.observer.disconnect();
  }

  async keyEvent(event: KeyboardEvent) {
    if (this.isComponentInFocus(event) && event.key === "Enter") {
      if (this.data.action) {
        await this.execute({
          action: this.data.action,
          index: this.selectedRows[0] || 0,
          reason: "activate",
          guielement: this.data.base.Name,
          select_index: this.selectedRows,
        });
      }
    }
  }

  initInteract() {
    interact("#bottom-resize-" + this.data.base.id)
      .resizable({
        listeners: {
          move: (event: Interact.ResizeEvent) => {
            this.height += event.delta.y;
          },
        },
      })
      .styleCursor(false);
    interact("#right-resize-" + this.data.base.id)
      .resizable({
        listeners: {
          move: (event: Interact.ResizeEvent) => {
            this.width += event.delta.x;
            this.widthDragged = true;
            this.mutationCallback()
          },
        },
      })
      .styleCursor(false);
  }

  get getHeight() {
    const fontsize = 13;
    if (this.rowCount !== 0)
      return `${(this.rowCount + 1 + this.height/fontsize/2) * 2}em`
    else
      return "21em"
  }

  get getWidth() {
    return this.data.base.width + 1 + this.width
  }

  get getHeightBody() {
    const fontsize = 13;
    if (this.rowCount !== 0)
      return `${this.rowCount * 2 + this.height/fontsize}em`
    else
      return "calc(100% - 30px)"
  }

  getNewValue(data: in_proto.List) {
    this.intensClass = this.prefixCssClass(data.base.styleClass)
    console.debug("IntensList", data);
    this.lastData = data;
    this.createColumns(data);
    this.selectedRows = data.selected;
    this.setSelectedRows(this.selectedRows);
    this.title = sanitizeHtml(data.title);
  }

  createColumns(data: in_proto.List) {
    this.columns = data.entries.map((e) => {
      return {
        label: e.label,
        width: e.width,
        visible: !e.optional,
        datatype: e.value.datatype,
        bgColors: e.bgColors,
        fgColors: e.fgColors,
      };
    });
    this.updateData(data);
  }

  updateData(data: in_proto.List) {
    this.listData = [];
    this.bgColor = data.bgcolor;
    this.sumWidth = 0;
    for (let i in this.columns) {
      if (this.columns[i].visible) this.sumWidth += this.columns[i].width;
      // Get the values of every columns
      const vals = data.entries[i].values;
      for (let v in vals) {
        if (!this.listData[v]) this.listData[Number(v)] = {};
        if (data.entries[i].value.datatype === in_proto.ValueInfo.DataType.StringDateTime) {
          let ts = Date.parse(data.entries[i].values[v]);
          this.$set(this.listData[v], i, new Date(ts).toLocaleString());
          // Save the original timestamp value for sorting
          this.$set(this.listData[v], `_${i}_orig`, ts);
          continue;
        }

        // Insert every value in the column
        this.$set(this.listData[v], i, vals[v]);
      }
    }

    // This is a big hack
    for (let v in data.entries[0].values) {
      this.$set(this.listData[v], "_index", parseInt(v));
      this.$set(this.listData[v], "_selected", false);
    }

    this.rowCount = data.rowCount

    let percWidth: number = 100 / this.sumWidth;
    let template: string = "";
    for (let i in this.columns) {
      if (this.columns[i].visible) {
        template += this.columns[i].width * percWidth + "% ";
      }
    }
    this.template = template;
    this.$forceUpdate()
  }

  changeVisibleRows(label: string) {
    for (let i in this.columns) {
      if (this.columns[i].label === label) {
        this.columns[i].visible = !this.columns[i].visible;
      }
    }
    this.updateData(this.lastData);
  }

  sort(col: string) {
    if (this.gotResized) {
      this.gotResized = false;
      return;
    }
    if (this.sortData === null || this.sortData?.column !== col) {
      this.sortData = {
        direction: 1,
        column: col,
      };
    } else if (this.sortData.column === col) {
      this.sortData.direction = this.sortData.direction === 1 ? -1 : 1;
    }
    this.setSelectedRows([])
    const dateTimeSort = this.columns[col]?.datatype === in_proto.ValueInfo.DataType.StringDateTime
    const numberSort = this.columns[col]?.datatype === in_proto.ValueInfo.DataType.Double || col === "_index";
    // If we got a timestamp, we wanna sort by the original value instead of the locale-dependent timestamp
    const colOriginal = dateTimeSort ? `_${col}_orig` : col
    if (numberSort || dateTimeSort) {
      this.listData.sort((a, b) => this.sortData.direction === 1 ? a[colOriginal] - b[colOriginal] : b[colOriginal] - a[colOriginal])
    } else {
      this.listData.sort((a, b) => {
        if (this.sortData.direction === 1) {
          return String(a[col]).localeCompare(String(b[col]));
        }
        return String(b[col]).localeCompare(String(a[col]));
      });
    }
  }

  setSelectedRows(selectedRows: number[]) {
    this.selectedRows = selectedRows;
    for (let i in this.listData) {
      this.$set(this.listData, i, {
        ...this.listData[i],
        _selected: selectedRows.includes(this.listData[i]._index),
      });
    }
  }

  async selectItem(ctrlKey: boolean, shiftKey: boolean, type: string, index: number) {
    this.$store.commit("setLastCompId", this.data.base.id);
    let reason = type === "dblclick" ? "activate" : "select";
    let idxs: number[] = [];

    if (ctrlKey) {
      const rowIndex = this.selectedRows.indexOf(index);
      if (rowIndex >= 0) {
        // Remove row if already there
        this.selectedRows.splice(rowIndex, 1);
        idxs = this.selectedRows;
      } else {
        idxs = [...this.selectedRows, index]
      }
    }

    if (shiftKey) {
      // Get indexes of the selected items
      let firstIndex = this.listData.findIndex(e => this.selectedRows.includes(e._index));
      let lastIndex = this.listData.findLastIndex(e => this.selectedRows.includes(e._index))
      let clickIndex = this.listData.findIndex(e => e._index === index); // Where in the list you clicked

      // Expand selection outside to include clicked rown
      firstIndex = Math.min(firstIndex, clickIndex);
      lastIndex = Math.max(lastIndex, clickIndex);

      // If we clicked between, shrink selection from the end
      if (clickIndex > firstIndex && clickIndex < lastIndex) {
        lastIndex = clickIndex;
      }

      idxs = this.listData.slice(firstIndex, lastIndex + 1).map(e => e._index)
    }

    if (!ctrlKey && !shiftKey || this.selectedRows.length === 0 || !this.data.multiSelection) {
      idxs = [index]
    }
    this.setSelectedRows(idxs);

    if (this.data.action && this.data.action === "GUIELEMENT_METHOD") {
      this.getTracer().startActiveSpan("list click", async span => {
        span.setAttribute("click type", type);
        await this.custom("control", {
          command: this.data.action,
          guielement: this.data.base.id,
          method: "Clicked",
          argument: JSON.stringify({ id: [index] }),
        });
        span.end();
      })
    } else if (this.data.action) {
      this.getTracer().startActiveSpan("list click", async span => {
        span.setAttribute("click type", type);
        await this.execute({
          action: this.data.action,
          index,
          reason,
          guielement: this.data.base.Name,
          select_index: idxs,
        });
        span.end();
      })
    }
  }
  openCtxMenu(e: MouseEvent, use: "normal" | "corner") {
    e.preventDefault();
    const ctxmenu: IntensContextMenu = this.$ctxMenu.comp;
    let menu: CtxOption[] = [];
    if (use === "normal" && this.data.popupBaseMenu) {
      for (let button of this.data.popupBaseMenu.elements) {
        const element = this.getElementData(button)
        menu.push({
          label: element.label,
          type: button.type,
          callback: () => {
            if (this.selectedRows.length) {
              this.execute({
                action: element.action,
                name: this.data.fullName,
                guielement: this.data.base.Name,
                select_index: this.selectedRows,
                reason: "function",
              });
            }
            ctxmenu.close();
          },
        });
      }
    } else if (use === "corner") {
      menu.push(
        {
          label: "Copy All",
          callback: () => {
            const listData = this.listData.map((row) => Object.keys(row).filter((row) => !row.includes("_")));
            const data = listData
              .map((row, index) => row.map((column) => this.listData[index][column]).join("\t"))
              .join("\n");
            navigator.clipboard.writeText(data);
            ctxmenu.close();
          },
        },
        {
          label: "Copy",
          callback: () => {
            const selectedRows = this.selectedRows.map((selectedRow) => this.listData[selectedRow]);
            const listData: any[] = [];
            for (const row of selectedRows) {
              // Get only entries with no _ in their key, as _ is for internal use entries
              const entries = Object.entries(row).filter(e => !e[0].includes("_"));
              // Get only values and no keys
              listData.push(entries.map(e => e[1]));
            }
            const data = listData.map((row) => row.join("\t")).join("\n");
            navigator.clipboard.writeText(data);
            ctxmenu.close();
          },
        },
        {
          label: "Reset Sorting",
          callback: () => {
            this.sortData = null;
            this.sort("_index");
            ctxmenu.close();
          }
        }
      );
    }

    ctxmenu.open(e, menu);
  }

  // Helper function to determine dblclick event
  // @click + @dblclick would fire 3 events each time doubleclicked
  clicked() {
    return new Promise<string>((resolve) => {
      if (this.click) {
        clearTimeout(this.click);
        resolve("dblclick");
      }
      this.click = setTimeout(() => {
        this.click = undefined;
        resolve("click");
      }, 300);
    });
  }
}

export default IntensList;
</script>

<style lang="scss">
$border-color: #e9e9e9;

.list-container {
  width: min-content;
  &.has-resize {
    margin-bottom: 2em;
  }
}

.intens-list {
  background: white;
  position: relative;
  max-width: 98vw;
  border: 1px solid var(--border-color-dark);

  .list-row {
    display: grid;
    height: 2em;
    grid-auto-rows: 2em;
    border-top: 1px solid $border-color;
    border-left: 1px solid $border-color;

    .cell {
      border-bottom: 1px solid $border-color;
      white-space: nowrap;
      text-overflow: ellipsis;
      border-right: 1px solid $border-color;
      font-family: monospace;
      padding: 0.2em 0.3em;
      overflow: hidden;
      font-size: 0.9em;
    }
  }

  .list-data {
    position: absolute;
    top: 2em;
    width: 100%;
    background: white;
    overflow-y: scroll;

    & .list-row:hover {
      background: #c5d7f9 !important;
    }
  }

  .list-header {
    text-align: center;
    overflow-y: scroll;
    font-weight: bold;

    & .list-row .cell:hover {
      background: var(--border-color);
    }
    .cell {
      background: var(--hover-color-dark);
      resize: horizontal;
    }
  }
}

.plus-button {
  display: inline;
  margin: 0px;
  float: right;
}

.intens-menu-button {
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  align-items: center;
}
.intens-list > .list-data > .list-row.selected {
  background: #a1c1fc !important;
}

.modal-body .column-config {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 8px;
}

.bottom-resize {
  cursor: ns-resize;
  display: inline;
  float: right;
}

.right-resize {
  cursor: ew-resize;
  display: inline;
  float: right;
}
</style>
