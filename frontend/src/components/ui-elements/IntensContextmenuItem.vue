<template v-if="label !== undefined">
  <hr v-if="isSeparator" />
  <div class="ctx-menu-item" v-else>
    <div class="ctx-submenu" v-if="hasSubmenu">
      <div class="title">
        <div class="label" v-html="label.replace(/&./g, '<u>$&</u>').replace(/&/g, '')"></div>
        <img alt="" :src="moreItemsArrow" width="8" />
      </div>
      <div class="menu-entries">
        <IntensContextMenuItem v-for="opt in option.submenu" :key="opt.label" :option="opt"></IntensContextMenuItem>
      </div>
    </div>
    <div class="title" v-else @click="callback">
      <div class="label" v-html="label.replace(/&./g, '<u>$&</u>').replace(/&/g, '')"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { getBaseUrl } from "../../config";
import { CtxOption } from "../../dataTypes";
import { in_proto } from "../../proto";

@Component
export default class IntensContextMenuItem extends Vue {
  @Prop() option!: CtxOption;
  name = "CtxItem";

  get label() {
    if (this.option.type === in_proto.GuiElement.Type.EMenuToggle) {
      return this.option.label + (this.option.checked ? " ✓" : "");
    }
    return this.option.label || "";
  }
  get hasSubmenu() {
    return this.option.submenu ? Array.isArray(this.option.submenu) : false;
  }
  get moreItemsArrow() {
    return getBaseUrl() + "/res/branch_closed.png";
  }

  get isSeparator() {
    return this.option.type === in_proto.GuiElement.Type.ESeparator;
  }

  callback() {
    if (this.option.callback) this.option.callback();
  }
}
</script>

<style lang="scss">
$entryHeight: 30px;
.ctx-menu-item {
  min-height: $entryHeight;
  padding-top: 2px;
  padding-bottom: 2px;
  background: white;

  &:hover {
    background: #d9dadc;
  }
  .title {
    display: flex;
    height: $entryHeight;
    margin-right: 10px;
    font-size: 0.9em;
    justify-content: space-between;

    > .label {
      align-self: center;
      margin-left: 10px;
    }
    > img {
      align-self: center;
      justify-self: end;
      margin-right: 10px;
    }
  }
  .menu-entries {
    position: absolute;
    min-width: max-content;
    left: 100%;
    margin-top: -$entryHeight;
  }
}

.ctx-submenu > .menu-entries {
  visibility: hidden;
}

.ctx-submenu:hover > .menu-entries {
  visibility: visible;
}

</style>
