<template>
  <input
    class="intens-radio"
    type="radio"
    :checked="selected === value"
    :name="data.id"
    :class="intensClass"
    :disabled="!editable"
    :value="value"
    @focus="$store.commit('setLastCompId', data.id)"
    v-model="selected"
    @click="updateVal"
  />
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { in_proto } from "../../proto";

interface IntensRadio {
  data: in_proto.DataField;
}

@Component
class IntensRadio extends mixins(base) {
  selected = this.data.value.formattedValue;
  value = "1";
  fullName = this.data.fullName;
  editable = false

  created() {
    this.$ids.addComponent(this);
    this.getNewValue(this.data)
  }
  getNewValue(newData: in_proto.DataField) {
    this.intensClass = this.prefixCssClass(newData?.base?.styleClass)
    this.selected = newData.value.formattedValue;
    this.fullName = newData.fullName;
    this.editable = newData.editable;
  }

  async updateVal() {
    this.getTracer().startActiveSpan("radio button press", async span => {
      if (this.data.action) {
        await this.execute({ action: this.data.action, value: Number(this.value), name: this.fullName });
      } else {
        await this.setDatapool(this.fullName, Number(this.value));
      }
      span.end();
    });
  }
}

export default IntensRadio;
</script>
