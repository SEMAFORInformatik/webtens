<template>
  <div class="intens-modal">
    <div class="modal-title">{{ data.title }}</div>
    <div class="modal-body">
      <div class="message" v-html="data.message.replace(/\\n/g, '<br />').replace(/\n/g, '<br />')"></div>
      <div class="modal-buttonbar" :style="`grid-template-columns: repeat(3, 1fr);`">
        <i-button id="web-confirm-cancel-yes" @click="sendAnswer('yes')">
          <span>{{ data.button && data.button[0] ? data.button[0] : "Yes" }}</span>
        </i-button>
        <i-button id="web-confirm-cancel-no" @click="sendAnswer('no')">
          <span>{{ data.button && data.button[1] ? data.button[1] : "No" }}</span>
        </i-button>
        <i-button id="web-confirm-cancel-cancel" @click="sendAnswer('cancel')">
          <span>{{ data.button && data.button[2] ? data.button[2] : "Cancel" }}</span>
        </i-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import base from "../base";
import Component, { mixins } from "vue-class-component";

interface ConfirmCancelModal {
  data: any;
}

@Component
class ConfirmCancelModal extends mixins(base) {
  sendAnswer(answer: string) {
    this.$intens.closeModal(this.data.command);
    this.getTracer().startActiveSpan("modal confirm cancel", span => {
      span.setAttribute("intens.response", answer)
      this.custom(
        "confirm_cancel",
        {
          button_pressed: answer,
        },
        true
      )
      span.end();
    });
  }
}

export default ConfirmCancelModal;
</script>
