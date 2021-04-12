import 'reflect-metadata';
import dotenv from 'dotenv';
import Container from 'typedi';
import { HttpServer } from './servers/HttpServer';

dotenv.config();

Container.get(HttpServer).startServer();
