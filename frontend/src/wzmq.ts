import { Intens } from "./Intens";
import type { Event, ResponseWithID, IntensResponse, QueueState } from "./dataTypes";
import * as SocketIOClient from "socket.io-client";
import otel from "@opentelemetry/api";
import { getRequestAttributes } from "./tracing";
import { getBaseUrl } from "./config"
import { in_proto } from "./proto";
interface EventFile  {
  data: File,
  resolve: Function,
  reject: Function,
}

const tracer = otel.trace.getTracer("zmq-traces");
let refreshBlock = false;

/**
 * Interface between frontend and backend.
 * Webtens <=> Backend Server <=> Intens
 *
 * @class ZMQ
 **/
export default class ZMQ {
  private readonly sio: SocketIOClient.Socket;
  responseQueue: { [key: string]: any };
  messageQueue: any = [];
  requestCounter = 0;
  intens!: Intens;
  state: QueueState = "Idle";
  dequeuing: boolean = false;
  processInstantly: { enabled: boolean, event?: EventFile } = {
    enabled: false,
    event: null,
  } // process the next received messaged instantly

  /**
   * Creates an instance of the backend connector
   * @param {SocketIOClient.Socket} sio Socket.io client instance
   * @memberof ZMQ
   */
  constructor(sio: SocketIOClient.Socket) {
    this.sio = sio;
    this.responseQueue = {};
    console.info("constructing")

    // Call different methods depending on header sent over websocket
    this.sio.on("message", (id, r: ResponseWithID) => this.messageReceive(id, r));
    this.sio.on("progress", (r: [string, string]) => this.progressReceive(r));
    this.sio.on("loadStatus", ({message}) => {
      this.intens.loadStatus(message, 0, 0);
    })
    this.sio.on("error", (r: { message: string; title: string }) => this.errormessageReceive(r));
    this.sio.on("token-refresh", async () => {
      if (!refreshBlock) {
        refreshBlock = true;
        return
      }
      const reply = await fetch(`${getBaseUrl()}/oidc-refresh`, { method: "POST" })
      if (reply.status === 400) {
        this.intens.showPopup({
          dialogTitle: "Session expired",
          subTitle: `Your session has expired. Please refresh the page and log in again.`
        })
        return
      }
      const token = await reply.text()
      refreshBlock = false;
      this.sio.emit("token-refresh", token)
    });
  }

  worker() {
    this.dequeuing = true;
    for (let _ in this.messageQueue) {
      setTimeout(() => this.dequeue(), 2);
    }
    this.dequeuing = false;
    return !!this.messageQueue.length;
  }

  enqueue(promise: any) {
    return new Promise((resolve, reject) => {
      this.messageQueue.push({
        promise,
        resolve,
        reject,
      });
    });
  }

  enqueuePrivileged(promise: any) {
    return new Promise((resolve, reject) => {
      this.messageQueue.unshift({
        promise,
        resolve,
        reject,
      });
      this.state = "Idle";
      if (!this.dequeuing) {
        this.worker();
      }
    });
  }

  dequeue() {
    if (this.state !== "Idle") {
      return false;
    }
    const item = this.messageQueue.shift();
    if (!item) {
      return false;
    }
    try {
      item
        .promise()
        .then((value: any) => {
          item.resolve(value);
        })
        .catch((err: any) => {
          item.reject(err);
        });
    } catch (err) {
      item.reject(err);
    }
    return true;
  }

