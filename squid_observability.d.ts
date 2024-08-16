/// <reference path="libraries/squid-tracer-nodejs/squid_tracer.d.ts"/>
/// <reference path="libraries/squid-metrics-nodejs/squid_metrics.d.ts"/>
/// <reference path="libraries/squid-logger-nodejs/squid_logger.d.ts"/>
/// <reference path="libraries/squid-observability-configs-nodejs/squid_observability_configs.d.ts"/>
/// <reference path="libraries/squid-error-nodejs/squid_error.d.ts"/>

declare module 'squid-observability' {
  export { SquidError, SquidHttpError } from 'squid_error';
  export { SquidObservabilityConfigs } from 'squid-observability-configs';
  export * as SquidLogger from 'squid-logger';
  export * as SquidMetrics from 'squid_metrics';
  export * as SquidTracer from 'squid-tracer';
}