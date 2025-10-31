<template>
  <div :class="[{ selectionMode: selectionMode }, intensClass, `select-header-colors-${dataCache.numFrozenRows}`]" :id="data.base.Name" @contextmenu="openCtxMenu">
    <b v-if="data.title" v-html="title"></b>
    <ve-table class="intens-table" ref="tableEle" :columns="selectionMode ? originalColumns : columns" :table-data="selectionMode ? tableData : shownTableData" row-key-field-name="index"
      :clipboard-option="{ beforePaste: pasteInterrupt }"
      :cellSelectionOption="{ enable: selectionMode }" :column-width-resize-option="{ enable: true }"
      :rowStyleOption="{ hoverHighlight: false, clickHighlight: false }"
      :virtual-scroll-option="{ enable: true, minRowHeight: 25 }"
      :max-height="(data.numRowsVisible + headerHeight) * ROW_HEIGHT - workaroundPixel"
      :scrollWidth="dataCache.numColumnsVisible !== dataCache.numColumns && visibleWidth > 0 ? visibleWidth: undefined"
      :key="selectKey"
      :style="{width: dataCache.numColumnsVisible !== dataCache.numColumns ? `${visibleWidth}px`: undefined}" />
      <!-- Add 50 pixels to width to account for the first column not counted -->
    <div class="menu">
      <label>
        <input type="checkbox" v-model="selectionMode">
        Selection Mode
      </label>
      <component v-if="pageSize < dataCount">
        <i-button @click="goToPage(1)">|&lt;</i-button>
        <i-button @click="page(-1)">&lt;</i-button>
        <input class="pager-text" type="text" :value="currentPage" @blur="pageInputEvent" @keyup.enter="pageInputEvent">
        <span>/ {{ pageCount }}</span>
        <i-button @click="page(1)">&gt;</i-button>
        <i-button @click="goToPage(-1)">&gt;|</i-button>
      </component>
      <img alt="table-menu" class="plus-button" :src="img_corner" @contextmenu="openTableMenu" />
    </div>
  </div>
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { CtxOption } from "../../dataTypes";
import IntensTableCellComp from "./IntensTableCell.vue";
import sanitizeHtml from "sanitize-html";
import { in_proto } from "../../proto";
import { Watch } from "vue-property-decorator";

const CHARACTER_WIDTH = 8;

interface IntensTable {
  data: in_proto.Table;
}

@Component
class IntensTable extends mixins(base) {

  tableData: any[] = [];
  shownTableData: any[] = [];
  columns: any[] = [];
  originalColumns: any[] = [];
  // Has to be a 1D array because of vue reactivity
  focusMatrix: boolean[] = [];
  selectionMode = false;
  rowLength = 0;
  headerHeight = 0;
  selectKey = 0;
  workaroundPixel = 1;
  title: string = "";
  pageSize = 0;
  pageEndPos = 0;
  visibleWidth = 0;
  dataCache = {} as in_proto.Table;
  ROW_HEIGHT = 25;
  img_corner = this.getBaseUrl() + "/res/table_corner.png";

  created() {
    this.getNewValue(this.data);
    this.$ids.addComponent(this);
  }

  // TODO: Find proper fix for the virtual scroll starting higher before first scroll
  mounted() {
    setTimeout(() => this.workaroundPixel = 0, 1000)
  }

