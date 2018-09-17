
const worksDuu=require('../controller/worksDuu')
const router = require('koa-router')()
router.prefix('/works')

router.get('/getworks',async function (ctx, next) {
    await worksDuu.getworks(ctx)
})
router.get('/getOneWorks',async function (ctx, next) {
    await worksDuu.getOneWorks(ctx)
})
router.get('/addWorks',async function (ctx, next) {
    await worksDuu.addWorks(ctx)
})
router.get('/delete',async function (ctx, next) {
    await worksDuu.delete(ctx)
})
module.exports=router