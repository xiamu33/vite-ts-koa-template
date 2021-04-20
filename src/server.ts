import 'reflect-metadata';
import Container from 'typedi';
import dotenv from 'dotenv';
import log4js from 'log4js';
import { HttpServer } from './servers/HttpServer';

dotenv.config();
log4js.configure(require('./config/log4js.config').default);

Container.get(HttpServer).startServer();
