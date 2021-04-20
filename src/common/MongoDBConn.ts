import { Connection, ConnectionOptions, createConnection } from 'mongoose';
import { LoggerService } from '../service/LoggerService';
import { Service } from 'typedi';

@Service()
export class MongoDBConn {
  private mongoDbServer: string;
  private mongoDbName: string;

  constructor(private loggerService: LoggerService) {
    this.initDb();
  }

  private initDb() {
    if (!process.env.MONGO_DB_SERVER) throw new Error('must config MONGO_DB_SERVER env');
    if (!process.env.MONGO_DB_NAME) throw new Error('must config MONGO_DB_NAME env');
    this.mongoDbServer = process.env.MONGO_DB_SERVER;
    this.mongoDbName = process.env.MONGO_DB_NAME;
  }

  public connectDB() {
    const uri = this.mongoDbServer + this.mongoDbName;
    const connectOptions: ConnectionOptions = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    if (process.env.MONGO_USER) connectOptions.user = process.env.MONGO_USER; // 用户名
    if (process.env.MONGO_PASSWORD) connectOptions.pass = process.env.MONGO_PASSWORD; // 密码

    const db: Connection = createConnection(uri, connectOptions);
    db.on('error', err => {
      this.loggerService.errorLog(`connect ${this.mongoDbName} db failed. error: [ ${err.message} ]`);
      throw err;
    });
    db.on('disconnected', () => {
      this.loggerService.warnLog(`[db disconnected] mongo disconnected at: ${new Date()}.`);
    });
    db.on('reconnected', () => {
      this.loggerService.warnLog(`[db reconnected] mongo reconnected at: ${new Date()}.`);
    });
    this.loggerService.traceLog(`> connect ${this.mongoDbName} db success on: ${uri}`);
    return db;
  }
}
