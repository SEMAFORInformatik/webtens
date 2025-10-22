<template>
  <div class="intens-modal">
    <div class="modal-title">{{ data.title }}</div>
    <div class="modal-body">
      <p>{{ data.message }}</p>
      <div class="modal-buttonbar" :style="`grid-template-columns: repeat(2, 1fr);`">
        <i-button id="web-consistency-yes" @click="consistencyAnswer('yes')"><span>Yes</span></i-button>
        <i-button id="web-consistency-no" @click="consistencyAnswer('no')"><span>No</span></i-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import base from "../base";
import Component, { mixins } from "vue-class-component";

interface ConsistencyCheckModal {
  data: any;
}

@Component
class ConsistencyCheckModal extends mixins(base) {
  text: string = "";

  consistencyAnswer(answer: string) {
    this.$intens.closeModal(this.data.command);
    this.getTracer().startActiveSpan("modal consistency", span => {
      span.setAttribute("intens.response", answer)
      this.custom(
        "confirm",
        {
          return: answer,
        },
        true
      )
      span.end();
    })
  }
}

export default ConsistencyCheckModal;
</script>