  getNewValue(data: in_proto.Table, paging = false) {
    this.intensClass = this.prefixCssClass(data.base.styleClass)
    this.dataCache = data;
    let matrix = data.matrix;

    this.pageSize = paging ? this.pageSize : Math.max(matrix.length, matrix[0]?.a?.length);
    // If we were on a different page before, we wanna stay there
    if (!paging && this.currentPage != 1) {
      this.goToPage(this.currentPage);
      return
    }

    if (!paging) this.pageEndPos = this.pageSize
    this.title = sanitizeHtml(data.title);
    const renderBodyCell = ({ row, column }, h) => {
      const getField = ({field, children}) => field || getField(children[0])
      const field = getField(column)
      const cell = row[field];
      if (!cell) return;
      if (!cell.cell?.element) {
        return h("span", {}, cell)
      }
      return this.$createElement(IntensTableCellComp, {
        props: {
          data: cell.cell,
          index: cell.index,
          form: this.form,
          selectionMode: this.selectionMode,
          isFocused: this.focusMatrix[cell.row * this.rowLength + cell.column]
        },
        on: {
          navigate: (e: "up" | "down" | "left" | "right") => {
            for (let i = 0; i < this.focusMatrix.length; i++) {
              this.$set(this.focusMatrix, i, false);
            }

            switch (e) {
              case "up":
                if (cell.row > 0) {
                  this.$set(this.focusMatrix, (cell.row - 1) * this.rowLength + cell.column, true);
                }
                break;

              case "down":
                if (cell.row < this.focusMatrix.length / this.rowLength - 1) {
                  this.$set(this.focusMatrix, (cell.row + 1) * this.rowLength + cell.column, true);
                }
                break;
              case "left":
                if (cell.column > 0) {
                  this.$set(this.focusMatrix, cell.row * this.rowLength + cell.column - 1, true);
                } else {
                  // Jump up one row if at the leftmost cell
                  this.$set(this.focusMatrix, (cell.row - 1) * this.rowLength + this.rowLength - 1, true);
                }
                break;
              case "right":
                if (cell.column < this.rowLength - 1) {
                  this.$set(this.focusMatrix, cell.row * this.rowLength + cell.column + 1, true);
                } else {
                  // Jump down one row if at the rightmost cell
                  this.$set(this.focusMatrix, (cell.row + 1) * this.rowLength, true);
                }
                break;

            }
          }
        }
      });
    }

    let currentColumn = 0;
    let previousWidth = 0

    // Create the columns with one empty title on the first
    this.columns = [{
      field: "index",
      key: "index",
      operationColumn: true,
      title: "",
      fixed: "left",
      align: "left"
    }, ...data.columnHeader.map((e, i) => {
      let width = data.columnLength[currentColumn++] * CHARACTER_WIDTH
      if (Number.isNaN(width)) {
        width = previousWidth
      }
      previousWidth = width;
      return {
        field: e+i,
        key: String(i),
        title: e.replace(/\\n/g, "\n"),
        width: width < 0 ? undefined : width,
        renderBodyCell
      }
    })];

    const numGeneratedColumns = data.numColumns- data.columnHeader.length;

    for (let i = 0; i < numGeneratedColumns; i++) {
      const width = data.columnLength[currentColumn++] * CHARACTER_WIDTH
      this.columns.push({
        field: i + 1,
        key: String(i),
        title: i + 1,
        width: width < 0 ? undefined : width,
        renderBodyCell
      });
    }

    this.visibleWidth = data.columnLength.slice(0, data.numColumnsVisible+ 1).reduce((a, b) => a + b, 0) * CHARACTER_WIDTH;
    this.$refs.tableEle && (this.$refs.tableEle.$el.style.width = this.visibleWidth + "px")
    if (this.visibleWidth < 0) {
      const setWidth = () => {
        const htmlColumns: HTMLTableCellElement[] = Array.from(this.$refs.tableEle?.$el?.querySelectorAll(".ve-table-header-tr:first-of-type .ve-table-header-th"))
        const calcColumns = htmlColumns.slice(0, data.numColumnsVisible+ 1)
        const width = calcColumns.reduce((a, b) => a + b.clientWidth, 0)
        if(width === 0) setImmediate(setWidth)
        this.$refs.tableEle && (this.$refs.tableEle.$el.style.width = width  + "px")
      }
      setImmediate(setWidth)
    }

    this.tableData = [];

    for (const i in data.rowHeader) {
      if (Number(i) + 1 > data.numRows) {
        continue;
      }
      const index = data.rowHeader[i];
      this.tableData.push({
        index
      });
    }

    if (matrix.length > 0 && this.pageSize  < matrix[0]?.a?.length) {
      this.pageSize = matrix[0]?.a?.length;
      this.pageEndPos = this.pageSize;
    }
    this.pageEndPos = this.pageEndPos || this.pageSize;


    this.rowLength = matrix[0]?.a?.length;
    if (!matrix[0]) return;
    for (const row in matrix) {
      for (const column in matrix[row].a) {
        this.focusMatrix[Number(row) * this.rowLength + Number(column)] = false;
        const cell = matrix[row].a[column];
        const columnName = this.columns[Number(column) + 1]?.field;
        if (!this.tableData[row]) {
          this.tableData[row] = {};
        };

        this.$set(this.tableData[row], columnName, { cell, index: Number(row) - data.numFrozenRows, row: Number(row), column: Number(column) });
      }
    }

    // Calculate the height of the header row based on the amount of newlines in the cells
    this.headerHeight = data.columnHeader.reduce((p, e) => {
      const currentHeight = (e.match(/\\n/g) || []).length;
      if (currentHeight > p) {
        return currentHeight + 1;
      }
      return p;
    }, 1)

    const addFrozenRowChildren = (header, column, depth) => {
      if (depth === data.numFrozenRows) return undefined
      const currentData = this.tableData[depth][column || "index"]
      const child = {
        title: currentData || "",
        key: header.key,
        field: header.field,
        width: header.width,
        fixed: header.fixed,
        operationColumn: header.operationColumn,
        align: header.align,
        renderBodyCell: header.field !== "index" ? renderBodyCell : undefined,
        renderHeaderCell: ({column}, h) => renderBodyCell({ ...column.title, row: this.tableData[depth], column: header }, h)
      }
      if (depth !== data.numFrozenRows - 1) delete child.field
      child.children = addFrozenRowChildren(header, column, depth + 1);

      return [child]
    }

    // save original columns definitions so we can show that for the select mode
    this.originalColumns = JSON.parse(JSON.stringify(this.columns)).map(c => ({...c, renderBodyCell}))
    if (data.numFrozenRows) {
      for (let i = 0; i < this.columns.length; i++) {
        const header = this.columns[i];
        const children = addFrozenRowChildren(header, header.key, 0);
        this.columns[i].children = children
        //this.columns[i].key = undefined
        //this.columns[i].field = undefined
        this.columns[i].width = undefined
      }
    }
    this.shownTableData = this.tableData.slice(data.numFrozenRows)

    if (!data.rowHeader.length) {
      this.columns.splice(0, 1);
    }

    this.$forceUpdate();
  }

