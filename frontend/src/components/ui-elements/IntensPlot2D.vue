<template>
  <div :id="data.name" class="intens-plot" :class="intensClass" v-if="show">
    <div
      v-if="loaded"
      class="grid"
      :style="{
        'grid-template-columns': `${plotWidth}px 20px`,
        'grid-template-rows': `${plotHeight}px 20px`,
      }">
      <iEcharts
        class="echarts"
        :option="plot"
        @contextmenu.native="openCtxMenu"
        @ready="onReady"
        @mousedown.native="mousedown"
        @click.native="exec"
        @datazoom="datazoom"
        @restore="() => ins.setOption(plot, {notMerge: false, replaceMerge: ['xAxis', 'yAxis', 'series']})"
        ref="plot"
        :style="{ width: plotWidth + 'px', height: plotHeight + 'px' }">
      </iEcharts>
      <template v-if="isResizeButtons">
        <button class="bidirectional-resize" :id="'bidirectional-resize-' + data.base.id">
          <img alt="resize bi-directional" :src="getBaseUrl() + '/res/bi-resize.png'" />
        </button>
        <button class="right-resize" :id="'right-resize-' + data.base.id">
          <img alt="resize horizontal" :src="getBaseUrl() + '/res/horizontal-resize.png'" />
        </button>
        <button class="bottom-resize" :id="'bottom-resize-' + data.base.id">
          <img alt="resize vertical" :src="getBaseUrl() + '/res/horizontal-resize.png'" />
        </button>
      </template>
    </div>
    <modal :name="data.base.id + '-CycleModal'" :draggable="true" :resizable="true" width="300px" height="auto">
      <div class="intens-modal">
        <div class="modal-title">Case Dialog</div>
        <div class="modal-body cycles">
          <ul class="cycle-titles">
            <li>Case</li>
            <li>Name</li>
            <li></li>
          </ul>
          <div class="cycle-list">
            <template v-for="(item, index) in list_cycle">
              <div v-if="item !== active_cycle">
                <span>Case {{ index + 1 }}</span>
                <span>{{ item }}</span>
                <input type="checkbox" :value="index" v-model="checkboxList[active_cycle][index]" />
              </div>
            </template>
          </div>
          <div v-if="list_cycle.length == 1"><em>No other cases found</em></div>
          <div class="modal-buttonbar" :style="`grid-template-columns: repeat(1, 1fr)`">
            <i-button class="intens-button" @click="getActiveCycles()"><span>Close</span></i-button>
          </div>
        </div>
      </div>
    </modal>
    <modal :name="data.base.id + '-ScaleModal'" :draggable="true" :resizable="true" width="650px" height="225px">
      <div class="intens-modal">
        <div class="modal-title">Scale Modal</div>
        <div class="modal-body scale-modal">
          <div>
            <span>Axis</span>
            <span>Min. Scale</span>
            <span>Max. Scale</span>
            <span>Enable</span>
          </div>
          <div v-for="value in axises">
            <strong>{{ value }}</strong>
            <input type="number" v-model="Scale[value].min" step="any" @change="setScale(value)" />
            <input
              type="number"
              v-model="Scale[value].max"
              step="any"
              @change="setScale(value)" />
            <input
              type="checkbox"
              v-model="Scale[value].enabled"
              @change="
                setScaledAxis(value, $event.target.checked);
                setScale(value);" />
          </div>
        </div>
      </div>
    </modal>
    <modal :name="data.base.id + '-ConfigModal'" :draggable="true" :resizable="true" width="1000px" height="auto">
      <div class="intens-modal">
        <div class="modal-title">Configuration Modal</div>
        <div class="modal-body">
          <ul class="config-titles">
            <li>Item name</li>
            <li>Y-Axis 1</li>
            <li>Y-Axis 2</li>
            <li>Line</li>
            <li>Symbol</li>
            <li>Line Style</li>
            <li>Symbol Style</li>
            <li>Symbol Size</li>
          </ul>
          <div class="config-options" v-for="c in serieList">
            <span>{{ c }}</span>
            <div class="radios">
              <input
                type="radio"
                :name="c"
                v-for="a in ['y', 'y2']"
                :value="a"
                :key="a"
                v-model="selectedAxis[c]"
                @click="changeYAxis(a, c)" />
            </div>
            <div>
              <input
                type="color"
                v-model="colors[c]"
                @change="setColor(c, colors[c])" />
            </div>
            <div>
              <input type="color" v-model="symbolColors[c]" @change="setSymbolColor(c, symbolColors[c])" />
            </div>
            <div>
              <select
                v-model="selectedLineStyles[c]"
                @change="setLineStyle(c, selectedLineStyles[c])">
                <option v-for="style in ['solid', 'dashed', 'dotted', 'No']" :key="style" :index="style" :content="style">
                  {{ style }}
                </option>
              </select>
            </div>
            <div>
              <select v-model="selectedSymbolStyles[c]" @change="setSymbolStyle(c, selectedSymbolStyles[c])">
                <option
                  v-for="style in ['no symbol', 'circle', 'rect', 'triangle', 'diamond', 'arrow']"
                  :key="style" :index="style">
                  {{ style }}
                </option>
              </select>
            </div>
            <div>
              <select @change="setSymbolSize(c)" v-model="symbolSize[c]">
                <option v-for="size in [3, 6, 9, 12, 16, 20]" :key="size" :index="size">
                  {{ size }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
import base from "./base";
import IEcharts from "vue-echarts-v3/src/lite.js";
import { EChartsType, EChartsOption, TitleComponentOption, GridComponentOption, LineSeriesOption } from "echarts";
import Component, { mixins } from "vue-class-component";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/scatter";
import "echarts/lib/component/grid";
import "echarts/lib/component/legendScroll";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/dataZoom";
import "echarts/lib/component/toolbox";
import { IntensPlot2DItem, axisName } from "../../dataTypes";
import interact from "interactjs";
import { getConfig } from "../../config";
import { in_proto } from "../../proto";

const standardizeColor = (str: string) => {
    if (!str) return undefined;
    let ctx = document.createElement('canvas').getContext('2d');
    ctx.fillStyle = str;
    return ctx.fillStyle;
}

const getPrecision = (range: number) => {
    // Normalize the input to a range between 0 and 1
    // if the range is over 1000, we want the precision to be the lowest
    const normalizedInput = Math.min(range / 1000, 1);
    const maximumPrec = 12
    const minimumPrec = 4

    const output = maximumPrec - Math.floor((normalizedInput * (maximumPrec - minimumPrec)));

    return output;
}

interface DataZoomEvent {
  type: string;
  batch: { dataZoomId: string, startValue: number, endValue: number }[];
}

interface ScaledAxis {
  min: string;
  max: string;
  enabled: boolean;
}

interface PlotAxis {
  axisLine: { onZero: boolean };
  boundaryGap?: boolean;
  name: string;
  nameGap?: number;
  nameLocation: string;
  nameRotate?: number;
  type: string;
  min?: number | null;
  max?: number | null;
  axisLabel?: { [index: string]: any };
  [index: string]: any;
}

interface IntensPlot2D {
  data: in_proto.Plot2D;
}


const defaultPlotWidth = 600;
const defaultPlotHeight = 300;
const bottomHeight = 80
const yLabelGap = 40;
@Component({
  components: {
    IEcharts,
  },
})
class IntensPlot2D extends mixins(base) {
  ins: EChartsType = {
    setOption() {}
  } as any;
  show = this.data.base.visible;
  loaded = false;
  mousedownTime = 0;
  mousedownCoords = [0, 0];
  neighborPlots: IntensPlot2D[] = [];
  backupPlotData: in_proto.Plot2D;
  redrawing = false;
  plot = {} as EChartsOption; // Die ganze Configuraion des Plots
  series: LineSeriesOption[] = []; // Die Daten des Plots
  axisPlottypes: { Y1Axis: string; Y2Axis: string } = {
    Y1Axis: "",
    Y2Axis: "",
  }; // Momentaner Plottype einer Y-Achse
  axises: {[key: string]: axisName} = { x: 'XAxis', y1: 'Y1Axis', y2: 'Y2Axis' };
  YAxes: { Y1Axis: string[]; Y2Axis: string[] } = { Y1Axis: [], Y2Axis: [] };
  serieList: string[] = []; // Liste der Namen aller Datensätze
  legendList: string[] = []; // Alle Datensätze, welche eine Legende haben
  markerList: string[] = []; // Alle Datensätze welche nur als Punkt angezeigt werden
  Scale: { XAxis: ScaledAxis; Y1Axis: ScaledAxis; Y2Axis: ScaledAxis } = {
    XAxis: {
      min: "",
      max: "",
      enabled: false,
    },
    Y1Axis: {
      min: "",
      max: "",
      enabled: false,
    },
    Y2Axis: {
      min: "",
      max: "",
      enabled: false,
    },
  };
  scaledAxis: { XAxis: boolean; Y1Axis: boolean; Y2Axis: boolean } = {
    XAxis: false,
    Y1Axis: false,
    Y2Axis: false,
  };
  checkboxList: { [key: string]: boolean[] } = {}; // Liste der Stati aller Checkboxen
  list_cycle: string[] = this.$store.state.cycleList || []; // Liste aller Cycle
  active_cycle: string = this.$store.state.activeCycle || "Base"; // Aktiver Cycle
  plotHeight: number = 0; // Höhe des Plots
  plotWidth: number = 0; // Breite des Plots
  selectedAxis: { [key: string]: string } = {}; // Zeigt im Config Dialog die aktive Axis an
  colors: { [key: string]: string } = {};
  symbolColors: { [key: string]: string } = {};
  symbolSize: { [key: string]: string } = {};
  selectedLineStyles: { [key: string]: string } = {};
  selectedSymbolStyles: { [key: string]: string } = {};
  getNewValueCalled: boolean = false; // check if the getNewValue has already been called
  fetchingZoomData = false;
  isResizeButtons = true;
  tooltipOpen = false;
  xAnnotation = {
    data: null  as in_proto.Plot2D["xAnnotation"],
    textHeight: null as number | null,
    enabled: false,
    yMaxHeight: null as [number, number] | null // index of YAxis and MaxHeight
  }
  reduceMenu = false;

  created() {
    this.setCheckBoxList();
  }
  mounted() {
    const loader = ({skipped}) => {
      if (skipped) return
        this.$el.removeEventListener("contentvisibilityautostatechange", loader)
        this.loaded = true
        setImmediate(this.fullMounted)
    }
    if (!this.$el.checkVisibility({visibilityProperty: true})) {
      this.$el.addEventListener("contentvisibilityautostatechange", loader)
      return
    } else {
      loader(false)
    }
  }

  fullMounted() {
    this.$ids.addComponent(this);
    if (!this.getNewValueCalled) {
      this.initPlot(this.data);
    }
    this.initInteract();
    this.checkboxList = this.$store.state.plotList[this.data.base.Name].checkBoxList || {};
    getConfig().then(config => {
        this.reduceMenu = config ? config.hideControlBar : false
    })
    document.body.addEventListener("mousedown", this._bodyClickListener);
  }

  _bodyClickListener(e: Event) {
    if(this.$el.contains(e.target as Node)) {
      this.plot.tooltip.alwaysShowContent = true;
      this.tooltipOpen = true;
      return
    }
    setImmediate(() => {this.ins.dispatchAction({
      type: 'hideTip'
    })})
    if (!this.plot.tooltip.alwaysShowContent || !this.tooltipOpen) return
    this.tooltipOpen = false;
    this.plot.tooltip.alwaysShowContent = false;
    this.ins.setOption(this.plot, {notMerge: false, replaceMerge: ["xAxis", "yAxis", "series"]});
  }

  // Setzt die Konfiguration des Plots und updated ihn
  createPlot(data: in_proto.Plot2D) {
    const y1AxisTitle = data.axisY1.title || data.plotItems.reduce((p, c) => c.axis == "Y1Axis" ? p + `${c.label} ` : p, "")
    const y2AxisTitle = data.axisY2.title || data.plotItems.reduce((p, c) => c.axis == "Y2Axis" ? p + `${c.label} ` : p, "")
    const options: EChartsOption = {
      title: {
        text: data.headerText,
        left: "center",
        textStyle: {
          fontSize: 14,
        },
      },
      xAxis: [
        {
          type: data.axisX.logarithmic ? "log" : "value",
          name: data.axisX.title,
          nameLocation: "middle",
          nameGap: 20,
          boundaryGap: false,
          axisLine: { onZero: false },
          axisLabel: { fontSize: 11 },
          axisPointer: {
            show: true,
            // Hack to let the pointer be shown permanently
            handle: {
              show: true,
              size: 0
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dotted",
              color: "#000000",
              opacity: 0.5,
            },
          },
        },
      ],
      yAxis: [
        {
          type: data.axisY1.logarithmic ? "log" : "value",
          name: y1AxisTitle,
          nameGap: yLabelGap,
          nameLocation: "middle",
          axisLine: { onZero: false },
          nameRotate: 90,
          axisLabel: { fontSize: 11 },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dotted",
              color: "#000000",
              opacity: 0.5,
            },
          },
        },
        {
          type: data.axisY2.logarithmic ? "log" : "value",
          name: y2AxisTitle,
          nameRotate: 90,
          nameGap: yLabelGap,
          nameLocation: "middle",
          axisLine: { onZero: false },
          axisLabel: { fontSize: 11 },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dotted",
              color: "#000000",
              opacity: 0.5,
            },
          },
        },
      ],
      grid: {
        top: data.headerText ? 30 : 10,
        bottom: 52,
        left: this.YAxes.Y1Axis.length > 0 ? "7%" : "1%",
        right: this.YAxes.Y2Axis.length > 0 ? "7%" : "1%",
      },
      series: this.series,
      tooltip: {
        trigger: "axis",
        transitionDuration: 1,
        alwaysShowContent: true,
        formatter: (_, id, callback) => {
          this.tooltipOpen = true;
          const coords = this.$refs.plot.convertFromPixel("grid", this.mousedownCoords);
          const valuesAtCursor = this.backupPlotData.plotItems.map(s => s.y[s.x.findIndex(x => x >= coords[0])])
          const axisTitle = this.backupPlotData.axisX.title.trim() || "Current value"
          const startText = `${axisTitle}: ${coords[0].toFixed(4)}<br/>`;
          this.guiElementMethod({
            name: this.data.base.Name,
            method: "getcurveInfo",
          }, false).then(response => {
            const info: string[] = JSON.parse(response.method).plotitemsInfo.filter(Boolean)
            const label = info.reduce((p, c, i) => {
              return `${p}${this.serieList[i]}: ${valuesAtCursor[i]}, ${c}<br/>`
            }, startText)
            callback(id, label)
          })
          return valuesAtCursor.reduce((p, c, i) => `${p}${this.serieList[i]}: ${c} ...<br/>`, startText)
        },
        triggerOn: "click"
      },
      dataZoom: [{
        type: "inside",
        filterMode: "none",
      }],
      legend: {
        left: "center",
        top: "bottom",
        padding: 2.5,
        data: this.legendList,
        type: "scroll",
      },
      toolbox: this.plot.toolbox || {
        right: 40,
        show: false,
        feature: {
          saveAsImage: {
            title: "Save Image",
          },
          restore: {},
          dataZoom: {
            title: {
              zoom: "Area Zoom",
              back: "Back",
            },
            filterMode: "none",
            brushStyle: {
              borderColor: "#0000FF",
              borderWidth: 2,
            },
          },
        },
      },
      animation: false,
    };
    this.plot = options;
  }
  /**
   * Instanziert die Objekte instance und echarts sobald Plot ready ist
   *
   * @param instance - Objekt um Funktionen auf Plot aufzurufen (Bsp. resize)
   */
  onReady(instance: any) {
    this.ins = instance;
  }
  getNewValue(plot: in_proto.Plot2D) {
    this.intensClass = this.prefixCssClass(plot.base.styleClass)
    if (this.fetchingZoomData) return;
    this.getNewValueCalled = true;
    this.show = plot.base.visible;
    this.initPlot(plot);
    setTimeout(() => {
      this.active_cycle = this.$store.state.activeCycle;
      this.list_cycle = this.$store.state.cycleList;
      if (!this.checkboxList[this.active_cycle]) {
        this.checkboxList[this.active_cycle] = [];
      }
    }, 10);
  }

  initXAnnotation(data: in_proto.Plot2D) {
/* amg: 2022-09-19 auskommentiert
    const maxHeights = this.ins.getOption().yAxis.map((axis: any, i: number) => [axis.axisPointer.value, i]) as number[][]
    const maxHeight = Math.max(...maxHeights.map(h => h[0]))
    let index = 0
    for(const [v ,i] of maxHeights) {
      if(v === maxHeight)
        index = i
    }
    this.xAnnotation.yMaxHeight = [maxHeight, index]
    this.plot.yAxis[index].max = maxHeight;
    */
    this.xAnnotation.data = data.xAnnotation;
    if (this.xAnnotation.data && this.xAnnotation.data.length) {  // temporär. info should come from intens
      this.xAnnotation.enabled = true
    }

    if (this.xAnnotation.data) {
      this.setXAnnotation(this.xAnnotation.enabled);
      setTimeout(() => { this.aproxmiatePlotSize(); }, 500);
    }
    ;(this.plot.grid as GridComponentOption).height = this.plotHeight - bottomHeight
    this.ins.setOption(this.plot, {notMerge: false, replaceMerge: ["xAxis", "yAxis", "series"]});
    this.$forceUpdate()
  }

  mousedown(e) {
    this.mousedownTime = Date.now()
    this.mousedownCoords = [e.layerX, e.layerY]
  }

  async exec(e) {
    const mouseUpCoords = [e.layerX, e.layerY]
    const hasDragged = mouseUpCoords.reduce((acc, v, i) => acc || Math.abs(this.mousedownCoords[i] - v) >= 6, false)
    // A click that took longer than 200 milliseconds will not trigger
    // as we assume the user dragged the plot if held that long
    if (Date.now() - this.mousedownTime > 1000 || hasDragged) {
        return
    }
    if (!this.data.action || !this.$refs.plot.containPixel("grid", [e.layerX, e.layerY])) return;
    const coords = this.$refs.plot.convertFromPixel("grid", [e.layerX, e.layerY]);
    console.log("exec", this.data.action,coords)
    this.execute({
      action: this.data.action,
      reason: "selectpoint",
      x_pos: coords[0],
      y_pos: coords[1],
    })
  }

  async datazoom(e: DataZoomEvent) {
    if (!e.batch || e.batch.length ===1) return
    // if all series are shorter than the default maximum count of table datas
    // we don't need to fetch more data as we already have all of it
    if (this.series.reduce((a, s) => a && s.data.length < 2048, true)) return;
    // If the line goes back and forth, we don't wanna fetch more data.
    for (const series of this.series) {
      let previousPoint = series.data[0][0];
      for (const point of series.data) {
        if (point[0] < previousPoint) {
          return
        }
        previousPoint = point[0]
      }
    }
    let hor = e.batch[0]
    let ver = e.batch[1]

    const w = hor.endValue - hor.startValue;
    const h = ver.endValue - ver.startValue;
    const x = hor.startValue
    const y = ver.startValue
    this.fetchingZoomData = true;
    const response = await this.custom("control", {
      command: "GUIELEMENT_METHOD",
      guielement: this.data.base.Name,
      method: "GetCurveData",
      argument: JSON.stringify({ boundingbox: [x,y,w,h] }),
    });
    const newPlot: IntensPlot2DItem[] = JSON.parse(response.method).plotitems;
    console.log(newPlot)
    setTimeout(() => {
      // temporary solution until control endpoints are protobuf
      this.setSeries({...this.backupPlotData, plotItems: newPlot.map(e => {
        return {
          axis: e.axis,
          isMarker: e.is_marker,
          label: e.label,
          legend: e.label,
          lineColor: e.lineStyleString,
          lineStyle: e.lineStyle,
          markerLabels: e.marker,
          maxX: e.max_x,
          maxY: e.max_y,
          minX: e.min_x,
          minY: e.min_y,
          symbolColor: e.symbolColor,
          symbolSize: e.symbolSize,
          symbolStyle: e.symbolStyleString,
          x: e.x,
          y: e.y
        } as in_proto.Plot2D.IPlotItem
      })}, true)
      this.plot.series = this.series;
      this.ins.setOption(this.plot, {notMerge: false, replaceMerge: ["xAxis", "yAxis", "series"]});
      this.fetchingZoomData = false;
    }, 10);
  }

  setXAnnotation(on: boolean) {
    this.xAnnotation.enabled = on
    if(on) {
      if(!this.xAnnotation.data) return;
      if(this.xAnnotation.data.length == 0) return;
      this.plot.series = this.plot.series.filter(e => !e.xAnnotation)
      const fontSize = 12
      const xAnnotationData = this.xAnnotation.data;
      const data = xAnnotationData.map(ano => [[ano.pos, 0, ano.label], [ano.pos, /*this.xAnnotation.yMaxHeight*/0, ano.label]]);
      const daPts = this.ins.getOption().series[0].data;
      let ymin = daPts.length ? daPts[0][1] : 0;
      let ymax = ymin
      daPts.forEach((pt: any) => {
        ymax = Math.max(ymax, pt[1]);
        ymin = Math.min(ymin, pt[1]);
      });
      const xAnnotationDataLengths = xAnnotationData.map(ano => ano.label.length)
      const height = Math.max(...xAnnotationDataLengths) * (fontSize/2) + bottomHeight - 20
      this.xAnnotation.textHeight = height
      ;(this.plot.grid as GridComponentOption).height = this.plotHeight - height
      const yTrans = (ymin >= 0) ? 0 : Number((this.plot.grid as GridComponentOption).height) * Math.abs(ymin)/(ymax-ymin);
      console.debug("XAnnotation: Translate", yTrans, ", YRange", ymin, ymax, ", GridHeight:", (this.plot.grid as GridComponentOption).height);
      ;(this.plot.xAxis[0] as any).show = false
      ;(this.plot.series as any).push({
        data: data.map(entries => entries[0]),
        type: "scatter",
        symbolSize: 0,
        xAnnotation: true,
        label: {
          show: true,
          fontSize,
          rotate: 90,
          align: "right",
          color: "#000000",
          position: [0, 10+yTrans],
          formatter: "{@[2]}",
          silent: true,
        }
      })
      for(const line of data) {
        ;(this.plot.series as any).push({
          data: line,
          type: "line",
          xAnnotation: true,
          symbol: "roundRect",
          symbolSize: 0,
          lineStyle: {
            color: "#fb8500",
            opacity: 0.25,
            type: "dashed"
          },
        })
      }
    } else {
      ;(this.plot.xAxis[0] as any).show = true
      ;(this.plot.grid as GridComponentOption).height = this.plotHeight - bottomHeight
      this.plot.series = this.plot.series.filter((serie: any) => !(serie.xAnnotation && serie.xAnnotation === true))
    }
    this.ins.setOption(this.plot, {notMerge: false, replaceMerge: ["xAxis", "yAxis", "series"]});
    this.$forceUpdate()
  }

  initInteract() {
    let neighbors = Array.from(this.$el.parentElement.parentElement.parentElement.querySelectorAll(".intens-plot"));
    // https://gitlab.semafor.ch/alstom/tot/tep2/-/issues/112
    if (this.form.base.Name === "resultPlots_environment_form") neighbors = [];
    neighbors = neighbors.filter(e => e !== this.$el);
    this.neighborPlots = neighbors.map(e => (e as any).__vue__);
    interact("#bidirectional-resize-" + this.data.base.id)
      .resizable({
        listeners: {
          move: (event: Interact.ResizeEvent) => {
            this.setPlotsize(this.plotWidth + event.delta.x, this.plotHeight + event.delta.y);
            this.neighborPlots.forEach(e => {
              e.setPlotsize(this.plotWidth + event.delta.x, this.plotHeight + event.delta.y);
            })
          },
        },
      })
      .styleCursor(false);
    interact("#right-resize-" + this.data.base.id)
      .resizable({
        listeners: {
          move: (event: Interact.ResizeEvent) => {
            this.setPlotsize(this.plotWidth + event.delta.x, this.plotHeight);
            this.neighborPlots.forEach(e => {
              e.setPlotsize(this.plotWidth + event.delta.x, this.plotHeight);
            })
          },
        },
      })
      .styleCursor(false);
    interact("#bottom-resize-" + this.data.base.id)
      .resizable({
        listeners: {
          move: (event: Interact.ResizeEvent) => {
            this.setPlotsize(this.plotWidth, this.plotHeight + event.delta.y);
            this.neighborPlots.forEach(e => {
              e.setPlotsize(this.plotWidth, this.plotHeight + event.delta.y);
            })
          },
        },
      })
      .styleCursor(false);
  }

  aproxmiatePlotSize() {
    console.debug("aproxmiatePlotSize");
    const storedWidth = Number(window.localStorage.getItem(`${this.data.base.Name}-width`));
    const storedHeight = Number(window.localStorage.getItem(`${this.data.base.Name}-height`));

    this.setPlotsize(storedWidth || (this.data.fixedWidth ? this.data.fixedWidth + 2 * yLabelGap : defaultPlotWidth),
      storedHeight || (this.data.fixedHeight ? this.data.fixedHeight  + 2 * yLabelGap : defaultPlotHeight));
  }
  /**
   * Setzt Grösse des Plots (Vom Container aufgerufen)
   *
   * @param width - Breite des Plots
   * @param height - Höhe des Plots
   */
  setPlotsize(width: number, height: number) {
    this.plotWidth = width;
    this.plotHeight = height;
    window.localStorage.setItem(`${this.data.base.Name}-width`, String(width))
    window.localStorage.setItem(`${this.data.base.Name}-height`, String(height))
    //@ts-ignore
    if(!(this.plot.grid as GridComponentOption)) this.plot.grid = {}
    if(this.xAnnotation.enabled) {
      (this.plot.grid as GridComponentOption).height = this.plotHeight - this.xAnnotation.textHeight
    } else {
      (this.plot.grid as GridComponentOption).height = this.plotHeight - bottomHeight
    }
    this.ins.setOption(this.plot, {notMerge: false, replaceMerge: ["xAxis", "yAxis", "series"]});
    setTimeout(() => {
      this.ins.resize({width: this.plotWidth, height: this.plotHeight});
      this.setXAnnotation(this.xAnnotation.enabled)
    }, 100);
  }
  /**
   * Wechselt die Y-Axis einer Serie: Y <-> Y2
   *
   * @param axis - Neue Achse
   */
  changeYAxis(axis: string, data: string) {
    const serie = this.plot.series.findIndex(e => e.name === data)
    switch (axis) {
    case "y":
      this.plot.series[serie].yAxisIndex = 0;
      for (let ax in this.YAxes.Y2Axis) {
        if (this.YAxes.Y2Axis[ax] === data) {
          this.YAxes.Y2Axis.splice(parseInt(ax), 1);
          this.YAxes.Y1Axis.push(data);
          this.setPlottype("Y1Axis", this.axisPlottypes["Y1Axis"]);
          break;
        }
      }
      (this.plot.grid as GridComponentOption).right = this.YAxes.Y2Axis.length > 0 ? "7%" : "1%";
      (this.plot.grid as GridComponentOption).left = "7%";
    break;
    case "y2":
      this.plot.series[serie].yAxisIndex = 1;
      for (let ax in this.YAxes.Y1Axis) {
        if (this.YAxes.Y1Axis[ax] === data) {
          this.YAxes.Y1Axis.splice(parseInt(ax), 1);
          this.YAxes.Y2Axis.push(data);
          this.setPlottype("Y2Axis", this.axisPlottypes["Y2Axis"]);
          break;
        }
      }
      (this.plot.grid as GridComponentOption).left = this.YAxes.Y1Axis.length > 0 ? "7%" : "1%";
      (this.plot.grid as GridComponentOption).right = "7%";
    break;
  }
    this.ins.setOption(this.plot, {notMerge: false, replaceMerge: ["xAxis", "yAxis", "series"]});
  }
  /**
   * Stellt alle Marker als Scatterplots dar
   */
  setMarkers() {
    for (let marker in this.markerList) {
      for (let serie in this.plot.series) {
        if (this.plot.series[serie].name == this.markerList[marker]) {
          this.plot.series[serie].type = "scatter";
          this.plot.series[serie].symbolSize = 6;
        }
      }
    }
    this.ins.setOption(this.plot, {notMerge: false, replaceMerge: ["xAxis", "yAxis", "series"]});
  }
  /**
   * Setzt die Symbolgrösse für eine Serie
   *
   * @param name - Name der Serie
   */
  setSymbolSize(name: string) {
    for (let serie in this.plot.series) {
      if (this.plot.series[serie].name == name) {
        this.plot.series[serie].symbolSize = parseInt(this.symbolSize[name]);
        window.localStorage.setItem(this.getSeriesID(name) + "-symbol-size", this.symbolSize[name])
      }
    }
    this.ins.setOption(this.plot, {notMerge: false, replaceMerge: ["xAxis", "yAxis", "series"]});
  }
  /**
   * Setzt Farbe für die Linie einer Serie
   *
   * @param name - Name der Serie
   * @param color - Neue Farbe der Linie
   */
  setColor(name: string, color: string) {
    this.$set(this.colors, name, color);
    for (let serie in this.plot.series) {
      if (this.plot.series[serie].name == name) {
        if (this.plot.series[serie].lineStyle == undefined) {
          this.plot.series[serie].lineStyle = { color: "", type: "solid" };
        }
        this.plot.series[serie].lineStyle.color = color;
        window.localStorage.setItem(this.getSeriesID(name) + "-color", color)
        break;
      }
    }
    this.ins.setOption(this.plot, {notMerge: false, replaceMerge: ["xAxis", "yAxis", "series"]});
  }
  /**
   * Setzt Farbe für die Symbole einer Serie
   *
   * @param name - Name der Serie
   * @param color - Neue Farbe der Symbole
   */
  setSymbolColor(name: string, color: string) {
    this.symbolColors[name] = color;
    for (let serie in this.plot.series) {
      if (this.plot.series[serie].name == name) {
        if (this.plot.series[serie].itemStyle == undefined) {
          this.plot.series[serie].itemStyle = { color: "" };
        }
        this.plot.series[serie].itemStyle.color = color;
        window.localStorage.setItem(this.getSeriesID(name) + "-symbol-color", color)
      }
    }
    this.ins.setOption(this.plot, {notMerge: false, replaceMerge: ["xAxis", "yAxis", "series"]});
  }
  /**
   * Setzt den Style einer Linie (Wenn Plot Style)
   *
   * @param name - Name der Serie
   * @param style - Neuer Style der Serie
   */
  setLineStyle(name: string, style: string) {
    window.localStorage.setItem(this.getSeriesID(name) + "-symbol-line-style", style)
    this.selectedLineStyles[name] = style;
    for (let serie in this.plot.series) {
      if (this.plot.series[serie].name == name) {
        if (this.plot.series[serie].lineStyle == undefined) {
          this.plot.series[serie].lineStyle = { type: "" };
        }
        if (style === "No") {
          this.plot.series[serie].lineStyle.opacity = 0;
        } else {
          this.plot.series[serie].lineStyle.type = style;
          this.plot.series[serie].lineStyle.opacity = 1;
        }
      }
    }
    this.ins.setOption(this.plot, {notMerge: false, replaceMerge: ["xAxis", "yAxis", "series"]});
  }
  /**
   * Setzt den Style der Symbole
   *
   * @param name - Name der Serie
   * @param style - Neuer Style der Symbole
   */
  setSymbolStyle(name: string, style: string) {
    this.$set(this.selectedSymbolStyles, name, style)
    for (let serie in this.plot.series) {
      if (this.plot.series[serie].name == name) {
        this.plot.series[serie].symbol = style;
        this.plot.series[serie].showSymbol = style !== "no symbol";
        if (style === "no symbol") {
          window.localStorage.removeItem(this.getSeriesID(name) + "-symbol-style")
        } else {
          window.localStorage.setItem(this.getSeriesID(name) + "-symbol-style", style)
        }
      }
    }
    this.ins.setOption(this.plot, {notMerge: false, replaceMerge: ["xAxis", "yAxis", "series"]});
  }

  /**
   * Setzt den Scale auf eine Axis
   *
   * @param axis - Name der Achse
   */
  setScale(axis: axisName) {
    // Holt die Plotachse
    let ax: PlotAxis;
    const centerOffset = Math.ceil(this.backupPlotData.maxX) - this.backupPlotData.maxX
    switch (axis) {
      case "XAxis":
        ax = this.plot.xAxis[0];
        break;
      case "Y1Axis":
        ax = this.plot.yAxis[0];
        break;
      default:
        ax = this.plot.yAxis[1];
        break;
    }

    if (this.Scale[axis].enabled) {
      let Scale = this.Scale[axis];

      if (Scale.min !== "") {
        ax.min = parseInt(Scale.min);
      } else {
        ax.min = axis === "XAxis" ? this.backupPlotData.minX - centerOffset : null;
      }

      if (Scale.max !== "") {
        ax.max = parseInt(Scale.max);
      } else {
        ax.max = axis === "XAxis" ? Math.ceil(this.backupPlotData.maxX) : null;
      }
    } else {
      ax.min = axis === "XAxis" ? this.backupPlotData.minX - centerOffset : null;
      ax.max = axis === "XAxis" ? Math.ceil(this.backupPlotData.maxX) : null;
    }
    this.ins.setOption(this.plot, {notMerge: false, replaceMerge: ["xAxis", "yAxis", "series"]});
  }
  setScaledAxis(axis: axisName, scaled: boolean) {
    this.scaledAxis[axis] = scaled;
  }

  getSeriesID(name: string) {
    return `${this.data.base.Name}-${name}-${this.serieList.indexOf(name)}`
  }

  setSeries(data: in_proto.Plot2D, append = false) {
    if (!append) {
      this.series = [];
    }
    let items = data.plotItems;

    for (let i in items) {
      const range = items[i].maxX - items[i].minY
      const precision = getPrecision(range)

      this.$set(this.serieList, i, items[i].label);
      this.selectedAxis[items[i].label] = "y";
      let serie: LineSeriesOption;
      const axis = this.getAxis(data, items[i]);
      serie = this.getPlottype(axis);
      if (axis === "StackingBar") serie.stack = "x"
      serie.name = items[i].label;

      const lineColor =
                    window.localStorage.getItem(this.getSeriesID(serie.name) + "-color") ||
                    standardizeColor(items[i].lineColor);

      const symbolColor =
                    window.localStorage.getItem(this.getSeriesID(serie.name) + "-symbol-color") ||
                    standardizeColor(items[i].symbolColor);

      const symbolSize =
                    window.localStorage.getItem(this.getSeriesID(serie.name) + "-symbol-size") ||
                    items[i].symbolSize;


      const lineStyle = window.localStorage.getItem(this.getSeriesID(serie.name) + "-symbol-line-style") || items[i].lineStyle || "SolidLine"
      // convert from line style
       let lineStyle_ = {
          SolidLine: 'solid',
          DashLine : 'dashed',
          DotLine : 'dotted',
          NoPen : 'No'
        }[lineStyle] || lineStyle
      this.setLineStyle(serie.name, lineStyle_)
      
      const symbolStyle = window.localStorage.getItem(this.getSeriesID(serie.name) + "-symbol-style") || items[i].symbolStyle || "NoSymbol"

      // convert from intens style
      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
      let symbolStyle_ = symbolStyle === 'UTriangle' ? 'triangle' :
       symbolStyle === 'Ellipse' ? 'circle' :
       symbolStyle === 'Diamond' ? 'diamond' :
       symbolStyle === 'NoSymbol' ? 'no symbol' :
       symbolStyle.length ? 'rect' :
       'no symbol';

      if (!append) {
        this.setColor(serie.name, lineColor);
        this.setSymbolColor(serie.name, symbolColor);
        this.$set(this.symbolSize, serie.name, symbolSize)
        this.setSymbolSize(serie.name);
        this.setSymbolStyle(serie.name, symbolStyle)
        serie.lineStyle = { color: lineColor, type: lineStyle, opacity: lineStyle === "No" ? 0 : 1};
        serie.symbol = symbolStyle_;
        serie.showSymbol = symbolStyle_ !== "no symbol"
        serie.itemStyle = { color:symbolColor }
      } else {
        const plotSerieIndex = this.series.findIndex(e => e.name === items[i].label)
        serie.lineStyle = this.series[plotSerieIndex].lineStyle
        serie.symbol = this.series[plotSerieIndex].symbol
        serie.showSymbol = this.series[plotSerieIndex].showSymbol
        serie.itemStyle = this.series[plotSerieIndex].itemStyle
      }
      serie.symbolSize = Number(symbolSize);



      if (!this.symbolSize[serie.name]) {
        this.$set(this.symbolSize, serie.name, "5")
      }
      serie.symbolSize = (this.symbolSize[serie.name] as any)
      serie.data = [];

      if (this.YAxes.Y2Axis.includes(items[i].label)) {
        serie.yAxisIndex = 1;
        this.selectedAxis[items[i].label] = "y2";
      }
      if(items[i].isMarker) {
        serie.data = items[i].y.map((e, j) => [items[i].x[j], e?.toFixed(precision), items[i].markerLabels[j].label]);
        (serie as any).label = {
          show: true,
          fontSize: 12,
          align: "center",
          color: "#000000",
          position: [0, 10],
          formatter: "{@[2]}",
          silent: true,
        }
      } else {
        serie.data = items[i].y.map((e, j) => [items[i].x[j], e?.toFixed(precision)])
      }

      if (append) {
        const plotSerieIndex = this.series.findIndex(e => e.name === items[i].label)
        const startIndex = this.series[plotSerieIndex].data.findIndex(n => n[0] >= items[i].minX)
        const endIndex = this.series[plotSerieIndex].data.findIndex(n => n[0] >= items[i].maxX)
        let tempdata = this.series[plotSerieIndex].data
        tempdata.splice(startIndex, endIndex - startIndex, ...serie.data)
        serie.data = tempdata
        this.series[plotSerieIndex] = serie;
      } else {
        this.series[Number(i)] = serie;
      }

    }
  }
  /**
   * Sortiert Serien auf der Y-Axis nach Y und Y2
   * @param data - Intensdaten des 2DPlots
   */
  setYAxes(data: in_proto.Plot2D) {
    let YAxes: { Y1Axis: string[]; Y2Axis: string[] } = {
      Y1Axis: [],
      Y2Axis: [],
    };
    for (let i in data.plotItems) {
      if (data.plotItems[i].axis === "Y1Axis") {
        YAxes.Y1Axis.push(data.plotItems[i].label);
      } else {
        YAxes.Y2Axis.push(data.plotItems[i].label);
      }
    }
    this.YAxes = YAxes;
  }
  /**
   * Holt den Style einer Intensachse
   *
   * @param data - Intensdaten des 2DPlots
   * @param item - Plot aus den Intensdaten
   */
  getAxis(data: in_proto.Plot2D, item: in_proto.Plot2D.IPlotItem) {
    return data[item.axis]?.style || this.backupPlotData[item.axis]?.style || "line";
  }
  /**
   * Checkt alle Serien auf Attribute: legend, marker
   * @param data - Intensdaten des 2DPlots
   */
  checkAttributes(data: in_proto.Plot2D) {
    this.legendList = []
    for (let item in data.plotItems) {
      if (data.plotItems[item].legend && !this.legendList.includes(data.plotItems[item].label)) {
        // Serie bekommt eine Legende
        this.legendList.push(data.plotItems[item].label);
      }
      if (data.plotItems[item].isMarker && !this.markerList.includes(data.plotItems[item].label)) {
        // Serie wird mit Markern dargestellt
        this.markerList.push(data.plotItems[item].label);
      }
    }
  }
  /**
   * Setzt einen neuen Plotstyle auf eine Y-achse
   *
   * @param axis - Axis, welche geändert wird
   * @param style - Neuer Plotstyle, welcher gesetzt wird
   */
  setPlottype(axis: "Y1Axis" | "Y2Axis", style: string) {
    let plotType = this.getPlottype(style);
    let plot = this.plot;
    let series = plot.series;

    for (let serie in series) {
      if (this.YAxes[axis].includes(series[serie].name)) {
        delete series[serie].areaStyle;
        delete series[serie].step;
        delete series[serie].symbolSize;
        series[Number(serie)] = { ...series[serie], ...plotType };
      }
    }
    this.axisPlottypes[axis] = style;
    this.ins.setOption(plot, {notMerge: false, replaceMerge: ["xAxis", "yAxis", "series"]});
  }
  /**
   * Gibt den Plottyp mit den Attributen als Objekt zurück
   *
   * @param style - Aktueller plotstyle im Intens
   * @returns Plottyp für echarts
   */
  getPlottype(style: string) {
    let plotAllocator: { [key: string]: string } = {
      Plot: "line",
      Bar: "bar",
      StackingBar: "bar",
      Area: "line",
      Step: "line",
      Dots: "scatter",
    };

    let plotType: any = {};
    plotType.showSymbol = false;
    plotType.type = plotAllocator[style] || "line";

    if (style == "Area") {
      plotType.areaStyle = {};
    } else if (style == "Step") {
      plotType.step = "end";
    } else if (style == "Bar") {
      plotType.barMaxWidth = 20;
    } else if (style == "Plot") {
      plotType.showSymbol = false;
      plotType.silent = true;
    } else if (style == "Dots") {
      plotType.symbolSize = 3;
    }

    return plotType;
  }

  /**
   * Initialisiert alle nötigen Attribute um den Plot zu erstellen
   *
   * @param data - Intensdaten des 2DPlots
   */
  initPlot(data: in_proto.Plot2D) {
    const resetZoom = Math.ceil(this.plot?.xAxis?.[0]?.min) !== data.minX || this.plot?.xAxis?.[0]?.max !== Math.ceil(data.maxX)
    delete data.base.width
    delete data.base.height
    if (!this.redrawing && JSON.stringify(this.backupPlotData) === JSON.stringify(data)) return
    this.backupPlotData = data
    this.aproxmiatePlotSize();
    this.getCycles();
    this.setYAxes(data);
    this.setSeries(data);
    this.checkAttributes(data);
    this.createPlot(data);
    this.setMarkers();
    this.initXAnnotation(data)
    this.setScale("XAxis");
    this.setScale("Y1Axis");
    this.setScale("Y2Axis");

    if (resetZoom) this.ins.dispatchAction({ type: "restore" });
  }
  /**
   * Ändert eine Axis von value <-> log
   * @param axis - Achse, welche geändert wird
   */
  changeLog(axis: "xAxis" | "yAxis") {
    for (let ax in this.plot[axis]) {
      if (this.plot[axis][ax].type === "value") {
        this.plot[axis][ax].type = "log";
      } else {
        this.plot[axis][ax].type = "value";
      }
    }
  }
  /**
   * Holt alle aktivierten Cycle dieses Plots (im momentanen Cycle)
   */
  getActiveCycles() {
    this.$modal.hide(this.data.base.id + "-CycleModal");
    // We want the current cycle included in the list
    // and since cycles are 1 indexed we add +1 to the current cycle's index
    let finalCycleList = [this.$store.state.cycleList.indexOf(this.active_cycle) + 1];
    for (let cycle in this.checkboxList[this.active_cycle]) {
      if (this.checkboxList[this.active_cycle][cycle]) {
        finalCycleList.push(parseInt(cycle) + 1);
      }
    }
    this.getTracer().startActiveSpan("change plot cycles", async span => {
      await this.custom("control", {
        command: "GUIELEMENT_METHOD",
        guielement: this.data.base.Name,
        method: "SetActiveCycles",
        argument: JSON.stringify({ id: finalCycleList }),
      });
      span.end();
    })
  }
  /**
   * Holt die Liste von allen Cycles
   */
  getCycles() {
    this.list_cycle = this.$store.state.cycleList;
    this.setCheckBoxList();
  }
  /**
   * Initialisiert die Checkboxlisten für Zugriffe
   */
  setCheckBoxList() {
    for (let cycle in this.list_cycle) {
      if (!this.checkboxList[this.list_cycle[cycle]]) {
        this.$set(this.checkboxList, this.list_cycle[cycle], []);
      }
    }
    this.$store.commit("setCheckBoxList", {
      name: this.data.base.Name,
      list: this.checkboxList,
    });
  }
  /**
   * Öffnet des Contextmenu des Plots
   *
   * @param e - Ausgeführtes Mausevent
   */
  openCtxMenu(e: MouseEvent) {
    e.preventDefault();
    const ctxmenu = this.$ctxMenu.comp;
    const cmenu = [
      {
        label: "Redraw",
        callback: () => {
          this.serieList.forEach(e => {
            window.localStorage.removeItem(this.getSeriesID(e) + "-color")
            window.localStorage.removeItem(this.getSeriesID(e) + "-symbol-color")
            window.localStorage.removeItem(this.getSeriesID(e) + "-symbol-size")
            window.localStorage.removeItem(this.getSeriesID(e) + "-symbol-style")
            window.localStorage.removeItem(this.getSeriesID(e) + "-symbol-line-style")
          })
          this.plot.toolbox.show = false
          this.redrawing = true
          this.getNewValue(this.backupPlotData)
          this.redrawing = false;
          this.ins.dispatchAction({ type: "restore" });
          (this.plot.toolbox as any).show = false;
          ctxmenu.close();
        },
      },
      {
        label: (this.plot.toolbox as any).show ? "Show Toolbox ✓" : "Show Toolbox",
        callback: () => {
          (this.plot.toolbox as any).show = !(this.plot.toolbox as any).show;
          (this.plot.grid as GridComponentOption).top = (this.plot.toolbox as any).show || (this.plot.title as TitleComponentOption).text ? 30 : 10;
          ctxmenu.close();
        },
      },
      {
        label: "Configuration ...",
        callback: () => {
          this.$modal.show(this.data.base.id + "-ConfigModal");
          ctxmenu.close();
        },
      },
      {
        label: "Select cases ...",
        callback: () => {
          this.getCycles();
          this.$modal.show(this.data.base.id + "-CycleModal");
          ctxmenu.close();
        },
      },
      {
        label: "Scale ...",
        callback: () => {
          this.$modal.show(this.data.base.id + "-ScaleModal");
          ctxmenu.close();
        },
      },
      {
        label: "Logarithmic",
        submenu: [
          {
            label: "Xaxis",
            callback: () => {
              this.changeLog("xAxis");
              ctxmenu.close();
            },
          },
          {
            label: "Yaxis",
            callback: () => {
              this.changeLog("yAxis");
              ctxmenu.close();
            },
          },
        ],
      },
      {
        label: "Style Y1",
        submenu: [
          {
            label: "Style plot",
            callback: () => {
              this.setPlottype("Y1Axis", "Plot");
              ctxmenu.close();
            },
          },
          {
            label: "Style bar",
            callback: () => {
              this.setPlottype("Y1Axis", "Bar");
              ctxmenu.close();
            },
          },
          {
            label: "Style area",
            callback: () => {
              this.setPlottype("Y1Axis", "Area");
              ctxmenu.close();
            },
          },
          {
            label: "Style step",
            callback: () => {
              this.setPlottype("Y1Axis", "Step");
              ctxmenu.close();
            },
          },
          {
            label: "Style dots",
            callback: () => {
              this.setPlottype("Y1Axis", "Dots");
              ctxmenu.close();
            },
          },
        ],
      },
      {
        label: "Style Y2",
        submenu: [
          {
            label: "Style plot",
            callback: () => {
              this.setPlottype("Y2Axis", "Plot");
              ctxmenu.close();
            },
          },
          {
            label: "Style bar",
            callback: () => {
              this.setPlottype("Y2Axis", "Bar");
              ctxmenu.close();
            },
          },
          {
            label: "Style area",
            callback: () => {
              this.setPlottype("Y2Axis", "Area");
              ctxmenu.close();
            },
          },
          {
            label: "Style step",
            callback: () => {
              this.setPlottype("Y2Axis", "Step");
              ctxmenu.close();
            },
          },
          {
            label: "Style dots",
            callback: () => {
              this.setPlottype("Y2Axis", "Dots");
              ctxmenu.close();
            },
          },
        ],
      },
      {
        label: "Fullscreen",
        callback: () => {
          this.custom("control", {
            command: "GUIELEMENT_METHOD",
            guielement: this.data.base.Name,
            method: "fullscreen",
            argument: JSON.stringify({}),
          });
          /*
          if(this.isFullscreen) {
            this.aproxmiatePlotSize()
            this.isFullscreen = false;
          } else*/ {
            const rect = this.$el.getBoundingClientRect()
            const width = window.innerWidth - rect.left - 50
            const height = window.innerHeight - rect.top - 50
            this.setPlotsize(width, height)
          }
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
        label: "Reset Size",
        callback: () => {
          window.localStorage.removeItem(`${this.data.base.Name}-width`);
          window.localStorage.removeItem(`${this.data.base.Name}-height`);
          this.aproxmiatePlotSize()
          ctxmenu.close();
        },
      },
    ]
    // add XAnnotation menuitem
    if (this.xAnnotation.data) {
      cmenu.splice(1,0, {
        label: this.xAnnotation.enabled ? "Show X-Annotation-Label ✓" : "Show X-Annotation-Label",
        callback: () => {
          this.setXAnnotation(!this.xAnnotation.enabled)
          ctxmenu.close()
        }
      });
    }
    /// apc requirements
    if (this.reduceMenu) {
      cmenu.splice(5,3);
      cmenu.splice(3,1);
    }
    ctxmenu.open(e, cmenu);
  }
}

