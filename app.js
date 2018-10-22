const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
// const cors = require('koa2-cors')

const index = require('./routes/index')
const users = require('./routes/users')
const works = require('./routes/works')
const wxInto = require('./routes/wxInto')
const admins = require('./routes/admins')
const cgqInto=require('./routes/cgqInto')
const shopInto=require('./routes/shopInto')
const shopcInto = require('./routes/shopcinto')
const shoppingCart = require('./routes/shoppingCart')
const session=require('koa-session')
// error handler
onerror(app)
// app.use(async (ctx,next)=>{
//     ctx.set('Access-Control-Allow-Origin','*');
//     next();
// })
// middlewares
app.keys = ['some secret hurr'];
const CONFIG = {
    key: 'koa:sess',   //cookie key (default is koa:sess)
    maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
    overwrite: true,  //是否可以overwrite    (默认default true)
    httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
    signed: true,   //签名默认true
    rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
    renew: false,  //(boolean) renew session when session is nearly expired,
};
app.use(session(CONFIG, app));
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
// app.use(cors({
//     origin: function (ctx) {
//         return 'http://localhost:63342'; //这样就能只允许 http://localhost:63342 这个域名的请求了
//     },
//     exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//     maxAge: 5,
//     credentials: true,
//     allowMethods: ['GET', 'POST', 'DELETE'],
//     allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
// }))

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
