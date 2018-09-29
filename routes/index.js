const router = require('koa-router')()
const hotDuu=require('../controller/hotDuu')
const newgoodsDuu=require('../controller/newgoodsDuu')
const worksDuu=require('../controller/worksDuu')

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
router.get('/getnewworks',async function (ctx, next) {
    await worksDuu.getnewworks(ctx)
})
router.post('/addgoods',async function (ctx, next) {
    await newgoodsDuu. addgoods(ctx)
})
router.post('/updategoods',async function (ctx, next) {
    await newgoodsDuu.updategoods(ctx)
})
router.get('/deletegoods',async function (ctx, next) {
    await newgoodsDuu.deletegoods(ctx)
})





module.exports = router