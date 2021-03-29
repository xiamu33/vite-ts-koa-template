import Koa from 'koa'

const app = new Koa();

app.use(ctx => {
  ctx.body = 'hello world'
})

app.listen(3003, () => {
  console.log('server listen on port: 3003')
})
