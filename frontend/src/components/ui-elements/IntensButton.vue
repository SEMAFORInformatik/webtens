<template>
  <i-button
    :id="fullName || data.action"
    :helptext="helpText"
    :shape="shape"
    :classes="intensClass"
    :disabled="disabled"
    :visible="visible"
    @click="buttonExec"
    :backgroundColor="disabled ? 'gray' : backgroundColor"
    :color="color"
  >
    <div :class="{ 'icon-container': data.pixmap && !label, 'icon-label': data.pixmap && label }">
      <div v-if="data.pixmap">
        <div
          class="icon"
          :style="{
            'background-image': `url(${imgSrc})`,
            filter: disabled ? 'grayscale(1) brightness(0.5)' : 'none',
          }"
        ></div>
      </div>
      <span v-html="label" style="white-space: pre-line"></span>
    </div>
  </i-button>
</template>
<script lang="ts">
import Base from "./base";
import Component, { mixins } from "vue-class-component";
import { in_proto } from "../../proto";

interface IntensButton {
  data: in_proto.ButtonField;
}

@Component
class IntensButton extends mixins(Base) {
  shape = "square";
  imgSrc = "";
  disabled = false;
  parentForm = "";
  label = "";
  index: number = 0;
  color: string = "";
  visible = true;
  backgroundColor: string = "";
  fullName = "";
  helpText = "";
  value="";

  created() {
    if (!this.data.field) console.log(this.data)
    this.intensClass = this.prefixCssClass(this.data.field?.base?.styleClass)
    this.$ids.addComponent(this);
    this.imgSrc = this.data.icon || this.data.field?.icon;
    if (!this.fullName) {
      this.getNewValue(this.data);
    }
    this.shape = this.data.pixmap ? "circle" : "square";
    if (this.data.field?.base?.alignment) {
      this.createIndex(this.data.field.fullName);
    }
  }

  async buttonExec() {
    this.$store.commit("setLastCompId", this.data.field?.base?.id || this.data.base.id);
    this.getTracer().startActiveSpan("button-press", async span => {
      span.setAttribute("webtens.button", this.fullName);
      if (this.data.field?.action && this.data.field?.action === "GUIELEMENT_METHOD") {
        await this.custom("control", {
          command: this.data.field.action,
          guielement: this.form.base.Name,
          method: "Clicked",
          argument: JSON.stringify({ id: this.data.field.base.id }),
        });
      } else if (this.data.field?.action || this.data.action) {
        await this.execute({
          action: this.data.field?.action || this.data.action,
          value: "￾ignore-me￿",
          name: this.fullName,
          index: this.index,
        });
      } else if (!this.data.field) {
        await this.control({
          command: "UNMAP",
          argument: this.form.base.Name,
          form_name: this.form.base.Name,
        });
        }
      span.end();
    });
  }

  getNewValue(data: in_proto.ButtonField) {
    if (!data.field) {
      this.label = data.label;
      this.disabled = !data.base.enabled
      this.fullName = data.base.name
      return;
    }
    this.intensClass = this.prefixCssClass(data.field.base.styleClass)
    this.disabled = typeof data.field.editable === "undefined" ? false : !data.field.editable;
    this.helpText = (typeof data.field.helptext === "string" ? data.field.helptext : "") + (this.disabled ? " (Disabled)" : "");
    // remove "ignore-me" and the characters around it
    this.helpText = this.helpText.replace(/.ignore\-me./, "")
    this.label = (data.field.label || data.field.value.stringValue).replace(/(\n)|(\\n)/gm, "<br/>");
    this.label = this.label.replace(/<br\/>$/gm, "<br/><br/>");
    this.color = data.field.fgColor
    this.backgroundColor = data.field.bgColor ? data.field.bgColor : "";
    if (data.icon === "unchanged") {
      this.imgSrc = this.data.icon || this.data.field?.icon;
    } else {
      this.imgSrc = data.icon || data.field.icon;
    }
    this.visible = data.field.base.enabled;
    if (this.label === "" && this.imgSrc === "") this.visible = false;
    this.fullName = data.field.fullName!;
    if (data.field.fullName) this.createIndex(data.field.fullName)
  }

  createIndex(fullName: string) {
    let idxs = fullName.match(/\[\d+\]/g);
    if (idxs) {
      this.index = Number(idxs[idxs.length - 1].replace(/[\[\]]/g, ""));
    }
  }
}

export default IntensButton;
</script>
<style lang="scss">
.intens-button {
  span {
    white-space: nowrap !important;
  }
  .icon {
    color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

    &,
    &-container {
      width: 25px;
      height: 25px;
    }

    &-label {
      display: flex;
      align-items: center;
    }
  }
}
</style>
