
const worksDuu=require('../controller/worksDuu')
const commentsDuu=require('../controller/commentsDuu')
const router = require('koa-router')()
router.prefix('/works')
//作品的增删改查
router.get('/getworks',async function (ctx, next) {
    await worksDuu.getworks(ctx)
})
router.get('/getOneWorks',async function (ctx, next) {
    await worksDuu.getOneWorks(ctx)
})
router.get('/addWorks',async function (ctx, next) {
    await worksDuu.addWorks(ctx)
})
router.get('/deleteworks',async function (ctx, next) {
    await worksDuu.deleteworks(ctx)
})

//评论的增删改查
router.get('/getcomments',async function (ctx, next) {
    await commentsDuu.getcomments(ctx)
})
router.get('/getOneComments',async function (ctx, next) {
    await commentsDuu.getOneComments(ctx)
})
router.get('/addcomments',async function (ctx, next) {
    await commentsDuu.addcomments(ctx)
})
router.get('/deletecomments',async function (ctx, next) {
    await commentsDuu.deletecomments(ctx)
})
module.exports=router