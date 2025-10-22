<template>
  <input
    :class="intensClass"
    class="intens-toggle"
    type="checkbox"
    ref="box"
    v-tooltip="data.helptext"
    :disabled="disabled"
    :tabindex="data.hasTable ? -1 : undefined"
    @focus="$store.commit('setLastCompId', data.id)"
    @change="onValueChange"
    v-model="value"
    :id="data.fullName" />
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { in_proto } from "../../proto";

interface IntensToggle {
  data: in_proto.DataField & {index:number};
}

@Component
class IntensToggle extends mixins(base) {
  value = !!Number(this.data.value.formattedValue);
  fullName = this.data.fullName;
  disabled = false;

  created() {
    this.$ids.addComponent(this);
  }

  getNewValue(newData: in_proto.DataField) {
    this.intensClass = this.prefixCssClass(newData.base?.styleClass)
    this.value = !!Number(newData.value.formattedValue);
    this.fullName = newData.fullName;
    this.disabled = !newData.editable;
    //console.debug("toggle response", newData)
  }

  async onValueChange() {
    this.getTracer().startActiveSpan("toggle change", async span => {
      if (this.data.action) {
        await this.execute({
          action: this.data.action,
          value: Number(this.value),
          name: this.fullName,
          index: this.data.index
        });
      } else {
        await this.setDatapool(this.fullName, Number(this.value));
      }
      span.end();
    });
  }

  focus() {
    (this.$refs.box as HTMLInputElement).focus()
  }
}

export default IntensToggle;
</script>
