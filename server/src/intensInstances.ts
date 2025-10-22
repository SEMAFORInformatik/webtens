import config from "./config";
import Logger from "./logger";
import { tracer } from "./tracing"
import otel, { SpanStatusCode } from "@opentelemetry/api";
import * as zmq from "zeromq"


export default class IntensInstance {
  name: string;
  alternatives: boolean
  utcOffset: number
  ip: string;

  constructor(name: string, alternatives = false, utcOffset = 0) {
    this.name = name;
    this.alternatives = alternatives
    this.utcOffset = utcOffset
  }

  async * getData() {
    let url = `${config.configServiceURL}/app/${config.containerType}/${this.name}?utcOffset=${this.utcOffset}`
    if (this.alternatives) {
      url += `&${new URLSearchParams(config.intensAppAlternativeValues).toString()}`
    }
    try {
      // retry fetch until status isn't 202
      while (true) {
        const response = await fetch(url);
        if (response.status === 202) {
          yield response.json()
          continue
        }
        const data = await response.json()
        this.ip = data.ip;
        return data;
      }
    } catch (e) {
      Logger.error("Couldn't get Intens from config-controller " + e);
      return null;
    }
  }

  async getDataWait() {
    const dataGen = this.getData();
    while (true) {
      const response = await dataGen.next();
      if (response.done) {
        return response.value
      }
    }
  }

  async release() {
    try {
      Logger.info({ instance: this.name }, "Deleting intens instance");
      const result = await fetch(`${config.configServiceURL}/app/${config.containerType}/${this.name}`,
        {
          method: "DELETE",
        })
      if (result.ok) {
        Logger.info({ instance: this.name }, "Successfully deleted intens instance");
      } else {
        Logger.warn({ instance: this.name }, "Intens instance could not be found");
      }
    } catch (e) {
      Logger.error({ url: e.config.url, code: e.code }, "failed to delete intens instance");
    }
  }

  async addLabels(labels: { [key: string]: string }) {
    try {
      const result = await fetch(`${config.configServiceURL}/app/${config.containerType}/${this.name}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(labels),
        })
    } catch (e) {
      Logger.error({ url: e.config.url, code: e.code }, "failed to add labels to intens instance");
    }
  }

  async login(username: string, password: string, language: string) {
    if (!this.ip) {
      Logger.info({ intance: this.name }, "Don't have IP yet of instance. Fetching...")
      await this.getDataWait();
    }
    const loginReq = {
      command: "LOGIN",
      argument: [
        username,
        password,
        language,
      ],
    }

    const span = tracer.startSpan("intens-login");
    Logger.info({ username, instance: this.ip }, "sending login request")
    const socket = new zmq.Request;
    socket.connect(`tcp://${this.ip}:15560`);
    socket.linger = 0;
    span.setStatus({ code: SpanStatusCode.OK })

    await socket.send(["control", JSON.stringify(loginReq)])
    const rawResponse = await socket.receive();
    try {
      const response = JSON.parse(rawResponse[0].toString());
      if (response.status == "ERROR") {
        Logger.warn({ username, response: response[0].message }, "Login failed");
        return response.message || "Login failed";
      } else {
        Logger.info({ username, instance: this.ip }, "logged in");
        return "";
      }

    } catch (e) {
      Logger.error(e, rawResponse.map(e => e?.toString()));
      return "Unexpected error. Please contact an administrator.";
    } finally {
      socket.close();
      span.end();
    }
  }
}

