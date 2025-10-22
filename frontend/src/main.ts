import "./tracing";

import Vue from "vue";
import Intens from "./Intens";
import UiIds from "./compIds";
import AppWrapper from "./components/AppWrapper.vue";
import VueTabs from "vue-nav-tabs";
import VTooltip from "v-tooltip";
import Vuexstore from "./store";
import "vue-easytable/libs/theme-default/index.css";
import VueEasytable from "vue-easytable";
import VModal from "vue-js-modal";
import "./components/ui-elements/all";
import "./components/general/all";
import { getBackendUrl }from "./config";

import "./assets/main.scss";
import "./assets/reset.scss";
import "./assets/tooltips.scss";
import "./assets/tabs.scss";
import "./assets/modal.scss";

let vm: Vue;

//refresh cookie every hour
setInterval(() => {
  fetch(`${getBackendUrl}refresh`)
}, 60 * 60 * 1000);

window.webtensVersion = import.meta.env.VITE_GIT_COMMIT || "dirty"

// Install vuejs plugins
Vue.use(VueTabs);
Vue.use(VModal, {
  dynamic: true,
  dynamicDefaults: {
    clickToClose: false,
    draggable: ".modal-title",
    resizable: true,
    focusTrap: true,
    height: "auto",
  },
});
Vue.use(Intens, {
  namespace: `/sio/`,
  callback() {
    // Tell the app you are connected
    vm.$children[0].$data.connected = true;
  },
});
Vue.use(UiIds);
Vue.use({
  install(Vue) {
    Vue.prototype.$ctxMenu = {comp: null};
  },
})
Vue.use(VTooltip, {
  defaultHtml: false
});
Vue.use(VueEasytable);

// Create new vue instance, has to be after plugin installation
vm = new Vue({
  el: "#app",
  render: (h) => h(AppWrapper),
  store: Vuexstore,
});
