<template>
  <div class="intens-modal">
    <div class="modal-title">{{ data.title }}</div>
    <div class="modal-body">
      <div v-html="data.message"></div>
      <form action="../logout" method="get" style="margin-top: 15px">
        <button id="web-admin-submit" class="intens-button" type="submit" style="width: 100%">Back to Login</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import base from "../base";
import Component, { mixins } from "vue-class-component";

interface AdministrationModal {
  data: any;
}

@Component
class AdministrationModal extends mixins(base) {
  created() {
    this.$store.commit("finishLoading");
  }
}

export default AdministrationModal;
</script>
