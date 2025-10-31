<template>
  <div id="main-app" :style="{ cursor: $store.state.loading ? 'wait' : 'default' }">
    <control-bar v-if="hasControlbar"></control-bar>
    <intens-context-menu id="context-menu" ref="ctxMenu"></intens-context-menu>
    <vue-headful :title="$intens.title"></vue-headful>
    <div id="intens-view" v-show="loaded">
      <vue-tabs class="window-tabs" v-model="openForm" ref="mainTabs">
        <v-tab v-for="(form, name) in forms"
          :keysubTitle="name"
          :title="name"
          :key="name"
          :disabled="isTabDisabled(form, name)">
          <div slot="title"><a @click="changeTab(String(name))"
            :class="{disabled: isTabDisabled(form, name)}"
            :key="form.form.title" class="a-tabs">{{ form.form.title }}</a>
          </div>
          <div class="intens-form" :id="name" :key="name + form.updateIndex">
            <template v-for="component in form.form.elements">
              <component :key="component.id" :is="'intens-' + typeToString(component.type)" :data="getElementData(component)" :form="form.form"></component>
            </template>
          </div>
        </v-tab>
      </vue-tabs>
    </div>
    <modal
      name="popup"
      :clickToClose="false"
      draggable=".modal-title"
      :resizable="false"
      :focusTrap="true"
      height="auto"
      width="950px"
    >
      <div class="intens-modal">
        <div class="modal-title">{{ popup.dialogTitle }}</div>
        <div class="modal-body">
          <div v-html="popup.mainTitle"></div>
          <div class="modal-wrapper">
            <div class="leftGrid" v-html="popup.image"></div>
            <div class="rightGrid" v-html="popup.imageDetail"></div>
          </div>
          <div class="progress" v-if="popup.progress">{{ popup.progress }}%</div>
          <progress class="progress-bar" v-if="popup.progress" max="100" :value="popup.progress"></progress>
          <div class="modal-subtitle" v-html="popup.subTitle"></div>
          <div class="modal-buttonbar" :style="`grid-template-columns: repeat(2, 1fr);`">
            <i-button v-if="popup.popupShowDetailsBtn" @click="popupShowDetails = !popupShowDetails"
              ><span>{{ popup.details && popupShowDetails ? "Collapse Details" : "Details" }}</span></i-button
            >
            <i-button v-if="popup.abortCommand" @click="abort"><span>Abort</span></i-button>
          </div>
          <div v-if="popupShowDetails && popup.details">
            <h3>{{ popup.detailsLabel || "Details" }}</h3>
            <div id="popup-details" v-html="popup.details"></div>
          </div>
          <div class="footer">{{ popup.footer }}</div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
import ControlBar from "./ControlBar.vue";
import base from "./ui-elements/base";
import vueHeadful from "vue-headful";
import sanitizeHtml from "sanitize-html";
import Component, { mixins } from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";
import ConfirmCancelModal from "./ui-elements/modals/ConfirmCancelModal.vue";
import ConfirmModal from "./ui-elements/modals/ConfirmModal.vue";
import CaseModal from "./ui-elements/modals/CaseModal.vue";
import FileUploadModal from "./ui-elements/modals/FileUploadModal.vue";
import GetTextModal from "./ui-elements/modals/GetTextModal.vue";
import ConsistencyCheckModal from "./ui-elements/modals/ConsistencyCheckModal.vue";
import MessageModal from "./ui-elements/modals/MessageModal.vue";
import AdministrationModal from "./ui-elements/modals/AdministrationModal.vue";
import { getConfig } from "../config";
import { in_proto } from "../proto";

const sanitizeConf = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(["progress"]),
  allowedAttributes: { ...sanitizeHtml.defaults.allowedAttributes, progress: ["max", "value", "style"] }
}

interface PopupDescription {
  dialogTitle?: string;
  mainTitle?: string;
  subTitle?: string;
  details?: string;
  detailsLabel?: string;
  image?: string;
  imageDetail?: string;
  progress?: number;
  showLeave?: boolean;
  closeable?: boolean;
  popupShowDetailsBtn?: boolean;
  abortCommand?: boolean;
  footer?: string;
}

