import ZMQ from "./wzmq";
import SocketIO from "socket.io-client";
import Vue, { PluginObject } from "vue";
import { VueConstructor } from "vue/types/vue";
import { FormDescription } from "./dataTypes";
import { getBackendUrl } from "./config";
/**
 * Class to send command to intens
 *
 * @class Intens
 */
export class Intens {
  private readonly zmq: ZMQ;
  private readonly zmqCtrl: ZMQ;
  openModal: string[] = [];
  openForms: { [key: string]: FormDescription } = {};
  uiEles: { [key: string]: any} = {};
  currentForm: string = "";
  // Array of forms added since last reload
  // Array of forms removed since last reload
  private removedForms: string[];
  title = "";

  /**
   * Creates an instance of Intens.
   * @memberof Intens
   */
  constructor(zmq: ZMQ, zmqCtrl: ZMQ) {
    this.zmq = zmq;
    this.zmq.intens = this;
    this.zmqCtrl = zmqCtrl;
    this.zmqCtrl.intens = this;
    this.removedForms = [];
  }

  /**
   * Execute a custom response.
   *
   * @param {string} command Which intens command should be executed
   * @param {map} params Additional params to send with
   * @returns Promise that fulfills with the response from intens
   * @memberof Intens
   */
  custom<T>(command: string, params: T, privileged: boolean = false) {
    console.info(`Sending ${command} request with data:\n${JSON.stringify(params)}`);
    return this.zmq.send(command, params, privileged);
  }
  customCtrl<T>(command: string, params: T, privileged: boolean = true) {
    console.info(`Sending ${command} requestCtrl with data:\n${JSON.stringify(params)}`);
    return this.zmqCtrl.send(command, params, privileged, "zmqCtrl");
  }
  customFile(file: File, command: string) {
    console.info(`Sending file request with data of size:\n${file.size}`);
    return this.zmq.sendFile(file, command);
  }

  clearQueue() {
    this.zmq.worker()
  }

  /**
   * Fetch a form
   *
   * @param {string} name Name of the form
   * @returns Promise that fulfills with the form content
   * @memberof Intens
   */
  async getUI(name: string) {
    this.loadStatus("Getting main form", 25, 100)
    let x = await this.zmq.send(
      "uimanager",
      {
        name: name,
        type: "PROTO",
      },
      false
    )
    this.loadStatus("Done", 100, 100);

    return x;
  }

  /**
   *
   * Show a popup containing text, progress and an SVG image
   *
   * @memberof Intens
   */
  showPopup(
    popup:
    {
      dialogTitle?: string;
      mainTitle?: string;
      subTitle?: string;
      image?: string;
      imageDetail?: string;
      progress?: number | string;
      details?: string;
      detailsLabel?: string;
      abortCommand?: boolean;
      footer?: string;
    }
  ): void {
    console.warn("showPopup called before re-assignment with params", popup);
  }

  /**
   * Hide the currently shown popup
   *
   * @memberof Intens
   */
  hidePopup(): void {
    console.warn("hidePopup called before re-assignment")
  }
  /**
   * Show a modal
   *
   * @param {*} modal
   * @param {*} [resolve] Optional resolve. Gets resolved when modal finishes successfully
   * @param {*} [reject] Optional reject. Gets rejected when modal fails
   * @memberof Intens
   */
  showModal(modal: any, resolve?: Function, reject?: Function): void {
    console.warn("showModal called before re-assignment with param", modal, resolve);
    reject()
  }
  /**
   * Close a modal
   *
   * @param n Optional name of modal to close
   */
  closeModal(n?: string): void {
    console.warn("closeModal called before re-assignment with param", n);
  }
  /**
   * Refresh what forms are shown in the frontend
   *
   * @memberof Intens
   */
  refreshForms() {
    console.warn("refreshForms called before re-assignment")
  }

  setForm() {
    console.warn("setForm called before re-assignment")
  }

  loadStatus(status: string, progress: number, max: number) {
    console.warn("loadStatus called before re-assignment", status, progress, max)
  }

  /**
   * Open/Close forms based on list of open forms
   *
   * @param {string[]} forms List containing the names of the open forms
   * @memberof Intens
   */
  async processFormChanges(forms: string[], form_top_name: string) {
    //console.debug("processFormChanges", "forms", forms, "form_top_name", form_top_name)
    if (!forms) return;
    // delete top form, new added form is on top
    if (forms.includes(form_top_name)) {
      //console.debug("processFormChanges good", "forms", forms, "form_top_name", form_top_name)
      this.currentForm = form_top_name;
      this.setForm();
    }
    //this.setForm()
    // Add new forms
    for (let form of forms) {
      try {
        await this.addForm(form);
      } catch (e) {
        this.showModal({
          command: "error",
          title: "Error receiving forms",
          message: "There was an unexpected issue when trying to get the UI of the application!"
        })
      }
    }

    // Remove closed forms
    for (let name in this.openForms) {
      if (!this.openForms[name]) continue;

      // If the form is no longer open
      if (!forms.reduce((a, e) => a || e === name, false)) {
        this.removedForms.push(name);
      }
    }

    for (let i of this.removedForms) {
      Vue.delete(this.openForms, i);
    }
    this.removedForms = [];
  }

  /**
   * Get the form with the request name and open it
   *
   * @param {string} name Name of the form to open
   * @memberof Intens
   */
  async addForm(name: string, refresh: boolean = false) {
    if (!this.openForms[name] || refresh) {
      console.info("Adding form: " + name);
      // Fetch the form data
      let r = await this.getUI(name)
      console.info("Added form : " + name);

      console.debug("addForm 207", "openForms", this.openForms, "name", name, "r[name]", r[name]);
      this.uiEles =  {...this.uiEles, ...r.elements}
      let updateIndex = this.openForms[name]?.updateIndex + 1 || 0
      Vue.set(this.openForms, name, {form: r.formInfo, updateIndex});
    }
  }
}

const plugin: PluginObject<{ namespace: string; callback: Function }> = {
  install(Vue: VueConstructor<Vue>, args) {
    if (!args) throw new Error("No arguments given to Intens");
    let basepath = window.location.pathname.split("/")[1];
    console.debug("basepath", basepath);
    let sockiopath = "/socket.io";
    if (basepath != "ui") {
      sockiopath = `/${basepath}/socket.io`;
    }
    console.debug(`SocketIO path: ${sockiopath}`);
    const { namespace, callback } = args;
    // include domain if client is on a diffrent url (used for development)
    console.debug("location.host", location.host);
    console.debug("getBackendUrl.host", getBackendUrl.host);
    const url = `${location.host != getBackendUrl.host ? getBackendUrl.origin : ""}${namespace}`;
    console.debug("url", url);
    console.debug("getBackendUrl", getBackendUrl);
    // if we got the alt query we pass this to socket.io
    let sio = SocketIO(url, {
      path: sockiopath,
      transports: ["websocket"],
      reconnection: true,
      reconnectionDelay: 500,
      reconnectionAttempts: 10,
      query: {
        alternatives: new URLSearchParams(window.location.search).get("alt") !== null,
        utcOffset: new Date().getTimezoneOffset() * -1
      }
    });
    console.info(`Connect websocket `, url);
    console.info("sio", sio);
    let zmq: ZMQ = new ZMQ(sio);
    let zmqCtrl: ZMQ = new ZMQ(sio);
    Vue.prototype.$intens = new Intens(zmq, zmqCtrl);
    sio.on("connect", () => {
      sio.on("server_ready", () => {
        console.info("Connected to backend, url: " + url);
        // Get the entire datapool structure
        callback();
      })
    });
  },
};

export default plugin;