  parseProtoData(data: ArrayBuffer, replyType: "WEBAPI" | "FORM"): in_proto.WebAPIResponse | in_proto.ElementList | {} {
    if (!data) return {};
    try {
      console.log(data)
      switch (replyType) {
        case "WEBAPI":
          const result = in_proto.WebAPIResponse.decode(new Uint8Array(data.slice(0, data.byteLength - 1)))
          console.log(result)
          return result
        case "FORM":
          // flatten the list of elements
          const elementList = in_proto.ElementList.decode(new Uint8Array(data.slice(0, data.byteLength - 1)));
          console.log(elementList)
          const allEles = Object.values(elementList).flat(1);
          const getId = ele => ele.id || ele.base?.id || ele.base?.base?.id || ele.field?.base?.id;
          const assignedEles = {}
          allEles.forEach(c => assignedEles[getId(c)] = c)
          return { elements: assignedEles, formInfo: elementList.forms[0]}
      }
    } catch (_) {
      const result = in_proto.WebAPIResponse.decode(new Uint8Array(data.slice(0, data.byteLength - 1)))
      console.log(result)
      return result
    }
  }

  /**
   * Gets called when a message is received
   *
   * @param {ResponseWithID} r The message with its associated request id
   * @memberof ZMQ
   */
  async messageReceive(id: any, r: ResponseWithID): Promise<void> {
    console.debug("receiveing message", r)
    console.timeEnd(r.id)

    if(this.processInstantly.enabled) {
      this.processInstantly.enabled = false
      const context = otel.propagation.extract(otel.context.active(), id);
      if (r.response[0]?.status == "OK") {
        const nonProtoData = r.response[0].protoIndex === 2 ? 1 : -1;
        this.processInstantly.event.resolve({
          ...r.response[nonProtoData],
          ...this.parseProtoData(r.response[r.response[0].protoIndex], r.response[0].protoReplyType),
          context
        });
      } else {
        this.processInstantly.event.reject([context, r.response]);
      }
      this.state = r.response[0]?.status == "Query" ? "Query" : "Idle";

      if (!this.dequeuing) {
        this.worker();
      }
      this.state = "Idle";  /// 2022-09-14 amg: denke hier muss es Idle sein
      return
    }

    this.state = "Receiving";
    if (!this.responseQueue[r.id]) return;

    const context = otel.propagation.extract(otel.context.active(), id);
    if (r.response[0]?.status == "OK") {
      const context = otel.propagation.extract(otel.context.active(), id);
      if (r.response[0]?.status == "OK") {
        const nonProtoData = r.response[0].protoIndex === 2 ? 1 : -1;
        this.responseQueue[r.id].resolve({
          ...r.response[nonProtoData],
          ...this.parseProtoData(r.response[r.response[0].protoIndex], r.response[0].protoReplyType),
          context
        });
      }
    } else {
      this.responseQueue[r.id].reject([context, r.response]);
    }
    delete this.responseQueue[r.id];
    this.state = r.response[0]?.status == "Query" ? "Query" : "Idle";

    if (!this.dequeuing) {
      this.worker();
    }
  }

  /**
   * Gets called when a progress message from intens arrives
   *
   * @param {[string, string]} r [Message type, Progress data]
   * @memberof ZMQ
   */
  progressReceive(r: [string, string]): void {
    this.state = "Receiving";
    let data = JSON.parse(r[1]);

    let dialogTitle = data.ProgressDialog.WindowTitle ? data.ProgressDialog.WindowTitle[0] : "Dialog ProgressBar";
    let mainTitle = data.ProgressDialog.MainTitle ? data.ProgressDialog.MainTitle[0] : "";
    let subTitle = data.ProgressDialog.SubTitle ? data.ProgressDialog.SubTitle[0] : "";
    let image = typeof data.ProgressDialogPixmap === "string" ? data.ProgressDialogPixmap : "";
    let imageDetail = typeof data.ProgressDialogDetailPixmap === "string" ? data.ProgressDialogDetailPixmap : "";
    let progress = data.ProgressDialog.MainPercent ? data.ProgressDialog.MainPercent[0] : "";
    let footer = data.ProgressDialog.MainFooter ? data.ProgressDialog.MainFooter[0] : "";
    let details = data.ProgressDialog.Data ? data.ProgressDialog.Data[0] : "";
    let detailsLabel = data.ProgressDialog.DataLabel ? data.ProgressDialog.DataLabel[0] : "";
    let abortCommand = typeof data.ProgressDialogAbortCommand === "string" && data.ProgressDialogAbortCommand.length;
    this.intens.showPopup({
      dialogTitle,
      mainTitle,
      subTitle,
      image,
      imageDetail,
      progress,
      details,
      detailsLabel,
      abortCommand,
      footer,
    });
    this.state = "Idle";
  }

