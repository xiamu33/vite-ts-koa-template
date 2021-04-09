import dotenv from 'dotenv';
import Koa from 'koa';
import KoaStatic from 'koa-static';
import path from 'path';

dotenv.config();

const app = new Koa();

app.use(KoaStatic(path.join(__dirname, '../dist')));

app.use(ctx => {
  ctx.body = 'hello world';
});

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`server listen on port: ${PORT}`);
});
