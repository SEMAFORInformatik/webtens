import { Resource } from '@opentelemetry/resources';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { BatchSpanProcessor, WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { ATTR_SERVICE_NAME, SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { Attributes } from '@opentelemetry/api';
import { getBackendUrl, getConfig } from './config';


const exporter = new OTLPTraceExporter({url: `${getBackendUrl}traces`});
const provider = new WebTracerProvider({
  resource: new Resource({
    [ATTR_SERVICE_NAME]: 'webtens-frontend',
    [SemanticResourceAttributes.WEBENGINE_DESCRIPTION]: window.navigator.userAgent,
  })
});
provider.addSpanProcessor(new BatchSpanProcessor(exporter))

provider.register({
  contextManager: new ZoneContextManager(),
});

export const getRequestAttributes = (request: any): Attributes => {
  let attributes: Attributes = {};
  attributes['intens.action'] = request.action;
  attributes['intens.name'] = request.name;
  attributes['intens.varname'] = request.varname;
  attributes['intens.argument'] = request.argument;
  attributes['intens.command'] = request.command;
  attributes['intens.guielement'] = request.guielement;
  return attributes;
}

(async () => {
  // Turn off tracing if the backend doesn't have it enabled
  if (!(await getConfig()).otel) {
    exporter.shutdown()
  }
})()
