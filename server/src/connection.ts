import otel, { SpanStatusCode, SpanKind, ROOT_CONTEXT } from "@opentelemetry/api";
import * as zmq from "zeromq"
import Fs from "fs/promises"
import MainLogger from "./logger";
import SocketIO from "socket.io";
import config from "./config";
import pino from "pino";
import IntensInstance from "./intensInstances";
import { tracer, intensTracer } from "./tracing";
import { MeterProvider } from "@opentelemetry/sdk-metrics"
import { PrometheusExporter } from "@opentelemetry/exporter-prometheus"

interface IntensMetaData {
  status: string
  message: string
  protoIndex?: number
  protoReplyType?: string
}

const exporter = new PrometheusExporter();
const meterProvider = new MeterProvider({
  readers: [exporter]
})

const meter = meterProvider.getMeter("webtens")
const currentRequestCounter = meter.createObservableGauge("in_progress_requests", {
  description: "Number of requests in progress"
});
currentRequestCounter.addCallback(result => {
  const instances = Object.values(requesting).filter(Boolean).length
  result.observe(instances, { intensApp: config.containerType })
})

const connectionCounter = meter.createObservableGauge("connected_clients", {
  description: "Number of connected clients"
});

const requestCounter = meter.createCounter("requests_count", {
  description: "Total number of requests",
});

const statusMessages = {
  node_not_ready: "Preparing server resources",
  pulling_image: "Installing application"
}

let queryingInstances = [];
let requesting = {}
let ctrlRequesting = {}


