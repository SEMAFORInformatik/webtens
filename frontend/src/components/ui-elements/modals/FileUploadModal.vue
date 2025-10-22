<template>
  <div class="intens-modal" id="uploadmodal">
    <div class="modal-title">{{ data.title }}</div>
    <div class="modal-body">
      <form enctype="multipart/form-data">
        <input id="fileUploadButton" type="file" @change="updateStatus" @cancel="close" ref="fileInput" :accept="fileTypes" />
      </form>
      <div class="modal-buttonbar" id="uploadbuttons" :style="`grid-template-columns: repeat(2, 1fr)`">
        <i-button :visible="false" id="web-file-upload-submit" @click="fileUpload">Submit</i-button>
        <i-button :visible="false" id="web-file-upload-abort" @click="close">Abort</i-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import base from "../base";
import Component, { mixins } from "vue-class-component";

interface FileUploadModal {
  data: any;
}

@Component
class FileUploadModal extends mixins(base) {
  hasFile = false;
  isUploading = false;
  mounted() {
    this.$refs.fileInput.click()
  }
  updateStatus() {
    const file = (this.$refs.fileInput as HTMLInputElement).files[0];
    if(file) {
      this.fileUpload();
    }
  }
  fileUpload() {
    if (this.isUploading) return;
    this.isUploading = true;
    console.info("fileUpload called");
    const file = (this.$refs.fileInput as HTMLInputElement).files[0];
    this.customFile(
      file,
      this.data.command
    ).finally(() => {
      this.$intens.closeModal(this.data.command);
      this.isUploading = false;
    });
  }
  close() {
    if (this.isUploading) return;
    console.info("FileUploadModal::close called");
    this.$intens.closeModal(this.data.command);
    this.custom(
      this.data.command,
      {
        data: "empty",
        type: "abort",
      },
      true
    )
  }

  get fileTypes() {
    console.info("FileUploadModal::fileTypes called", this.data.filter);
    if (this.data.filter) {
      return this.data.filter
        .match(/\*\w*\.\w+\.*\w*/g)
        .join(",")
        .replace(/\(/g, "")
        .replace(/\)/g, "")
        .replace(/\*/g, "");
    }
    return "";
  }
}

export default FileUploadModal;
</script>

<style>
#fileUploadButton, #uploadmodal, #uploadbuttons {
  visibility: hidden !important;
}

.vm--modal:has(#uploadmodal) {
  visibility: hidden !important;
}
</style>
