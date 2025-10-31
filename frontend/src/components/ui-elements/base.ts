import { Vue, Prop } from "vue-property-decorator";
import Component from "vue-class-component";
import otel, { Context } from "@opentelemetry/api";
import {
  ControlCommand,
  QueryCommand,
} from "../../dataTypes";
import { getBaseUrl } from "../../config";
import { in_proto } from "../../proto";

let scrollbarWidth = (() => {
  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
})()

// save currently active folder tabs
let folderTabsActive: { [key: string]: in_proto.WebAPIResponse.IFolderUpdate } = {};

const tracer = otel.trace.getTracer("gui-traces");


@Component
export default class BaseComponent extends Vue {
  @Prop() data!: any;
  @Prop() form!: in_proto.Form;

  prefixCssClass = (classes: string) => (classes && classes.split(" ").map(s => `in-c-${s}`).join(" ")) || "";
  intensClass = "";

  getForm() {
    console.debug("getForm", this.$root.$children[0].$children[0].$data.openForm);
    return this.form?.base?.Name;
  }

  getNewValueBase(data: any) {
    //@ts-ignore
    if (typeof this.getNewValue === "function" && typeof data !== "undefined") {
      //@ts-ignore
      this.getNewValue(data);
    }
  }

  /**
   *
   * @param action Action to execute (name)
   * @param name Name of the executor (this)
   * @param index Index in a list to execute it on
   * @param reason Reason for execution (example: "activate")
   * @param value Value to put in datapool
   * @param select_index Index of list entries to select
   * @param guielement Name of guielement e.g in lists
   */
  execute({
    action,
    name,
    index,
    reason,
    value,
    select_index,
    guielement,
    source,
    source2,
    x_pos,
    y_pos,
  }: {
    action?: string;
    name?: string;
    index?: number;
    reason?: string;
    value?: number | string;
    select_index?: number[] | string;
    guielement?: string;
    source?: string[] | string;
    source2?: string;
    x_pos?: number;
    y_pos?: number;
  } = {}) {
    if (action || this.data.action) {
      return this.custom("function", {
        name: action || this.data.action,
        this: name || this.data ? name || this.data.fullName || this.data.name : undefined,
        index,
        reason: reason ? reason : "input",
        value,
        select_index,
        guielement,
        source,
        source2,
        x_pos,
        y_pos,
        form_name: this.getForm(),
      });
    } else return Promise.resolve();
  }

  /**
   * Call the control method on intens
   *
   * @param {({command: ControlCommand, argument?: T, index?: number | string})}
   *  { command, argument, index } command to execute, arguments to the command, index of the element(used in lists)
   * @returns Fulfilled promise if successful, rejected if failed
   * @memberof BaseComponent
   */
  async control<T>({
    command,
    argument,
    index,
    form_name,
  }: {
    command: ControlCommand;
    argument?: T;
    index?: number | string;
    form_name: string;
  }) {
    await this.custom("control", { command, argument, index, form_name });
  }

  /**
   * Call the ProgressDialogAbortCommand method on intens
   *
   * @returns
   * @memberof BaseComponent
   */
  abortProgressDialog() {
    return this.$intens.customCtrl("ProgressDialogAbortCommand", {});
  }
  /**
   * call GUIELEMENT_METHOD
   *
   * @param {{name?: string, method: string, argument?: T}}
   *  { name, method, argument } Name of the gui element,
   *  method to call on it, arguments to the method
   * @returns Fulfilled promise if successful, rejected if failed
   * @memberof BaseComponent
   */
  async guiElementMethod<T>({
    name,
    method,
    argument,
  }: {
    name?: string;
    method: string;
    argument?: T;
  }, showLoading = true) {
    return this.custom("control", {
      command: "GUIELEMENT_METHOD",
      guielement: name || this.data.name,
      method,
      argument,
      form_name: this.getForm(),
    }, false, showLoading);
  }

  /**
   *
   *
   * @param {string} name Name of the datapool value
   * @param {(string | number)} value Value to set it to
   * @returns Fulfilled promise if successful, rejected if failed
   * @memberof BaseComponent
   */
  async setDatapool(name: string, value: string | number) {
    await this.custom("datapool", {
      method: "PUT",
      varname: name,
      data: value,
      form_name: this.getForm(),
    });
  }

