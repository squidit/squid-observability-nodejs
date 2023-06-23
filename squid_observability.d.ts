/// <reference path="libraries/squid-tracer-nodejs/squid_tracer.d.ts"/>
/// <reference path="libraries/squid-metrics-nodejs/squid_metrics.d.ts"/>
/// <reference path="libraries/squid-logger-nodejs/squid_logger.d.ts"/>
/// <reference path="libraries/squid-observability-configs-nodejs/squid_observability_configs.d.ts"/>
/// <reference path="libraries/squid-error-nodejs/squid_error.d.ts"/>

declare module 'squid-observability' {
  import * as SquidTracerType from 'squid-tracer';
  import * as SquidMetricsType from 'squid-metrics';
  import * as SquidLoggerType from 'squid-logger';
  import { SquidObservabilityConfigs as SquidObservabilityConfigsType} from 'squid-observability-configs';
  import { SquidError as SquidErrorType, SquidHttpError as SquidHttpErrorType } from 'squid-error';

  const SquidTracer: typeof SquidTracerType;
  const SquidMetrics: typeof SquidMetricsType;
  const SquidLogger: typeof SquidLoggerType;
  const SquidObservabilityConfigs: typeof SquidObservabilityConfigsType;
  const SquidError: typeof SquidErrorType;
  const SquidHttpError: typeof SquidHttpErrorType;
}