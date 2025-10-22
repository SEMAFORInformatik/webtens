import Vuex from "vuex";
import Vue from "vue";
import { IntensResponseFolder } from "./dataTypes";

Vue.use(Vuex);

export interface StoreState {
  activeCycle: string;
  cycleList: string[];
  plotList: any;
  loading: boolean;
  clipboard: string | undefined;
  lastCompId: string | undefined;
  folderState: { [index: string]: IntensResponseFolder };
  elements: NodeListOf<Element> | null;
}

const onClickLoadingFunc = () => {};

const Vuexstore = new Vuex.Store<StoreState>({
  state: {
    activeCycle: "",
    cycleList: [],
    plotList: {},
    loading: false,
    clipboard: undefined,
    folderState: [],
    elements: null,
    lastCompId: undefined,
  },
  mutations: {
    setActiveCycle(state, cycle) {
      state.activeCycle = cycle;
    },
    setCycleList(state, list) {
      state.cycleList = list;
    },
    setCheckBoxList(state, payload) {
      if (!state.plotList[payload.name]) {
        state.plotList[payload.name] = {};
      }
      state.plotList[payload.name].checkBoxList = payload.list;
    },
    setLegend(state, payload) {
      state.plotList[payload.name].legend = payload.legend;
    },
    setRotation(state, payload) {
      state.plotList[payload.name].rotation = payload.rotation;
    },
    setSymbolSize(state, payload) {
      state.plotList[payload.name].symbolSize = payload.symbolSize;
    },
    setXTicks(state, payload) {
      state.plotList[payload.name].xTicks = payload.xTicks;
    },
    startLoading(state) {
      state.loading = true;
      let overlay = document.getElementById("loader-style")
      if (overlay) {
        overlay.innerHTML = "<style>*{cursor:wait!important;}</style>";
      }
    },
    finishLoading(state) {
      let overlay = document.getElementById("loader-style")
      overlay.innerHTML = "";

      state.loading = false;
    },
    setClipboard(state, newClipboard: string | undefined) {
      if (newClipboard) {
        navigator.clipboard?.writeText(newClipboard);
      }
    },
    getClipboard(state) {
      navigator.clipboard
        ?.readText()
        ?.then((text: string) => {
          state.clipboard = text;
        })
        ?.catch((e: any) => {
          console.error(e);
        });
    },
    setFolderState(state, newFolderState) {
      //console.debug("storing new folder state")
      state.folderState = newFolderState;
    },
    setLastCompId(state, id) {
      state.lastCompId = id;
    },
  },
  getters: {
    plotByName: (state) => (name: string) => {
      return state.plotList[name].checkBoxList;
    },
  },
});

export default Vuexstore;