export default IntensPlot2D;
</script>

<style lang="scss">
.intens-plot {
  content-visibility: auto;
  .cycles {
    word-wrap: break-word;
    .cycle-titles {
      padding-left: 0px;
      grid-template-columns: 30% 30% 40%;
      display: grid;
      li {
        font-weight: bold;
        font-size: 1.2em;
        list-style: none;
      }
    }
    .cycle-list div {
      grid-template-columns: 30% 30% 40%;
      display: grid;
      margin-bottom: 7px;
    }
  }

  .config-titles {
    display: grid;
    grid-template-columns: 15% 10% 10% 10% 10% 20% 15% 10%;
    padding-left: 0px;
    margin-top: 0px;
    > li {
      font-weight: bold;
      font-size: 1.1em;
      list-style: none;
    }
  }

  .config-options {
    display: grid;
    grid-template-columns: 15% 20% 10% 10% 20% 15% 10%;
    word-wrap: break-word;
    > .radio-group {
      display: grid;
      grid-template-columns: 50% 50%;
    }
    select {
      width: 80%;
    }
  }

  .scale-modal > * {
    display: grid;
    grid-template-columns: 15% 35% 35% 15%;
    & > span {
      font-weight: bold;
      font-size: 1.3em;
    }
  }
  .scale-modal {
    div {
      margin: 10px 0px;
      input[type="number"] {
        width: 80%;
      }
    }
  }

  .intens-plot {
    margin: 10px;
    width: max-content;
  }

  .radios {
    display: flex;
    justify-content: space-around;
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