  /**
   * When an error happens, it lands here
   *
   * @param {{ message: string }} { message } Object containing a message
   * @memberof ZMQ
   */
  errormessageReceive({ message, title }: { message: string; title: string }): void {
    console.warn(`Error received: ${message}`);
    this.state = "Receiving";
    this.intens.showModal({
      command: "error",
      title: title || "Internal Error!",
      message,
    });
    this.state = "Idle";
  }

  /**
   * Try to send the data
   *
   * @param {Object} event data to send
   * @returns {Promise} fulfilled if the request is successful
   **/
  trySend<T>(event: Event<T>, socketName: string = "zmq") {
    console.time(event.data.id)
    return new Promise<IntensResponse>((resolve, reject) => {
      if (this.state !== "Idle") {
        console.info("Current State: ", this.state);
      }
      if (!this.sio.connected) {
        console.warn("Not connected");
        return;
      }
      const context = otel.propagation.extract(otel.context.active(), event.data.context);
      tracer.startActiveSpan("send zmq", {}, context, span => {
        span.setAttribute("intens.command", event.data.message.name);
        span.setAttributes(getRequestAttributes(event.data.message.body))
        const id = {}
        otel.propagation.inject(otel.context.active(), id);
        this.responseQueue[event.data.id] = event;
        this.sio.emit(socketName, id, event.data);
        ///      this.sio.emit("zmq", event.data);
        this.state = "Sending";
        span.end();
      })
    });
  }

  /**
   * Construct a event and send a request to femag
   *
   * @param name Name of the call
   * @param body call data
   * @returns Answer sent from intens
   */
  send<T>(name: string, body: T, privileged: boolean, socketName: string = "zmq"): Promise<in_proto.WebAPIResponse | in_proto.ElementList | {}> {
    return new Promise<in_proto.WebAPIResponse | in_proto.ElementList | {}>((resolve, reject) => {
      const context = {};
      otel.propagation.inject(otel.context.active(), context);
      const event: Event<T> = {
        data: { id: this.requestCounter++, context, message: { name, body } },
        resolve: resolve,
        reject: reject,
      };
      if (privileged) {
        this.enqueuePrivileged(() => this.trySend(event, socketName));
      } else {
        this.enqueue(() => this.trySend(event));
      }
      if (!this.dequeuing) {
        this.worker();
      }
    });
  }
  sendFile(file: File, command: string) {
      return new Promise<in_proto.WebAPIResponse | in_proto.ElementList | {}>((resolve, reject) => {
      const socketName = "zmq";
      if (this.state !== "Idle") {
        console.info("Current State (File): ", this.state);
      }
      if (!this.sio.connected) {
        console.warn("Not connected");
        return;
      }
      const eventFile: EventFile = {
        data: file,
        resolve: resolve,
        reject: reject,
      }
      this.processInstantly.enabled = true
      this.processInstantly.event = eventFile
      const id = {}
      otel.propagation.inject(otel.context.active(), id);
      console.debug("sendFile called with file.type", file.type);
      if (file.type == "application/gzip" || file.type == "application/zip" || file.type == "application/x-gzip") {
        // all binary data
        this.sio.emit(socketName, id, eventFile.data);
      } else {
        this.sio.emit(socketName, id, ["data:filename/"+file.name.replace(',', '_') , eventFile.data]);
      }
      console.debug("send file")
      this.state = "Sending";
    });
  }
}
