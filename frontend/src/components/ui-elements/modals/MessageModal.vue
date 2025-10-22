<template>
  <div class="intens-modal">
    <div class="modal-title">{{ data.title }}</div>
    <div class="modal-body">
      <div class="mesg" v-html="message"></div>
      <div class="modal-buttonbar" :style="`grid-template-columns: repeat(1, 1fr);`">
        <i-button id="web-message-ok" @click="close()"><span>OK</span></i-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import base from "../base";
import Component, { mixins } from "vue-class-component";
import sanitizeHtml from "sanitize-html";

interface MessageModal {
  data: any;
}

@Component
class MessageModal extends mixins(base) {
  get message() {
    return sanitizeHtml(this.data.message.replace(/\\n/g, "<br/>"));
  }

  close() {
    if (this.data.command === "error_msg") {
      console.info("error_msg closed");
      this.$intens.closeModal(this.data.command);
      this.$store.commit("finishLoading");
      return;
    }
    this.$intens.closeModal(this.data.command);
    this.getTracer().startActiveSpan("modal message", span => {
      this.custom(
        "confirm",
        {
          button_pressed: "Ok",
        },
        true
      ).then(() => {
        //      this.$intens.closeModal(this.data.command)
      });
      span.end();
    });
  }
}

export default MessageModal;
</script>
<style lang="scss">
.mesg {
  max-width: 80%;
  max-height: 70%;
}
</style>
