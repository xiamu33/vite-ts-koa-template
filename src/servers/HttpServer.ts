import { createKoaServer } from 'routing-controllers';
import { Service } from 'typedi';
import Koa from 'koa';
import KoaStatic from 'koa-static';
import path from 'path';

@Service()
export class HttpServer {
  private host: string;
  private port: number;
  private isDev = !!~(process.env.NODE_ENV || '').indexOf('dev');

  constructor() {
    this.init();
    console.log('http server start');
  }

  private init() {
    if (!process.env.HTTP_HOST) throw new Error('must config HTTP_HOST env');
    if (!process.env.HTTP_PORT) throw new Error('must config HTTP_PORT env');
    this.host = process.env.HTTP_HOST;
    this.port = parseInt(process.env.HTTP_PORT);
  }

  public startServer() {
    const appWeb = createKoaServer({
      development: this.isDev,
      routePrefix: '',
      controllers: [`${__dirname}/../controller/**/*.*s`],
      middlewares: [`${__dirname}/../middleware/**/*.*s`],
    }) as Koa;

    appWeb.use(KoaStatic(path.join(__dirname, '../../dist')));

    appWeb.listen(this.port, this.host, () => {
      console.log(`> HTTP server listening on: http://${this.host}:${this.port}`);
    });
  }
}
