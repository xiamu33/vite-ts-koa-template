import 'reflect-metadata';
import dotenv from 'dotenv';
import log4js from 'log4js';
import Container from 'typedi';
import { MongoDBConn } from './common/MongoDBConn';
import { log4jsConfig } from './config/log4js.config';
import { HttpServer } from './servers/HttpServer';

dotenv.config();
log4js.configure(log4jsConfig);

async function bootstrap() {
  await Container.get(MongoDBConn).connectDB();
  Container.get(HttpServer).startServer();
}

void bootstrap();