  /**
   *
   * @param command The command to execute in intens
   * @param args other arguments to the command
   */
  async custom<T>(command: string, args: T, privileged: boolean = false, showLoading = true) {
    if (showLoading) this.$store.commit("startLoading");
    let response: in_proto.WebAPIResponse | in_proto.ElementList | {};
    try {
      response = await this.$intens.custom(command, args, privileged);
      this.getTracer().startActiveSpan("process-response", {}, response.context, async span => {
        const ctx = otel.trace.setSpan(
          otel.context.active(),
          span 
        )
        await this.processResponse(response as in_proto.WebAPIResponse, ctx, showLoading);
        span.end();
      })
    } catch ([ctx, e]) {
      this.getTracer().startActiveSpan("process-reject", {}, ctx, async span => {
        await this.processReject(e);
        span.end();
      })
    }
    return response;
  }
  async customFile(file: File, command: string) {
    this.$store.commit("startLoading");
    try {
      const response = await this.$intens.customFile(file, command)
      this.getTracer().startActiveSpan("process-response", {}, response.context, async span => {
        const ctx = otel.trace.setSpan(
          otel.context.active(),
          span 
        )
        await this.processResponse(response as in_proto.WebAPIResponse, ctx);
        span.end();
      });
    } catch ([ctx, e]) {
      this.getTracer().startActiveSpan("process-reject", {}, ctx, async span => {
        await this.processReject(e);
        span.end();
      })
    }
  }

  /**
   * Process a successful response (update values, open forms)
   *
   * @param r The response to process
   */
  async processResponse(r: in_proto.WebAPIResponse, ctx: Context, showLoading = true) {
    if (!r) {
      return;
    }


    this.$intens.hidePopup();
    if (r.folders) {
      folderTabsActive = {};
      for (let folder of r.folders) {
        folderTabsActive[folder.name] = folder;
      }
    }
    this.$store.commit("setCycleList", r.cycles || this.$store.state.cycleList);

    if (r.forms) {
      await new Promise<void>(async resolve => {
        this.getTracer().startActiveSpan("processFormChanges", {}, ctx, async span1 =>{
          await this.$intens.processFormChanges(r.forms, r.topForm);
          span1.end();
          resolve();
        });
      });
    }

    if (r.elements) {
      this.getTracer().startActiveSpan("processElementUpdates", {}, ctx, span2 => {
        for (const ele of r.elements.menuButtons) {
          this.$intens.uiEles[ele.base.id] = ele
        }
        this.$ids.processElementUpdates(r.elements);
        span2.end();
      })
    }

    if (r.folders) {
      const span3 = this.getTracer().startSpan("processFolderUpdates", {}, ctx)
      this.$ids.processFolderUpdates(r.folders);
      span3.end();
    }

    if (r.function) {
      //console.debug(r.function)
      this.$ids.processFunctionStatus(r.function);
      if (
        !r.function.exit &&
          r.function.status != "OK" &&
          r.function.status != "NOK" &&
          r.function.status != "ABORTED"
      ) {
        this.$intens.showModal({
          command: "error_msg",
          title: "Internal error: " + r.function.status,
          message: r.function.message || "Look at Log Window for details.",
        });
      } else if (r.function.openUrl) {
        console.info("Opening external url", r.function.openUrl);
        window.open(r.function.openUrl, "_blank").focus();
      }
    }
    if (r.clipboard) {
      this.$store.commit("setClipboard", r.clipboard);
    }

    if (r.formsReplaced?.length) {
      r.formsReplaced.forEach(form => this.$intens.addForm(form, true))
    }
    // replace with resolve() as soon as icon isnt needed anymore in response
    if (showLoading) this.$store.commit("finishLoading");
  }

  /**
   * Process a rejected response (log into console, show popups/modals if any and pass to caller).
   *
   * @param r The rejected response
   */
  async processReject(r: [{ status: string; message: string }]) {
    if (!r[0]) {
      console.error("Unknown reject response", r);
      return;
    }
    console.info(`${r[0].status}:`);
    console.debug(r);
    try {
      this.$intens.clearQueue();
      // interal (intens) error
      if (r[0].status === "ERROR") {
        this.$intens.showModal(
          {
            command: "error_msg",
            title: "Internal error:",
            message: r[0].message || "Look at Log Window for details.",
          }
        );
        return;
      }
      let message: QueryCommand = JSON.parse(r[0].message);
      console.info(message);
      switch (message.command) {
        case "messagebox":
        case "information":
        case "confirm":
        case "confirm_cancel":
        case "warning":
        case "getText":
          this.$intens.showModal(message);
          break;
        case "consistency_check":
          this.$intens.showModal(message);
          if (this.$refs.inputElement instanceof HTMLInputElement) {
            this.$refs.inputElement.blur();
          }
          break;
        case "file_url":
          const url = message.fileURL;
          setTimeout(() => window.open(url, "_blank"), 500);
          await this.custom("save_answer", { status: "received" }, true);
          this.$store.commit("finishLoading");
          break;
        case "file_open":
          this.$intens.showModal(message);
          break;
        case "getClipboard":
          try {
            const clipboard = await navigator.clipboard.readText();
            await this.custom("clipboard", { clipboard }, true);
          } catch (e) {
            // empty clipboard answer is messagebox answer
            this.$intens.showModal({
              command: "information",
              title: "Clipboard error",
              message: "Could not get clipboard contents. Please check your browser permission settings."
            });
          }
          break;
        default:
          console.warn(`Cannot show modal for command ${(message as any).command}. Not implemeted.`);
          break;
      }
    } catch (e) {
      console.error("Data DataLen: ", r[0].message.length);
      console.error("error: ", e);
      let posA = this.$intens.title.indexOf("@") + 1;
      let posE = this.$intens.title.indexOf("(");
      let fileSave = JSON.parse(r[0].message);
      this.$intens.showModal({
        command: "error_msg",
        title: "Internal error: Please copy manually:",
        message:
        '<p style="white-space: nowrap;">docker cp ' +
          this.$intens.title.substring(posA, posE) +
          ":/opt/app/" +
          fileSave.basename ||
          "" + ".</p><br/>" + r[0].message.substring(0, 500) ||
          "Please login again to create a new session.",
      });
    }
    this.$store.commit("finishLoading");
  }