const requestFunc = async (socket: SocketIO.Socket, username: string, sessionID: string, Logger: pino.Logger, zmqSocket: zmq.Request, request: any, propagateTraces = true) => {
  Logger.info({ requestID: request.id, requestType: request?.message?.name }, `sending request`)
  requestCounter.add(1, { username });
  let rawResponse: Buffer[] = []
  const span1 = tracer.startSpan("request intens", { kind: SpanKind.CLIENT })
  span1.setAttribute("peer.service", "intens")

  await intensTracer.startActiveSpan("process intens", { kind: SpanKind.SERVER }, async intensSpan => {
    intensSpan.setAttribute("peer.service", "webtens")

    if (request?.message?.name) {
      await intensTracer.startActiveSpan("execute request", { kind: SpanKind.CLIENT }, async requestSpan => {
        if (config.otel && !queryingInstances[sessionID] && propagateTraces) {
          const metadata = {};
          otel.propagation.inject(otel.context.active(), metadata);

          await zmqSocket.send([
            "datapool",
            JSON.stringify({ method: "PUT", varname: "OPENTELEMETRY_METADATA_IN", data: JSON.stringify(metadata) })
          ])
          await zmqSocket.receive()
        }

        await zmqSocket.send([
          request.message.name,
          JSON.stringify(request.message.body)
        ])
        requestSpan.end()
      })
    } else {
      span1.addEvent("sending file")
      await zmqSocket.send([
        request
      ])
    }

    rawResponse = await zmqSocket.receive();
    intensSpan.end();
  })
  const response: any[] = [];
  span1.end()

  Logger.info({ requestID: request.id }, `received response from intens`)
  let lastIndex = 0;

  const meta: IntensMetaData = JSON.parse(rawResponse[0].toString());
  const isQuery = meta.status === "Query";

  if (meta.protoIndex) {
    response[meta.protoIndex] = rawResponse[meta.protoIndex];
  }
  if (meta.protoIndex !== 1) {
    if (rawResponse[1].toString().startsWith("{")) {
      response[1] = JSON.parse(rawResponse[1].toString());
    } else {
      response[1] = rawResponse[1]
      meta.protoIndex = 1;
    }
  }
  response[0] = meta;

  queryingInstances[sessionID] = isQuery;

  // Parse the response as json

  let isFile = false;

  if (isQuery) {
    // Use json-stream parser
    const message = JSON.parse(response[0].message);
    if (message.command === "file_save") {
      const span3 = tracer.startSpan("save file")
      const fileName = (message.basename as string).replace(/\//g, "_").replace(/%/g, "-");

      const fileURL = await new Promise(async resolve => {
        await Fs.mkdir(`/tmp/userfiles/${username}`, { recursive: true });
        const length = rawResponse[lastIndex + 1].buffer.byteLength;
        await Fs.writeFile(`/tmp/userfiles/${username}/${fileName}`,
          // Remove last byte because intens adds a space to the end of buffers and gzip doesn't like this
          Buffer.from(rawResponse[lastIndex + 1].slice(0, length - 1))
        );
        const fileNameEscaped = encodeURIComponent(fileName);
        resolve(`${config.baseURL}/userfiles/${username}/${fileNameEscaped}`);
      });

      span3.end();
      isFile = true;
      const id = {}
      otel.propagation.inject(otel.context.active(), id);
      socket.send(id, { id: request.id, response: [{ status: "Query", message: JSON.stringify({ command: "file_url", fileURL }) }] })
    }
  }
  if (!isFile) {
    const id = {}
    otel.propagation.inject(otel.context.active(), id);
    socket.send(id, { id: request.id, response })
  }
}

const getJwt = async (cookie: any): Promise<string> => {
  return (await fetch(`http://localhost:8000${config.basePath}/oidc-session`, { headers: { cookie } })).text()
}

export default (ioServer: SocketIO.Server, io: SocketIO.Namespace) => {
  connectionCounter.addCallback(result => {
    result.observe(ioServer.engine.clientsCount, { intensApp: config.containerType })
  })
  io.on("connection", async socket => {
    const useAlternatives = !!(config.intensAppAlternativeValues && socket.handshake.query.alternatives === "true")
    const utcOffset = Number(socket.handshake.query.utcOffset);
    let username: string;
    let token: string;
    let sessionID: string;
    let expiry: number;
    let tokenRefreshed = false;

    if (config.oidc) {
      token = await getJwt(socket.handshake.headers.cookie);
      const claims = JSON.parse(atob(token.split(".")[1]))
      expiry = claims.exp;
      username = claims.preferred_username;
      sessionID = claims.sid;
    } else {
      username = (socket.request as any).session.username
      sessionID = (socket.request as any).sessionID
    }

    const Logger = MainLogger.child({ username, socketID: socket.id, sessionID })
    Logger.info(`websocket connected`);

    let intensReqSocket: zmq.Request;
    let intensSubSocket: zmq.Subscriber;
    let intensReqCtrlSocket: zmq.Request;

    tracer.startActiveSpan("client connect", async conSpan => {
      conSpan.setAttribute("session", sessionID);
      if (!username) {
        Logger.error("no username found", { token });
        conSpan.setAttribute("variables.isOIDC", !!config.oidc)
        conSpan.setAttribute("variables.cookies", socket.handshake.headers.cookie)
        socket.disconnect();
        return;
      }

      let instance = new IntensInstance(sessionID, useAlternatives, utcOffset);
      let ip: string = null;
      let loggedInUser: string = null;
      try {
        const dataGen = instance.getData();
        // check dataGen until it's finished
        while (socket.connected) {
          const response = await dataGen.next();
          if (response.done) {
            ({ ip, username: loggedInUser } = response.value);
            break;
          }
          const status = response.value.status;
          socket.emit("loadStatus", {
            message: statusMessages[status]
          })
        }

        // If during the wait, the user disconnected, clean up the instance again
        if (!socket.connected && !loggedInUser) {
          instance.release();
          return;
        }
      } catch (e) {
        Logger.error(`Failed to get intens instance. Returned error ${e}`)
        socket.emit("error", {
          title: "Config-service Error",
          message: "An error happened on the server. Please try again later."
        });
        socket.disconnect();
        conSpan.recordException(e);
        conSpan.setStatus({ code: SpanStatusCode.ERROR, message: "Config service couldn't be reached." })
        conSpan.end();
        return;
      }

      // If no instance was found assigned to this user, disconnect and return.
      if (!ip) {
        socket.emit("error", {
          title: "No instance found",
          message: `Your Intens instance wasn't found. Please log out and try again!`
        });
        socket.disconnect();
        conSpan.setStatus({ code: SpanStatusCode.ERROR, message: "No intens instance found" })
        conSpan.end();
        return;
      }

      // this only can happen if you are logged in via oauth but the job is not running yet
      // generally caused by logging into an application on the same domain before using another one
      //
      // in non-oauth usage this situation only occurs if an instance is manually deleted while in use
      // because making this login work there too would require us storing the password in memory/redis for the user
      // and in production this doesn't happen, this is only implemented for oauth
      if (config.oidc && !loggedInUser) {
        await instance.login("__token__", token, "en-US");
        await instance.addLabels({ username, sessionID })
        tokenRefreshed = true;
      }

      intensReqSocket = new zmq.Request;
      intensSubSocket = new zmq.Subscriber;
      intensReqCtrlSocket = new zmq.Request;

      intensReqSocket.linger = 0;
      intensReqCtrlSocket.linger = 0;

      intensReqSocket.connect(`tcp://${ip}:${config.INTENS_REQ_PORT}`)
      intensSubSocket.connect(`tcp://${ip}:${config.INTENS_SUB_PORT}`)
      intensReqCtrlSocket.connect(`tcp://${ip}:${config.INTENS_REQ_CTRL_PORT}`)

      intensSubSocket.subscribe("")

      const subscriberThread = async () => {
        // Have subscribe socket wait for messages
        for await (const [topic, message] of intensSubSocket) {
          Logger.info("Got published message");
          socket.emit("progress", [topic.toString(), message.toString()])
        }
      }
      subscriberThread();

      socket.on("zmq", async (id, request) => {
        requesting[sessionID] = true
        // check if expiry is a minute away
        if (config.oidc && (!tokenRefreshed || (expiry && expiry < Date.now() / 1000 + 60) && !queryingInstances[sessionID])) {
          socket.emit("token-refresh")
          await new Promise(resolve => {
            socket.on("token-refresh", async token => {
              await instance.login("__accesstoken__", token, "en-US");
              const claims = JSON.parse(atob(token.split(".")[1]))
              expiry = claims.exp;
              tokenRefreshed = true;
              socket.removeAllListeners("token-refresh")
              resolve("");
            })
          })
        }
        const context = otel.propagation.extract(otel.context.active(), id);
        tracer.startActiveSpan("request", {}, context, async span => {
          span.setAttribute("sessionID", sessionID)
          await requestFunc(socket, username, sessionID, Logger.child({ traceID: span.spanContext().traceId }), intensReqSocket, request)
          span.setAttribute("peer.service", "intens")
          span.end()
          requesting[sessionID] = false
        });
      })
      socket.on("zmqCtrl", async (id, request) => {
        if (ctrlRequesting[sessionID]) return;
        ctrlRequesting[sessionID] = true
        const context = otel.propagation.extract(otel.context.active(), id);
        tracer.startActiveSpan("request", {}, context, async span => {
          span.setAttribute("sessionID", sessionID)
          await requestFunc(socket, username, sessionID, Logger.child({ traceID: span.spanContext().traceId }), intensReqCtrlSocket, request, false)
          span.setAttribute("peer.service", "intens")
          span.end()
          ctrlRequesting[sessionID] = false
        });
      })

      socket.emit("server_ready", "ready")
      conSpan.end();
    });

    socket.on("disconnect", () => {
      Logger.info(`disconnected websocket`);
      // The other sockets should close automatically as soon as they're done an out of scope
      intensSubSocket?.close();
    });
  })
}