  @Watch("selectionMode")
  selectionModeChanged() {
    const scroll = (this.$refs.tableEle as any).$el.children[0].children[0].scrollTop
    this.selectKey++;
    setImmediate(() => (this.$refs.tableEle as any).scrollTo({top: scroll, behaviour: "instant"}));
  }

  get dataCount() {
    return Math.max(this.dataCache.numColumns, this.dataCache.numRows)
  }

  get pageCount() {
    return Math.ceil(this.dataCount / this.pageSize)
  }

  get currentPage() {
    return Math.ceil(this.pageEndPos / this.pageSize) || 1
  }

  pageInputEvent(e: any) {
    const page = Number(e.target.value) || 1
    if (page === this.currentPage) return
    this.goToPage(Math.min(Math.max(page, 1), this.pageCount))
  }

  page(direction: number) {
    if (this.currentPage + direction <= 0 || this.currentPage + direction > this.pageCount) return
    this.pageEndPos += this.pageSize * direction
    this.updatePage()
  }

  goToPage(pageNum: number) {
    const maxEndPost = this.pageCount * this.pageSize
    this.pageEndPos = Math.min(this.pageSize * pageNum, maxEndPost)
    if (pageNum < 0) this.pageEndPos = maxEndPost;
    this.updatePage()
  }

  async updatePage() {
    const resp = await this.guiElementMethod({
      name: this.data.base.Name,
      method: "gettabledata",
      argument: JSON.stringify({ range: [this.pageEndPos - this.pageSize, this.pageEndPos] }),
    });
    const newData = JSON.parse(resp.method)
    this.getNewValue({...this.dataCache, ...newData}, true)
  }

  openCtxMenu(e: MouseEvent) {
    const target = e.target as HTMLElement;
    let elements: in_proto.IElementRef[];
    let y: number;
    if (target.classList.contains("ve-table-header-th")) {
      // The key is not there in the attributes so we get the text content which is equal to it
      const colKey = target.textContent;
      elements = this.dataCache.popupHeaderMenuCol.elements;
      // The index column is another column in the data array,
      // so we need to go left by one column to map it to the backend index
      y = this.columns.findIndex(el => el.field.startsWith(colKey)) - 1
    }

    if (target.classList.contains("ve-table-operation-col")) {
      const rowKey = target.parentElement.getAttribute("row-key")
      elements = this.dataCache.popupHeaderMenu.elements;
      y = this.tableData.findIndex(el => el.index === rowKey);
    }

    // If neither element got clicked, just return
    if (!elements) return;

    e.preventDefault();

    const selection = (this.$refs.tableEle as any).getRangeCellSelection()?.selectionRangeIndexes;
    const sel = selection ? [selection.startRowIndex, selection.startColIndex - 1, selection.endRowIndex, selection.endColIndex - 1] : [-1, -1, -1, -1];
    if (this.selectionMode && selection) {
      sel[0] += this.dataCache.numFrozenRows
      sel[2] += this.dataCache.numFrozenRows
    }

    console.log(y)
    const ctxmenu: IntensContextMenu = this.$ctxMenu.comp;
    let menu: CtxOption[] = [];
    for (let i in elements) {
      const item = this.getElementData(elements[i]);
      console.log(item)
      menu.push({
        label: item.label,
        type: elements[i].type,
        callback:
          item.action == null
            ? undefined
            : async () => {
              ctxmenu.close();
              await this.guiElementMethod({
                name: this.data.base.Name,
                method: "MenuButtonAction",
                argument: JSON.stringify({
                  id: item.base.id,
                  row_column: y,
                  selected: sel,
                }),
              });
            },
      });
    }
    ctxmenu.open(e, menu);
  }

