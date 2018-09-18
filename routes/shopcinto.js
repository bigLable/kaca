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

module.exports=router;