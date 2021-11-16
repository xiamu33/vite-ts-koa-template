/* eslint-disable @typescript-eslint/no-unsafe-argument, no-console */
import { getLogger, Logger } from 'log4js';
import { Service } from 'typedi';

enum LoggerName {
  Trace = 'trace',
  Debug = 'debug',
  Info = 'info',
  Warn = 'warn',
  Fatal = 'fatal',
  Error = 'error',
}

@Service()
export class LoggerService {
  private traceLogger: Logger = getLogger(LoggerName.Trace);
  private debugLogger: Logger = getLogger(LoggerName.Debug);
  private infoLogger: Logger = getLogger(LoggerName.Info);
  private warnLogger: Logger = getLogger(LoggerName.Warn);
  private fatalLogger: Logger = getLogger(LoggerName.Fatal);
  private errorLogger: Logger = getLogger(LoggerName.Error);

  traceLog(msg: string, ...args: any[]): void {
    this.traceLogger.trace(msg, ...args);
    if (process.env.DEBUG) console.debug(`[ ${new Date().toLocaleString()} ]`, msg, ...args);
  }

  debugLog(msg: string, ...args: any[]): void {
    this.debugLogger.debug(msg, ...args);
    if (process.env.DEBUG) console.debug(`[ ${new Date().toLocaleString()} ]`, msg, ...args);
  }

  infoLog(msg: string, ...args: any[]): void {
    this.infoLogger.info(msg, ...args);
    if (process.env.DEBUG) console.info(`[ ${new Date().toLocaleString()} ]`, msg, ...args);
  }

  warnLog(msg: string, ...args: any[]): void {
    this.warnLogger.warn(msg, ...args);
    this.debugLogger.debug(msg, ...args);
    if (process.env.DEBUG) console.warn(`[ ${new Date().toLocaleString()} ] SERVER WANING`, msg, ...args);
  }

  fatalLog(msg: string, ...args: any[]): void {
    this.fatalLogger.fatal(msg, ...args);
    if (process.env.DEBUG) console.log(`[ ${new Date().toLocaleString()} ] SERVER WANING`, msg, ...args);
  }

  errorLog(msg: string, ...args: any[]): void {
    this.errorLogger.error(msg, ...args);
    this.debugLogger.debug(msg, ...args);
    if (process.env.DEBUG) console.error(`[ ${new Date().toLocaleString()} ] SERVER ERROR`, msg, ...args);
  }
}
