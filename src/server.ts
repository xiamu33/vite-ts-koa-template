import 'reflect-metadata';
import Container from 'typedi';
import dotenv from 'dotenv';
import log4js from 'log4js';
import { HttpServer } from './servers/HttpServer';
import { MongoDBConn } from './common/MongoDBConn';

dotenv.config();
log4js.configure(require('./config/log4js.config').default);

Container.get(MongoDBConn).connectDB();
Container.get(HttpServer).startServer();
