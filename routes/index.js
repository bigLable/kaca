const router = require('koa-router')()
const hotDuu=require('../controller/hotDuu')
const newgoodsDuu=require('../controller/newgoodsDuu')
const hotworksDuu=require('../controller/hotworksDuu')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: '咔嚓网!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/gethot',async function (ctx, next) {
    await hotDuu.gethot(ctx)
})
router.get('/getnew',async function (ctx, next) {
    await newgoodsDuu.getnew(ctx)
})
router.get('/gethotworks',async function (ctx, next) {
    await hotworksDuu.gethotworks(ctx)
})



module.exports = router