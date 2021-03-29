import Koa from 'koa'
import KoaStatic from 'koa-static';
import path from 'path'

const app = new Koa();

app.use(KoaStatic(path.join(__dirname, '../dist')))

app.use(ctx => {
  ctx.body = 'hello world'
})

app.listen(3003, () => {
  console.log('server listen on port: 3003')
})
