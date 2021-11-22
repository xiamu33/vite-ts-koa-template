import { connect, connection, ConnectOptions } from 'mongoose';
import { Service } from 'typedi';
import { LoggerService } from '../service';
import { loadEnv } from '../toolkit';

@Service()
export class MongoDBConn {
  private mongoDbServer: string;
  private mongoDbName: string;

  constructor(private loggerService: LoggerService) {
    this.initDb();
  }

  private initDb() {
    loadEnv(['MONGO_DB_SERVER', 'MONGO_DB_NAME']);
    this.mongoDbServer = process.env.MONGO_DB_SERVER!;
    this.mongoDbName = process.env.MONGO_DB_NAME!;
  }

  public async connectDB() {
    const uri = this.mongoDbServer + this.mongoDbName;
    const connectOptions: ConnectOptions = {};
    if (process.env.MONGO_USER) connectOptions.user = process.env.MONGO_USER; // 用户名
    if (process.env.MONGO_PASSWORD) connectOptions.pass = process.env.MONGO_PASSWORD; // 密码
    await connect(uri, connectOptions);
    connection.on('error', (err: Error) => {
      this.loggerService.errorLog(`connect ${this.mongoDbName} db failed. error: [ ${err.message} ]`);
      throw err;
    });
    connection.on('disconnected', () => {
      this.loggerService.warnLog(`[db disconnected] mongo disconnected at: ${new Date().toLocaleString()}.`);
    });
    connection.on('reconnected', () => {
      this.loggerService.warnLog(`[db reconnected] mongo reconnected at: ${new Date().toLocaleString()}.`);
    });
    this.loggerService.traceLog(`> connect ${this.mongoDbName} db success on: ${uri}`);
    return connection;
  }
}