@Component({
  components: {
    vueHeadful,
    ControlBar,
  },
})
export default class MainApp extends mixins(base) {
  forms: { [key: string]: {form: in_proto.IForm, updateIndex: number}} = {};
  openForm = "";
  loaded = false;
  popupOpen = false;
  popupShowDetails = false;
  popup: PopupDescription = {};
  form_name = "";
  hasControlbar = false;

  @Prop({default: false})
  connected: boolean;

  @Watch("connected")
  async onConnect() {
    if (this.connected) {
      console.info("Getting forms");
      this.loadStatus("Getting application data", 10, 25);

      this.getTracer().startActiveSpan("get open forms", async span => {
        await this.custom("datapool", { method: "GET", varname: "DATE" });
        span.end();
      })
    }
  }

  created() {
    this.$intens.showModal = this.showModal;
    this.$intens.closeModal = this.closeModal;
    this.$intens.showPopup = this.showPopup;
    this.$intens.hidePopup = this.hidePopup;
    this.$intens.refreshForms = this.refreshForms;
    this.$intens.setForm = this.setForm;
    this.$intens.openForms = this.forms;
    this.$intens.loadStatus = this.loadStatus;
  }

  mounted() {
    this.$ctxMenu.comp = this.$refs["ctxMenu"]
    getConfig().then(config => {
      this.hasControlbar = !config.hideControlBar
      if (config.customScripts) {
        const customScripts = document.createElement("script");
        customScripts.setAttribute("src", `${this.getBaseUrl()}/res/${config.customScripts}`);
        document.head.appendChild(customScripts);
      }
      if (config.customStyles) {
        const customStyles = document.createElement("link");
        customStyles.setAttribute("rel", "stylesheet");
        customStyles.setAttribute("type", "text/css");
        customStyles.setAttribute("href", `${this.getBaseUrl()}/res/${config.customStyles}`);
        document.head.appendChild(customStyles);
      }
    })
  }

  loadStatus(status: string, progress: number, max: number) {
    this.$emit("loadStatus", status, progress, max);
  }

  changeTab(form_name: string) {
    console.info("changeTab ", form_name, ", last: ", this.form_name)
    if (this.form_name != form_name) {
      this.control({
        command: "MAP",
        argument: form_name,
        form_name: form_name
      })
    }
    this.form_name = form_name;
  }
  setForm() {
    if (!this.loaded) return;
    if (Object.values(this.forms).reduce((a, b) => a || b.form.modal, false)) {
      this.openForm = Object.keys(this.forms).findLast(key => this.forms[key].form.modal);
    } else if (this.$intens.currentForm !== "") {
      this.openForm = this.$intens.currentForm;
    } else if (Object.keys(this.forms).pop() !== undefined) {
      this.openForm = Object.keys(this.forms).pop()!;
    }
    requestAnimationFrame(() => this.$refs.mainTabs.activateTab(this.$refs.mainTabs.activeTabIndex))
  }

  @Watch("forms")
  refreshForms() {
    if (!this.loaded) {
      let mainFormName: string = "";
      console.log(this.forms)
      Object.keys(this.forms).forEach((e) => {
        if (this.forms[e].form.main) {
          mainFormName = e;
        }
      });

      if (mainFormName.length > 0) {
        this.$intens.title = `${this.forms[mainFormName].form.title} - Webtens ${window.webtensVersion}`;
        this.forms[mainFormName].form.title = this.forms[mainFormName].form.title.split(" ")[0];
        this.$emit("load");
        this.loaded = true;
      }
    }
    console.info("Refreshing shown forms");
    setTimeout(() => {
      this.setForm();
    }, 20);
  }
  showPopup(popup: PopupDescription) {
    let el = this.$el.querySelector("#popup-details");
    popup.progress = parseFloat(popup.progress as any as string);

    if (!this.popupOpen) this.popup = {};
    this.popup = {
      mainTitle: sanitizeHtml(popup.mainTitle, sanitizeConf),
      subTitle: sanitizeHtml(popup.subTitle, sanitizeConf),
      details: sanitizeHtml((popup.details || "").replace(/\n/g, "<br/>"), sanitizeConf),
      detailsLabel: sanitizeHtml(popup.detailsLabel, sanitizeConf),
      popupShowDetailsBtn: popup.details ? popup.details.length > 0 : false,
      abortCommand: popup.abortCommand,
      dialogTitle: sanitizeHtml(popup.dialogTitle, sanitizeConf),
      image: popup.image,
      imageDetail: popup.imageDetail,
      progress: popup.progress,
      footer: sanitizeHtml(popup.footer, sanitizeConf),
    };
    if (el) el.scrollTop = el.scrollHeight;

    this.popupOpen = true;
    this.$modal.show("popup");
  }
  hidePopup() {
    this.popupOpen = false;
    this.$modal.hide("popup");
  }

