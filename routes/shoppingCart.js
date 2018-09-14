/*
* 购物车路由 对收货地址进行操作
* */
const addresDuu=require('../controller/addresDuu')
const router = require('koa-router')()
router.prefix('/shoppingCart')

/*
* 购物车 地址操作 增删改
* */
router.post('/getadres',async function (ctx, next) {
    await addresDuu.getadres(ctx)
})
router.post('/getAlladres',async function (ctx, next) {
    console.log('start!')
    await addresDuu.getAlladres(ctx)
})
router.post('/addadres', async function (ctx, next) {
    await addresDuu.addadres(ctx)

})
router.post('/delete',async function (ctx, next) {
    await addresDuu.delete(ctx)
})
router.post('/update',async function (ctx, next) {
    await addresDuu.update(ctx)
})
module.exports = router
