<template>
  <input
    class="intens-index"
    :class="intensClass"
    type="number"
    v-if="show"
    v-model="value"
    :min="data.range.min"
    :max="data.range.max > 0 ? data.range.max : undefined"
    step="1"
    :disabled="!enabled"
    @input="step"
    @change="onValueChange"
    :style="{
      width: data.range.max > 0 ? String(data.range.max).length : 8 + 'em'
    }"
  />
</template>
<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { in_proto } from "../../proto";

interface IntensIndex {
  data: in_proto.Index;
}

@Component
class IntensIndex extends mixins(base) {
  value = 1;
  enabled = false;
  oldVal = 0;
  show = true;

  created() {
    this.getNewValue(this.data);
    this.$ids.addComponent(this);
  }

  getNewValue(data: in_proto.Index) {
    this.intensClass = this.prefixCssClass(data.base.styleClass)
    this.value = data.index
    this.enabled = data.base.enabled
    this.oldVal = this.value
    this.show = data.enabled;
  }

  step(e: InputEvent) {
    // inputType means we are typing a number instead of pressing the step button
    if (e.inputType !== "insertReplacementText") {
      this.oldVal = e.target.valueAsNumber
      return
    }
    if (e.target.valueAsNumber > this.oldVal) {
      this.value = this.oldVal + this.data.range.step
    } else {
      this.value = this.oldVal - this.data.range.step
    }
    this.oldVal = this.value
  }

  onValueChange() {
    if (this.value < (this.data.range.min || 0)) {
      this.value = this.data.range.min || 0;
    }
    this.getTracer().startActiveSpan("update index", async span => {
      if (this.data.action) {
        await this.execute({ action: this.data.action, reason: "Input", name: this.data.fullName, value: this.value - (this.data.range.min || 0)});
      } else {
        await this.setDatapool(this.data.fullName, this.value - (this.data.range.min || 0));
      }
      span.end();
    })
  }
}

export default IntensIndex;
</script>
<style lang="scss">
.intens-index {
  text-align: center;

  &::-webkit-inner-spin-button {
    opacity: 1 !important;
  }
}
</style>
