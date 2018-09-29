const router = require('koa-router')()
const adminDuu=require('../controller/adminDuu')
router.prefix('/admins')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a admins/bar response'
})

router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a admins/bar response'
})
//管理员的增删改查
router.get('/getadmin',async function (ctx, next) {
    await adminDuu.getadmin(ctx)
})
router.get('/getoneadmin',async function (ctx, next) {
    await adminDuu.getoneadmin(ctx)
})
router.post('/addadmin',async function (ctx, next) {
    await adminDuu.addadmin(ctx)
})
router.post('/updateadmin',async function (ctx, next) {
    await adminDuu.updateadmin(ctx)
})
router.post('/deleteadmin',async function (ctx, next) {
    await adminDuu.deleteadmin(ctx)
})
module.exports = router;
