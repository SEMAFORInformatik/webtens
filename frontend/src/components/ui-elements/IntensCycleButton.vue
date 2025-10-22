<template>
  <div class="cycle-button" :class="intensClass">
    <span class="cycle-label">{{ label }}</span>
    <i-button :id="`${form.base.Name}-cycle-prev`" class="intens-button" @click="changeCycle(index - 1)"><img alt="arrow pointing left" :src="img_left" /></i-button>
    <i-button :id="`${form.base.Name}-cycle-next`" class="intens-button" @click="changeCycle(index + 1)"><img alt="arrow pointing right" :src="img_right" /></i-button>
    <i-button :id="`${form.base.Name}-cycle-new`" class="intens-button" @click="showModal()"><span>New</span></i-button>
  </div>
</template>
<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { IntensCycleButtonData } from "../../dataTypes";
import CaseModal from "./modals/CaseModal.vue";

interface IntensCycleButton {
  data: IntensCycleButtonData;
}

@Component
class IntensCycleButton extends mixins(base) {
  newName = "";
  index = 0;
  label = "";
  img_right = this.getBaseUrl() + "/res/right.png";
  img_left = this.getBaseUrl() + "/res/left.png";

  created() {
    this.$ids.addComponent(this);
    this.index = this.data.cycle;
    this.label = this.data.label;
    this.setActiveCycle(this.data);
  }

  changeCycle(index: number) {
    this.getTracer().startActiveSpan("change cycle", async span => {
      await this.control({
        command: "GOCYCLE",
        argument: index + 1,
        form_name: this.data.form_name,
      });
      span.end();
    });
  }

  getNewValue(cycle: IntensCycleButtonData) {
    this.intensClass = this.prefixCssClass(cycle.class)
    this.index = cycle.cycle;
    this.label = cycle.label;
    this.setActiveCycle(cycle);
  }

  showModal() {
    this.$modal.show(
      CaseModal,
      {
        data: {
          title: "CaseDialog",
          command: "CaseDialog",
          createNew: true,
        },
      },
      { name: "CaseDialog" }
    );
  }

  setActiveCycle(data: IntensCycleButtonData) {
    this.$store.commit("setActiveCycle", data.label.match(/\d+\s:\s(.*)/)![1]);
  }
}

export default IntensCycleButton;
</script>
<style lang="scss">
.cycle-button {
  display: grid;
  grid-template-columns: 150px 25px 25px 1fr;
  grid-column-gap: 7px;
  > .intens-button {
    margin: 0px 5px;
  }
  > .cycle-label {
    padding-left: 10px;
  }
}
</style>
