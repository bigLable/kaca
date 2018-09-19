const router=require('koa-router')()
const shopcDuu=require('../controller/shopcDuu')
router.prefix('/shopc')

router.get('/shopcid',async function (ctx, next) {
    await shopcDuu.shopcid(ctx)
})
router.get('/shopccontent',async function (ctx, next) {
    await shopcDuu.shopccontent(ctx)
})
router.get('/shopcdate',async function (ctx, next) {
    await shopcDuu.shopcdate(ctx)
})
router.get('/shoplabel',async function (ctx, next) {
    await shopcDuu.shoplabel(ctx)
})
router.get('/username',async function (ctx, next) {
    await shopcDuu.username(ctx)
})

module.exports=router;