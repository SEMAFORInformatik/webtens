<template>
  <div class="menu-container" :class="{ 'is-menu': isMenu, disabled: !enabled, open: open && visible }" @click.stop="execAction()">
    <div class="separator" v-if="isSeparator"></div>
    <template v-else>
      <div>
        <div
          :id="data.e?.action"
          class="toggle"
          v-if="isToggle"
          @click="enabled ? (checked = !checked) : undefined"
          :class="{ notchecked: !checked, checked: checked }">
          <p class="toggle-label">
            {{ label }}
          </p>
        </div>
      </div>
      <div :id="menuID" :class="{'toggle-padding': !isToggle}" class="intens-menu-button">
        <div>{{ data.e?.label }}</div>
        <img alt="" v-if="isMenu && enabled" :src="moreItemsArrow" width="8" />
      </div>
    </template>
    <div class="submenu" v-if="isMenu">
      <intens-MenuButton
        v-for="(entry, index) in children"
        @finished="closeMenu"
        @clickClosed="closeSubMenus"
        :visible="open && visible"
        :data="entry"
        :ref="entry.id"
        :form="form"
        :parent="menuID"
        :key="(data.e.base.id || 'Separator') + '-' + index"
      ></intens-MenuButton>
    </div>
  </div>
</template>

<script lang="ts">
import base from "./base";
import Component, { mixins } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import CaseModal from "./modals/CaseModal.vue";
import { in_proto } from "../../proto";

interface IntensMenubarButton {
  data: {e:in_proto.MenuButton, type: in_proto.GuiElement.Type};
}

@Component
class IntensMenubarButton extends mixins(base) {
  enabled = this.data.e?.base?.enabled || false;
  checked: boolean = false;
  label = this.data.e?.label || "";
  children = []
  parsedData = {}
  open = false;
  moreItemsArrow = this.getBaseUrl() + "/res/branch_closed.png";

  @Prop()
  visible: boolean;

  @Prop()
  parent: string;

  mounted() {
    if (this.data.e?.elements) {
      const e = this.data.e as in_proto.IPulldownMenu;
      this.children = e.elements.map(ref => ({...ref, e: this.getElementData(ref)}));
    }
  }

  get menuID() {
    return `${this.parent}-${this.label.replaceAll(' ', '_')}`;
  }

  @Watch("checked")
  changeLabel() {
    if (this.checked) {
      this.label = "✔  " + this.label || "";
    } else {
      this.label = this.label || "";
    }
  }

  closeSubMenus() {
    for (let i in this.data.e?.elements) {
      if (this.data.e.elements[i].type === in_proto.GuiElement.Type.EPulldownMenu) {
        this.$refs[this.data.e.elements[i].id][0].open = false;
      }
    }
  }

  closeMenu() {
    this.open = false;
    this.closeSubMenus();
    
    this.$emit("finished")
  }

  execAction() {
    if (!this.enabled) return;
    if (
      this.data.type === in_proto.GuiElement.Type.ESeparator ||
        this.data.type === in_proto.GuiElement.Type.EPulldownMenu ||
        (this.data.e.action && this.data.e.action.includes("not implemented yet"))
    ) {
      const state = this.open;
      this.closeSubMenus();
      this.$emit("clickClosed")
      this.open = !state;
      return;
    }

    this.$emit("finished")
    this.getTracer().startActiveSpan("menubar click", async span => {

      if (this.data.e.mapAction) {
        this.control({
          command: "MAP",
          argument: this.data.e.mapAction,
          form_name: this.form.base.Name,
        });
      } else if (this.data.e.action === "CycleDialog") {
        this.$modal.show(
          CaseModal,
          {
            data: {
              title: "CaseDialog",
              command: "CaseDialog",
              createNew: false,
            },
          },
          { name: "CaseDialog" }
        );
      } else if (this.data.e.action === "QuitApplication") {
        console.debug("logout Menu Button");
        await this.execute({ action: "QUIT", reason: "Function" });
      } else if (this.data.e.action === "MENU_BUTTON_ACTION") {
        console.debug("menu Menu Button");
        await this.custom("control", {
          command:  this.data.e.action,
          guielement: this.data.e.base.id,
          form_name: this.getForm()
        });
      } else if (this.data.e.action) {
        await this.execute({ action: this.data.e.action });
        console.debug(`Executing action ${this.data.e.action} from Pulldownmenu button`);
      }
      span.end();
    })
  }

  get isMenu() {
    return this.data.type === in_proto.GuiElement.Type.EPulldownMenu
  }
  get isToggle() {
    return this.data.type === in_proto.GuiElement.Type.EMenuToggle
  }
  get isSeparator() {
    return this.data.type === in_proto.GuiElement.Type.ESeparator
  }
}

export default IntensMenubarButton;
</script>

<style lang="scss">
.is-menu {
  > .submenu {
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2), -5px 5px 8px rgba(0, 0, 0, 0.2);
    display: block;
    visibility: hidden;
    position: absolute;
    left: 100%;
  }
}
.menu-container.disabled {
  background-color: var(--main-color-dark) !important;
  > * {
    opacity: 0.5;
  }
}
.intens-menu-button {
  display: flex;
  width: 100%;
  justify-content: space-between;
  white-space: nowrap;
  align-items: center;
  > * {
    margin: 5px;
  }
}

.menu-container {
  background: white;
  padding: 2px 10px 2px 4px;
  width: 100%;
  display: flex;
}

.menu-container:hover {
  background: var(--hover-color-light);
}

.separator {
  background-color: black !important;
  border-bottom: 2px solid black;
  width: 100%;
}

.toggle-padding {
  padding-left: 1.3em !important;
}
.is-menu.open> .submenu {
  visibility: visible;
}
</style>
