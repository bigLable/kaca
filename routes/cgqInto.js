const router=require('koa-router')()
const cgqDuu=require('../controller/cgqDuu')
router.prefix('/cgq')

router.get('/cgqGetid',async function (ctx, next) {
    await cgqDuu.cgqGetid(ctx)
})
router.get('/cgqtype',async function (ctx, next) {
    await cgqDuu.cgqtype(ctx)
})
router.get('/cgqsize',async function (ctx, next) {
    await cgqDuu.cgqsize(ctx)
})
router.get('/cgqmax',async function (ctx, next) {
    await cgqDuu.cgqmax(ctx)
})
router.get('/cgqwight',async function (ctx, next) {
    await cgqDuu.cgqwight(ctx)
})
router.get('/cgqpoint',async function (ctx, next) {
    await cgqDuu.cgqpoint(ctx)
})
router.get('/cgqtime',async function (ctx, next) {
    await cgqDuu.cgqtime(ctx)
})

module.exports=router;