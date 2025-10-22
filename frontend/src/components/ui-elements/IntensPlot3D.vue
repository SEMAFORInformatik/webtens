<template>
  <div class="intens-3dplot" :class="intensClass" v-if="hasData" :id="data.base.id" >
    <IEcharts :option="plot" :style="{ width: plotWidth, height: plotHeight }"></IEcharts>
    <label>
      <input type="checkbox" v-model="topDown" name="2d" @change="createPlot(plotData)"/>
      2D
    </label>
  </div>
</template>
<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import IEcharts from "vue-echarts-v3/src/lite.js";

import "echarts-gl";
import * as echarts from "echarts/core"
import { SurfaceChart, Bar3DChart } from "echarts-gl/charts"
import { in_proto } from "../../proto";

echarts.use([SurfaceChart, Bar3DChart])

const getColorsFromGradient = (gradientOptions, steps) => {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = steps;
    canvas.height = 1;

    // Create a linear gradient
    const gradient = ctx.createLinearGradient(0, 0, steps, 0);

    gradientOptions.forEach(({color, stop}) => {
        gradient.addColorStop(stop, color);
    });

    // Fill the canvas with the gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, steps, 1);

    // Get the pixel data
    const imageData = ctx.getImageData(0, 0, steps, 1);
    const data = imageData.data;

    // Extract colors
    const colors = [];
    for (let i = 0; i < data.length; i += 4) {
        const rgba = `rgba(${data[i]}, ${data[i + 1]}, ${data[i + 2]}, ${data[i + 3] / 255})`;
        colors.push(rgba);
    }

    return colors;
}

// Example usage
const colorsArray = getColorsFromGradient([
            {color: "darkcyan", stop: 0},
            {color: "cyan", stop: 0.1},
            {color: "lime", stop: 0.6},
            {color: "yellow", stop: 0.95},
            {color: "red", stop: 1},
          ], 50);

@Component({
  components: {
    IEcharts,
  },
})
class IntensPlot3D extends mixins(base) {
  declare data: in_proto.IPlot3D
  plot = {} as any;
  hasData = false;
  topDown: boolean = false
  plotData: any;
  min: number | undefined = 0;
  max: number | undefined = 0;
  plotHeight: string = "500px";
  plotWidth: string = "500px";

  mounted() {
    this.$ids.addComponent(this);
    this.getNewValue(this.data);
    let neighbors = Array.from(this.$el.parentElement.parentElement.parentElement.querySelectorAll(".intens-3dplot"));
    if (neighbors.length === 0) {
      this.plotWidth = "750px"
    }
  }

  getNewValue(data: in_proto.IPlot3D) {
    this.intensClass = this.prefixCssClass(data.base.styleClass)
    if (data.style === in_proto.Plot3D.Plot3DStyle.Contour) {
      this.topDown = true
    }
    this.plotData = data;
    this.createPlot(data);
  }

  setPlotsize(width: string, height: string) {
    this.plotWidth = width;
    this.plotHeight = height;
  }

  createMatrix(xaxis: number[], yaxis: number[], data: in_proto.Plot3D.Axis.IMatrixLine[]) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let matrix = [];
    for (let li in data) {
      for (let en in data[li].a) {
        min = Math.min(data[li].a[en], min);
        max = Math.max(data[li].a[en], max);
        matrix.push([xaxis[en], yaxis[li], data[li].a[en]]);
      }
      this.hasData = true;
    }
    this.min = min;
    this.max = max;
    return matrix.map(e => e.map(n => n === Number.MAX_VALUE ? undefined : n));
  }

  createPlot(data: in_proto.IPlot3D) {
    let matrix = this.createMatrix(data.xAxis.data, data.yAxis.data, data.zAxis.matrix);
    if (matrix.length === 0) {
      console.log(matrix) 
      this.hasData = false;
      return
    }

    const options: echarts.EChartsCoreOption = {
      title: {
        text: data.headerText,
        left: "center",
        textStyle: {
          fontSize: 14,
        },
      },
      xAxis3D: {
        type: "value",
        name: data.xAxis.label,
        nameTextStyle: {
          fontFamily: "Roboto"
        }
      },
      yAxis3D: {
        type: "value",
        name: data.yAxis.label,
        nameTextStyle: {
          fontFamily: "Roboto"
        }
      },
      zAxis3D: {
        type: "value",
        name: data.zAxis.label,
        nameTextStyle: {
          fontFamily: "Roboto"
        }
      },
      grid3D: {
        axisLine: {
          //lineStyle: { color: '#fff' }
        },
        axisPointer: {
          //lineStyle: { color: '#fff' }
        },
        viewControl: {
          projection: this.topDown ? "orthographic" : "perspective",
          rotateSensitivity: this.topDown ? 0 : 1,
          alpha: this.topDown ? 90 : 20,
          beta: this.topDown ? 0 : -40,
          distance: this.topDown ? 150 : 250,
          panMouseButton: this.topDown ? "left" : "middle",
          rotateMouseButton: this.topDown ? "middle" : "left"
          //autoRotate: true
        },
      },
      series: [
        {
          type: data.drawInterpolated && this.topDown ? "surface" : "bar3D",
          shading: "color",
          name: data.zAxis.label,
          data: matrix,
        },
      ],
      visualMap: {
        calculable: true,
        realtime: false,
        min: this.min,
        max: this.max,
        bottom: 30,
        left: 10,
        inRange: {
          color: colorsArray
        }
      },
      animation: false,
    };
    this.plot = options;
  }
}

export default IntensPlot3D;
</script>
