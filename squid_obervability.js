const SquidTracer  = require('squid-tracer');
// const SquidMetrics = require('squid-metrics');
const SquidLogger  = require('squid-logger');
const SquidObservabilityConfigs = require('squid-observability-configs');

const squidObservabilityUniqueSymbol = Symbol.for('squidObservability');
const globalSymbols = Object.getOwnPropertySymbols(global);
const hasSymbol = (globalSymbols.indexOf(squidObservabilityUniqueSymbol) > -1);

let Observability;

function Configure (gcloudKeyFile, enviroment, title, npmVersion, enableTracing, stdOutLogLevel, cloudLoggingLevel)
{
  if (!hasSymbol)
  {
    Observability.ObservabilityConfigs = SquidObservabilityConfigs.SetGlobalConfig(new SquidObservabilityConfigs('version3-1208',
      gcloudKeyFile,
      enviroment,
      title,
      npmVersion));

    Observability.Trace = SquidTracer.Configure(enableTracing);

    Observability.Logger = SquidLogger.Configure(stdOutLogLevel,
      cloudLoggingLevel,
      {
        headers : {
          authorization : (data) => { return 'Bearer *****'; }
        }
      }
    );

    global[squidObservabilityUniqueSymbol] = Observability;
    return global[squidObservabilityUniqueSymbol];
  }
};

exports.Configure = Configure;
