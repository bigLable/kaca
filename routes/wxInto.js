const router=require('koa-router')()
const wxDuu=require('../controller/wxDuu')
router.prefix('/wx')
router.get('/allwx',async function (ctx, next) {
    await wxDuu.allwx(ctx)
})
router.get('/wxGetid',async function (ctx, next) {
    await wxDuu.wxGetid(ctx)
})
router.get('/wxGetFrom',async function (ctx, next) {
    await wxDuu.wxGetFrom(ctx)
})

module.exports=router;