  showModal(modal: any) {
    console.debug("Opening modal: ", modal.command);

    this.$intens.openModal.push(modal.command);
    console.debug("show modal", modal);
    switch (modal.command) {
      case "messagebox":
      case "error_msg":
      case "warning":
      case "information":
        this.$modal.show(
          MessageModal,
          { data: modal, answer: modal.command !== "ERROR" },
          { name: modal.command, width: "500px" }
        );
        break;
      case "confirm_cancel":
        this.$modal.show(ConfirmCancelModal, { data: modal }, { name: modal.command });
        break;
      case "confirm":
        this.$modal.show(ConfirmModal, { data: modal }, { name: modal.command });
        break;
      case "CycleDialog":
        this.$modal.show(CaseModal, { data: modal }, { name: modal.command });
        break;
      case "file_upload":
      case "file_open":
        this.$modal.show(FileUploadModal, { data: modal }, { name: modal.command, width: "400px" });
        break;
      case "getText":
        this.$modal.show(GetTextModal, { data: modal }, { name: modal.command });
        break;
      case "consistency_check":
        this.$modal.show(ConsistencyCheckModal, { data: modal }, { name: modal.command, width: "500px" });
        break;
      case "logout":
      case "error":
        this.$modal.show(
          AdministrationModal,
          { data: modal },
          { name: modal.command, resizable: false, draggable: false }
        );
        break;
      default:
        console.warn(`Unkown modal command: ${modal.command}`);
    }
  }

  closeModal(n = "") {
    let modalName = n || this.$intens.openModal[0];
    console.debug("Closing modal: ", modalName);
    this.$modal.hide(modalName);
    for (let i in this.$intens.openModal) {
      if (this.$intens.openModal[i] === modalName) {
        this.$intens.openModal.splice(Number(i), 1);
      }
    }
  }

  //@Watch("popupOpen")
  onPopupChange(newVal: boolean) {
    // Fetch new stuff/refresh state when the popup closes
    // This is required because sometimes it ignores the first request after a popup
    // By sending this harmless request, we can make sure the next request is received properly
    if (!newVal) this.custom("datapool", { method: "GET" });
  }

  async abort() {
    await this.abortProgressDialog();
    this.$intens.hidePopup();
  }

  isTabDisabled(form: in_proto.Form, name: string) {
    return Object.values(this.forms).reduce((a, b) => a || b.form.modal, false)
          ? Object.keys(this.forms).findLast(key => this.forms[key].form.modal) !== name
          : false
  }
}
</script>
<style lang="scss">
.window-tabs {
  min-width: max-content;
}
.a-tabs {
  color: black;
  cursor: default;
}
#intens-view.blurred {
  filter: blur(2px);
}
#intens-view {
  margin-top: 5px;
  padding: 0 0.5em;
  height: min-content;
  width: min-content;
}

.modal-subtitle {
  margin: 15px 0px 10px;
}

.progress-bar {
  width: 100%;
}

.modal-wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.leftGrid {
  grid-row: 1;
  grid-column: 1;
}

.rightGrid {
  grid-row: 1;
  grid-column: 2;
}

#popup-details {
  height: 200px;
  overflow-y: scroll;
  background: var(--main-color-light);
  border: 2px solid var(--border-color);
  font-size: 0.9em;
  padding: 3px;
  white-space: nowrap;
  font-family: monospace;
}
.footer {
  font-size: 1.1em;
  margin: 15px 0px 0px;
}
</style>
