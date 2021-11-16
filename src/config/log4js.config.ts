const logDir = process.env.LOG_DIR || '.';

export const log4jsConfig = {
  appenders: {
    trace: {
      type: 'dateFile',
      filename: `${logDir}/logs/trace/trace.log`,
      keepFileExt: true,
    },
    debug: {
      type: 'dateFile',
      filename: `${logDir}/logs/debug/debug.log`,
      keepFileExt: true,
    },
    info: {
      type: 'dateFile',
      filename: `${logDir}/logs/info/info.log`,
      keepFileExt: true,
    },
    warn: {
      type: 'dateFile',
      filename: `${logDir}/logs/warn/warn.log`,
      keepFileExt: true,
    },
    fatal: {
      type: 'dateFile',
      filename: `${logDir}/logs/fatal/fatal.log`,
      keepFileExt: true,
    },
    error: {
      type: 'dateFile',
      filename: `${logDir}/logs/error/error.log`,
      keepFileExt: true,
    },
  },
  categories: {
    default: { appenders: ['debug'], level: 'DEBUG' },
    trace: { appenders: ['trace'], level: 'TRACE' },
    debug: { appenders: ['debug'], level: 'DEBUG' },
    info: { appenders: ['info'], level: 'INFO' },
    warn: { appenders: ['warn'], level: 'WARN' },
    fatal: { appenders: ['fatal'], level: 'FATAL' },
    error: { appenders: ['error'], level: 'ERROR' },
  },
};
