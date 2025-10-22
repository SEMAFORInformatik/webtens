import config from "./config";
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { Resource } from '@opentelemetry/resources';
import { ATTR_SERVICE_NAME } from '@opentelemetry/semantic-conventions';
import { ATTR_K8S_POD_NAME, ATTR_K8S_STATEFULSET_NAME } from '@opentelemetry/semantic-conventions/incubating';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { UndiciInstrumentation } from '@opentelemetry/instrumentation-undici';
import { ExpressInstrumentation, ExpressLayerType } from '@opentelemetry/instrumentation-express';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { AsyncHooksContextManager } from '@opentelemetry/context-async-hooks';
import otel from "@opentelemetry/api"

export let tracer = otel.trace.getTracer("zmq-tracer")
export let intensTracer = otel.trace.getTracer("intens-tracer")


if (config.otel) {
  const exporter = new OTLPTraceExporter({ url: config.otel.endpoint });
  const provider = new NodeTracerProvider({
    resource: new Resource({
      [ATTR_SERVICE_NAME]: 'webtens',
      [ATTR_K8S_POD_NAME]: process.env.HOSTNAME,
    }),
  });
  provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
  provider.register();

  registerInstrumentations({
    tracerProvider: provider,
    instrumentations: [
      new HttpInstrumentation({
        ignoreIncomingRequestHook: req => {
          return req.url.includes("/res") || req.url.includes("/trace") || req.url.includes("/healthz") || req.url.includes("/metrics") || req.url.includes("/ui");
        }
      }),
      new ExpressInstrumentation({
        ignoreLayersType: [ExpressLayerType.MIDDLEWARE, ExpressLayerType.ROUTER]
      }),
      new UndiciInstrumentation()
    ],
  });

  const contextManager = new AsyncHooksContextManager();
  contextManager.enable();
  otel.context.setGlobalContextManager(contextManager)

  tracer = otel.trace.getTracer("zmq-tracer")

  {
    const exporter = new OTLPTraceExporter({ url: config.otel.endpoint });
    const provider = new NodeTracerProvider({
      resource: new Resource({
        [ATTR_SERVICE_NAME]: 'intens',
        [ATTR_K8S_STATEFULSET_NAME]: config.containerType,
      }),
    });
    provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
    provider.register();
    intensTracer = provider.getTracer("intens-tracer")
  }
}
