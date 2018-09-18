
const router = require('koa-router')()
const Backtage=require('../controller/Backtage')
router.prefix('/Backstage')
router.get('/getstage',async function (ctx, next) {
    await Backtage.getBacktage(ctx)
})
router.post('/getAllstage',async function (ctx, next) {
    console.log('start!')

    await Backtage.getAllBacktage(ctx)
})
router.post('/addstage', async function (ctx, next) {
    await Backtage.addBacktage(ctx)

})
router.get('/deletestage',async function (ctx, next) {
    await Backtage.deleteBacktage(ctx)
})
router.get('/updatestage',async function (ctx, next) {
    await Backtage.updateBacktage(ctx)
})
