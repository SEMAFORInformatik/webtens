<template>
  <div class="intens-modal gettext-modal">
    <div class="modal-title">{{ data.title }}</div>
    <div class="modal-body">
      <div v-html="data.message" readonly="readonly" :rows="10" :cols="68"></div>
      <label v-html="data.label"></label>
      <input id="web-gettext-input" class="modal-input" type="text" v-model="text" placeholder="Enter .." />
      <div class="modal-buttonbar" :style="`grid-template-columns: repeat(3, 1fr);`">
        <i-button id="web-gettext-ok" @click="getTextAnswer('ok')">
          <span>{{ data.button ? data.button[0] : okText }}</span>
        </i-button>
        <i-button id="web-gettext-cancel" @click="getTextAnswer('cancel')">
          <span>{{ data.button ? data.button[2] : "Cancel" }}</span>
        </i-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import base from "../base";
import Component, { mixins } from "vue-class-component";
import { getConfig } from "../../../config";

interface GetTextModal {
  data: any;
}

@Component
class GetTextModal extends mixins(base) {
  text: string = "";
  okText = "OK"

  async mounted() {
    this.okText = (await getConfig()).hideControlBar ? "Save" : "OK"
  }

  getTextAnswer(answer: string) {
    this.$intens.closeModal(this.data.command);
    this.custom(
      "getText",
      {
        button_pressed: answer,
        value: this.text,
      },
      true
    )
  }
}

export default GetTextModal;
</script>
<style lang="scss">
.gettext-modal textarea {
  width: 100%;
}
</style>
