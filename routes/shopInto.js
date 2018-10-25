const router=require('koa-router')()
const shopDuu=require('../controller/shopDuu')
router.prefix('/shop')
router.get('/allshop',async function (ctx, next) {
    await shopDuu.allshop(ctx)
})
router.get('/shopsearch',async function (ctx, next) {
    await shopDuu.shopsearch(ctx)
})
router.get('/shopGetid',async function (ctx, next) {
    await shopDuu.shopGetid(ctx)
})
router.get('/shopGetpara',async function (ctx, next) {
    await shopDuu.shopGetpara(ctx)
})
router.get('/shopGprice',async function (ctx, next) {
    await shopDuu.shopGprice(ctx)
})
router.get('/shopXImg',async function (ctx, next) {
    await shopDuu.shopXImg(ctx)
})
router.post('/shopbuy',async function (ctx, next) {
    await shopDuu.shopbuy(ctx)
})
router.get('/allIMG',async function (ctx, next) {
    await shopDuu.allIMG(ctx)
})
module.exports=router;