<template>
  <div class="pixmap-container" :class="intensClass" :style="{ width: width + 'px', height: height + 'px' }">
    <img
      class="intens-pixmap"
      :src="imageSrc"
      :alt="imageAlt"
      :style="{ 'max-width': width + 'px', 'max-height': height + 'px' }"
    />
  </div>
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { in_proto } from "../../proto";

interface IntensPixmap {
  data: in_proto.DataField;
}

@Component
class IntensPixmap extends mixins(base) {
  imageSrc = "";
  imageAlt = "";
  mediaType = "";
  width = this.data.base.width || 100;
  height = this.data.base.height || 100;
  oldName = "";

  created() {
    this.$ids.addComponent(this);
    if (!this.imageSrc) {
      this.getNewValue(this.data);
    }
  }

  getNewValue(pixmap: in_proto.DataField) {
    this.intensClass = this.prefixCssClass(pixmap.base.styleClass)
    this.setImage(pixmap);
  }

  async setImage(pixmap: in_proto.DataField) {
    let name = pixmap.base.Name|| "";
    this.mediaType = pixmap.value.mimetype;
    this.width = pixmap.base.width;
    this.height = pixmap.base.height;
    if (!name) {
      this.imageSrc = "";
      this.oldName = name;
      return;
    }

    if (pixmap.value.mimetype == "image/svg+xml") {
      if (pixmap.value.stringValue.startsWith("data:image/svg+xml;base64,")) {
        this.imageSrc = pixmap.value.stringValue;
      } else {
        this.imageSrc = "data:image/svg+xml;base64," + pixmap.value.stringValue;
      }
      this.oldName = name;
    } else if ((pixmap.value.mimetype == "text/html" && name != this.oldName) || (name.endsWith(".png") || name.endsWith(".svg")) && name != this.oldName) {
      this.oldName = name;
      this.imageSrc = pixmap.value.stringValue;
    } else if (pixmap.value.mimetype == "text/plain" && name != this.oldName) {
      this.oldName = name;
      this.imageSrc = "data:image/svg+xml," + encodeURIComponent(pixmap.value.stringValue);
    } else if (pixmap.value.stringValue.startsWith("data:image/")) {
      this.imageSrc = pixmap.value.stringValue;
    }
  }
}

export default IntensPixmap;
</script>

<style lang="scss">
.intens-pixmap[src=""] {
  visibility: hidden;
}
</style>
