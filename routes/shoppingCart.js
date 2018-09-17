/*
* 购物车路由 对收货地址进行操作
* */
const addresDuu=require('../controller/addresDuu')
const router = require('koa-router')()
const adminDuu=require('../controller/adminDuu')
const oder=require('../controller/oderDuu')
const oderdetail=require('../controller/oderdetailDuu')
const carDuu=require('../controller/carDuu')
router.prefix('/shoppingCart')

/*
*收货地址操作 增删改
* */
router.get('/getadres',async function (ctx, next) {
    await addresDuu.getadres(ctx)
})
router.post('/getAlladres',async function (ctx, next) {
    console.log('start!')
    await addresDuu.getAlladres(ctx)
})
router.post('/addadres', async function (ctx, next) {
    await addresDuu.addadres(ctx)

})
router.get('/deleteadres',async function (ctx, next) {
    await addresDuu.deleteadres(ctx)
})
router.get('/updateadres',async function (ctx, next) {
    await addresDuu.updateadres(ctx)
})
/*
* 针对管理员操作*/
router.get('/getadmin',async function (ctx, next) {
    await adminDuu.getadmin(ctx)
})
router.post('/getAlladmin',async function (ctx, next) {
    console.log('start!')
    await adminDuu.getAlladmin(ctx)
})
router.post('/addadmin', async function (ctx, next) {
    await adminDuu.addadmin(ctx)

})
router.get('/deleteadmin',async function (ctx, next) {
    await adminDuu.deleteadmin(ctx)
})
router.get('/updateadmin',async function (ctx, next) {
    await adminDuu.updateadmin(ctx)
})
/*
* 针对订单表操作*/
router.get('/getoder',async function (ctx, next) {
    await oder.getoder()
})
router.post('/getAlloder',async function (ctx, next) {
    console.log('start!')
    await oder.getAlloder(ctx)
})
router.post('/addoder', async function (ctx, next) {
    await oder.addoder(ctx)

})
router.get('/deleteoder',async function (ctx, next) {
    await oder.deleteoder(ctx)
})
router.get('/updateoder',async function (ctx, next) {
    await oder.updateoder(ctx)
})
/*
* 针对订单--详情--操作*/
router.get('/getoderdetail',async function (ctx, next) {
    await oderdetail.getoderdetail(ctx)
})
router.post('/getAlloderdetail',async function (ctx, next) {
    console.log('start!')
    await oderdetail.getAlloderdetail(ctx)
})
router.post('/addoderdetail', async function (ctx, next) {
    await oderdetail.addoderdetail(ctx)

})
router.get('/deleteoderdetail',async function (ctx, next) {
    await oderdetail.deleteoderdetail(ctx)
})
router.get('/updateoderdetail',async function (ctx, next) {
    await oderdetail.updateoderdetail(ctx)
})
/*

 针对购物车进行操作
*
* */
router.get('/getcar',async function (ctx, next) {
    await carDuu.getcar(ctx)
})
router.post('/getAllcar',async function (ctx, next) {
    console.log('start!')
    await carDuu.getAllcar(ctx)
})
router.post('/addcar', async function (ctx, next) {
    await carDuu.addcar(ctx)

})
router.get('/deletecar',async function (ctx, next) {
    await carDuu.deletecar(ctx)
})
router.get('/updatecar',async function (ctx, next) {
    await carDuu.updatecar(ctx)
})


module.exports = router
