<template>
  <progress
    :id="data.fullName"
    class="intens-input"
    :value="percent"
    max="100"
    :class="intensClass"
  >
  </progress>
</template>
<script lang="ts">
import base from "./base";
import slider from "vue-slider-component";
import Component, { mixins } from "vue-class-component";
import "vue-slider-component/theme/default.css";
import { in_proto } from "../../proto";

interface IntensSlider {
  data: in_proto.IDataField;
}

@Component({
  components: {
    slider,
  },
})
class IntensProgressbar extends mixins(base) {
  timeout?: NodeJS.Timeout;
  percent = 0;
  created() {
    this.getNewValue(this.data);
    this.$ids.addComponent(this);
  }

  getNewValue(data: in_proto.IProgressbar) {
    this.intensClass = this.prefixCssClass(data.base?.styleClass)
    this.percent = data.percent
  }

  setPercent(p) {
    this.percent = p;
    if (p >= 100 && !this.timeout) {
      this.timeout = setTimeout(() => {
        this.$intens.addForm(this.form.base.Name, true);
        this.timeout = undefined;
      }, 100)
    }
    console.log(p)
  }

}

export default IntensProgressbar;
</script>
<style lang="scss">
</style>