  openTableMenu(e: MouseEvent) {
    e.preventDefault();
    const selection = (this.$refs.tableEle as any).getRangeCellSelection()?.selectionRangeIndexes;
    const sel = selection ? [selection.startRowIndex, selection.startColIndex - 1, selection.endRowIndex, selection.endColIndex - 1] : [0, 0, 0, 0];
    if (!this.selectionMode && selection) {
      sel[0] += this.dataCache.numFrozenRows
      sel[2] += this.dataCache.numFrozenRows
    }
    const ctxmenu: IntensContextMenu = this.$ctxMenu.comp;
    let menu: CtxOption[] = [];
    this.$store.commit("getClipboard");
    const elements = this.dataCache.popupBaseMenu.elements;
    for (let i in elements) {
      const item = this.getElementData(elements[i]);
      menu.push({
        label: item.label,
        type: elements[i].type,
        callback:
          item.action == null
            ? undefined
            : async () => {
              ctxmenu.close();
              await this.guiElementMethod({
                name: this.data.base.Name,
                method: "MenuButtonAction",
                argument: JSON.stringify({
                  id: item.base.id,
                  clipboard: this.$store.state.clipboard,
                  selected: sel,
                }),
              });
            },
      });
    }
    ctxmenu.open(e, menu);
  }

  pasteInterrupt({data}) {
    const pasteMenu = this.dataCache.popupBaseMenu.elements.map(e => this.getElementData(e)).find(el => el.label === "Paste" && el.type !== "Separator")
    if (pasteMenu) {
      const selection = (this.$refs.tableEle as any).getRangeCellSelection()?.selectionRangeIndexes;
      const sel = selection ? [selection.startRowIndex, selection.startColIndex - 1, selection.endRowIndex, selection.endColIndex - 1] : [0, 0, 0, 0];
      if (this.selectionMode && selection) {
        sel[0] += this.dataCache.numFrozenRows
        sel[2] += this.dataCache.numFrozenRows
      }
      navigator.clipboard
        .readText()
        .then((text: string) => {
          this.guiElementMethod({
            name: this.data.base.Name,
            method: "MenuButtonAction",
            argument: JSON.stringify({
              id: pasteMenu.id,
              clipboard: text,
              selected: sel,
            }),
          });
        })
    }
    return false;
  }
}
export default IntensTable;
</script>

<style lang="scss">
.selectionMode.select-header-colors {
  @for $i from 1 through 5 {
    &-#{$i} {
      tr:nth-child(-n+#{$i + 1}) > .ve-table-body-td {
        background: var(--main-color-dark) !important;
      }
    }
  }
}
.selectionMode .edit-input {
  pointer-events: none;
}

.intens-table {
  font-family: monospace;
}

.menu {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.pager-text {
  width: 6ch;
  text-align: right;
}

.plus-button {
  height: 16px;
}

/*
Override the default styles of the ve-table
*/

.ve-table-body-tr,
.ve-table-header-tr {
  height: 25px !important;
}

.ve-table-header-tr {
  white-space: pre !important;
}

.ve-table-body-td {
  padding: 0 !important;
  white-space: nowrap !important;
  border-bottom: 1px solid var(--border-color) !important;
  border-right: 1px solid var(--border-color) !important;
}

.ve-table-header-th,
.ve-table-operation-col {
  border-bottom: 1px solid var(--border-color) !important;
  border-right: 1px solid var(--border-color) !important;
  padding: 2px 5px !important;
  color: #595959 !important;
}

.ve-table-header-th:not(:has(.cell)),
.ve-table-operation-col {
  background: var(--main-color-dark) !important;
}

.ve-table {
  border-top: 1px solid var(--border-color) !important;
  border-left: 1px solid var(--border-color) !important;
}

.ve-table-body {
  overflow-x: hidden !important;
}
</style>
