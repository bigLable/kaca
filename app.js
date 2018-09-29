const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const works = require('./routes/works')
const wxInto = require('./routes/wxInto')
const admins = require('./routes/admins')
const cgqInto=require('./routes/cgqInto')
const shopInto=require('./routes/shopInto')
const shopcInto = require('./routes/shopcinto')
const shoppingCart = require('./routes/shoppingCart')
// error handler
onerror(app)
// app.use(async (ctx,next)=>{
//     ctx.set('Access-Control-Allow-Origin','*');
//     next();
// })
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(admins.routes(), admins.allowedMethods())
app.use(works.routes(), works.allowedMethods())
app.use(cgqInto.routes(), cgqInto.allowedMethods())
app.use(shopcInto.routes(), shopcInto.allowedMethods())
app.use(shopInto.routes(), shopInto.allowedMethods())
app.use(wxInto.routes(), wxInto.allowedMethods())
app.use(shoppingCart.routes(), shoppingCart.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