  getElementData(ref: in_proto.IElementRef) {
    if (!ref) return
    const ele = this.$intens.uiEles[ref.id];
    if (!ele) console.warn("Element not found", this, ref)
    return ele || {}
  }

  typeToString(type: in_proto.GuiElement.Type): string {
    switch (type) {
      case in_proto.GuiElement.Type.EPlot2D:
        return "Plot2D"
      case in_proto.GuiElement.Type.EPlot3D:
        return "Plot3D"
      case in_proto.GuiElement.Type.EButtonbar:
        return "Buttonbar"
      case in_proto.GuiElement.Type.EButton:
        return "Button"
      case in_proto.GuiElement.Type.EComboBox:
        return "ComboBox"
      case in_proto.GuiElement.Type.EContainer:
        return "Container"
      case in_proto.GuiElement.Type.EDiagram:
        return "Diagram"
      case in_proto.GuiElement.Type.EFieldGroup:
        return "FieldGroup"
      case in_proto.GuiElement.Type.EFolder:
        return "Folder"
      case in_proto.GuiElement.Type.EForm:
        return "Form"
      case in_proto.GuiElement.Type.EHeader:
        return "Header"
      case in_proto.GuiElement.Type.EIconView:
        return "IconView"
      case in_proto.GuiElement.Type.EIndex:
        return "Index"
      case in_proto.GuiElement.Type.EIndexMenu:
        return "IndexMenu"
      case in_proto.GuiElement.Type.ELabel:
        return "Label"
      case in_proto.GuiElement.Type.EList:
        return "List"
      case in_proto.GuiElement.Type.EMenubar:
        return "Menubar"
      case in_proto.GuiElement.Type.EMenuButton:
        return "MenuButton"
      case in_proto.GuiElement.Type.EMessagebar:
        return "Messagebar"
      case in_proto.GuiElement.Type.EMessage:
        return "Message"
      case in_proto.GuiElement.Type.ENavigator:
        return "Navigator"
      case in_proto.GuiElement.Type.ENavigatorNode:
        return "NavigatorNode"
      case in_proto.GuiElement.Type.EPixmap:
        return "Pixmap"
      case in_proto.GuiElement.Type.ERadio:
        return "Radio"
      case in_proto.GuiElement.Type.EScrolledText:
        return "ScrolledText"
      case in_proto.GuiElement.Type.ESeparator:
        return "Separator"
      case in_proto.GuiElement.Type.ESlider:
        return "Slider"
      case in_proto.GuiElement.Type.EStretch:
        return "Stretch"
      case in_proto.GuiElement.Type.ETable:
        return "Table"
      case in_proto.GuiElement.Type.EText:
        return "Text"
      case in_proto.GuiElement.Type.ETextfield:
        return "Textfield"
      case in_proto.GuiElement.Type.EThermo:
        return "Thermo"
      case in_proto.GuiElement.Type.EToggle:
        return "Toggle"
      case in_proto.GuiElement.Type.EVoid:
        return "Void"
      case in_proto.GuiElement.Type.EFieldGroupLine:
        return "FieldGroupLine"
      case in_proto.GuiElement.Type.EPulldownMenu:
        return "PulldownMenu"
      case in_proto.GuiElement.Type.EMenuToggle:
        return "MenuToggle"
      case in_proto.GuiElement.Type.ECycleButton:
        return "Cycle_Button"
    }
  }
  getCompId = ele => ele.id || ele.base?.id || ele.base?.base?.id || ele.field?.base?.id;

  /**
   * Get active folder tab.
   *
   * @param key folder name
   */
  getActiveFolderTab(key: string) {
    if (folderTabsActive[key]) {
      return folderTabsActive[key].active;
    }
    return -1;
  }
  getBaseUrl() {
    return getBaseUrl();
  }
  getScrollbarWidth() {
    return scrollbarWidth;
  }
  getTracer() {
    return tracer;
  }
  destroyed() {
    this.$ids.removeComponent(this);
  }

  isComponentInFocus(event: KeyboardEvent) {
    console.debug("isComponentInFocus base.ts", this.data.id, this.$store.state.lastCompId);
    return document.activeElement?.tagName !== "INPUT" && this.$store.state.lastCompId === this.data.id;
  }
}
