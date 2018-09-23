const router = require('koa-router')()
const userDuu=require('../controller/userDuu')
router.prefix('/users')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
//用户的增删改查
router.get('/getUsers',async function (ctx, next) {
    await userDuu.getUsers(ctx)
})
router.get('/getOneUser',async function (ctx, next) {
    await userDuu.getOneUser(ctx)
})
router.post('/addUsers',async function (ctx, next) {
    await userDuu.addUsers(ctx)
})
router.get('/deleteUsers',async function (ctx, next) {
    await userDuu.deleteUsers(ctx)
})
router.post('/updateUsers',async function (ctx, next) {
    await userDuu.updateUsers(ctx)
})


module.exports = router;
