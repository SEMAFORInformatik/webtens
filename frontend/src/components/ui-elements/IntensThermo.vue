<template>
  <div :class="intensClass" class="thermo-container">
    <b class="thermo-label">
      {{ data.label}}
    </b>
    <div class="intens-thermo">
      <div class="labels">
        <div class="label" v-for="c, x in serie" :style="{height: block_height + 'px'}">
          <div class="span-container" :style="{paddingTop: block_height/5*4-8 + 'px'}">
            <p v-if="x % 5 == 0">
              {{ c }}
            </p>
          </div>
        </div>
      </div>
      <div class="measure">
        <div class="tick" v-for="c, x in colorList" :style="{height: block_height + 'px'}" :class="{tickBold: x % 5 == 0}"></div>
      </div>
      <div class="colorbar">
        <IEcharts :option="thermo" :style="{height: thermo_height + 'px'}"></IEcharts>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import IEcharts from "vue-echarts-v3/src/lite.js";
import "echarts/lib/component/visualMap";
import "echarts/lib/component/visualMapContinuous.js";
import { in_proto } from "../../proto";

interface ThermoOption {
  visualMap: VisualMap;
}

interface VisualMap {
  max: number;
  min: number;
  itemHeight: number;
  itemWidth: number;
  inRange: { color: string[] };
  show: boolean;
  hoverLink: boolean;
  formatter: any;
}

interface ThermoSerie {
  type: string;
  data: number[];
}

interface IntensThermo {
  data: in_proto.IThermo;
}

@Component({
  components: {
    IEcharts,
  },
})
class IntensThermo extends mixins(base) {
  thermo = {} as ThermoOption;
  thermo_height = 400;
  num_color: number = 0;
  block_height: number = 0;
  colorList = [] as string[];
  serie = [] as number[];
  tick_frequence: number = 0;

  created() {
    this.$ids.addComponent(this);
    this.createThermo(this.data);
  }

  createThermo(thermo: in_proto.IThermo) {
    this.num_color = thermo.colorList.length;
    this.block_height = this.thermo_height / this.num_color;
    this.thermo_height = this.block_height * this.num_color;
    let showHover: boolean = false;

    for (let i in thermo.colorList) {
      this.colorList.push(thermo.colorList[i].color);

      if (thermo.colorList[i].value !== null) {
        let value: number;
        if (Math.abs(thermo.scale) < 10) {
          value = Math.round(parseInt(i) * Math.abs(thermo.scale) * 100) / 100;
        } else {
          value = Math.round(parseInt(i) * Math.abs(thermo.scale));
        }
        this.serie.push(value);
        showHover = true;
      }
    }
    const options: ThermoOption = {
      visualMap: {
        show: thermo.base.visible || false,
        max: 0,
        min: thermo.colorList.length * Math.abs(thermo.scale) || 0,
        itemHeight: this.thermo_height,
        itemWidth: 15,
        hoverLink: showHover,
        formatter: function (value: any) {
          if (Math.abs(thermo.scale) < 10) {
            return Math.round(value * 100) / 100;
          }
          return Math.round(value);
        },
        inRange: {
          color: this.colorList,
        },
      },
    };
    this.thermo = options;
  }
  getNewValue(thermo: in_proto.IThermo) {
    this.intensClass = this.prefixCssClass(thermo.base.styleClass)
    this.colorList = [];
    this.serie = [];
    this.createThermo(thermo);
  }
}

export default IntensThermo;
</script>

<style lang="scss">
.thermo-container {
  margin-right: 10px;
}

.thermo-label {
  margin-left: 25px;
}

.intens-thermo {
  margin-top: 10px;
  display: flex;
  position: relative;

  .labels {
    transform: scale(-1, -1);

    > .label {
      transform: scale(-1);
    }
  }

  .measure {
    margin-left: 32px;
    position: absolute;
    border-right: solid 1px;
    flex-flow: column;
    width: 12px;
    z-index: 2;
    transform: scale(1, -1);

    > .tick {
      height: 10px;
      width: 50%;
      margin-left: 50%;
      border-top: solid 1px;
    }
    > .tickBold {
      width: 100%;
      margin-left: 0%;
    }
  }

  .colorbar {
    position: absolute;
    width: 100px;
    margin-left: 41px;
    margin-top: 5px;

    > .colorblock {
      height: 10px;
    }
  }
}
</style>
