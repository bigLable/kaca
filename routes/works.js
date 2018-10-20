const likeDuu=require('../controller/likeDuu')
const worksDuu=require('../controller/worksDuu')
const commentsDuu=require('../controller/commentsDuu')
const hotDuu=require('../controller/hotDuu')
const router = require('koa-router')()
router.prefix('/works')
//作品的增删改查
router.get('/getworks',async function (ctx, next) {
    await worksDuu.getworks(ctx)
})
router.get('/getOneWorks',async function (ctx, next) {
    await worksDuu.getOneWorks(ctx)
})
router.post('/addWorks',async function (ctx, next) {
    await worksDuu.addWorks(ctx)
})
router.get('/deleteworks',async function (ctx, next) {
    await worksDuu.deleteworks(ctx)
})
router.post('/updateworks',async function (ctx, next) {
    await worksDuu.updateworks(ctx)
})
router.get('/newworks',async function (ctx, next) {
    await hotDuu.newworks(ctx)
})
router.get('/recworks',async function (ctx, next) {
    await hotDuu.recworks(ctx)
})
router.get('/hotworks',async function (ctx, next) {
    await hotDuu.hotworks(ctx)
})

//评论的增删改查
router.get('/getcomments',async function (ctx, next) {
    await commentsDuu.getcomments(ctx)
})
router.get('/getOneComments',async function (ctx, next) {
    await commentsDuu.getOneComments(ctx)
})
router.post('/addcomments',async function (ctx, next) {
    await commentsDuu.addcomments(ctx)
})
router.get('/deletecomments',async function (ctx, next) {
    await commentsDuu.deletecomments(ctx)
})
//点赞的增删
router.post('/addlike',async function (ctx, next) {
    await likeDuu.addlike(ctx)
})
router.post('/deletelike',async function (ctx, next) {
    await likeDuu.deletelike(ctx)
})
module.exports=router