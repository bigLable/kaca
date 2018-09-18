const router=require('koa-router')()
const wxDuu=require('../controller/wxDuu')
router.prefix('/wx')
router.get('/wxGetid',async function (ctx, next) {
    await wxDuu.wxGetid(ctx)
})
router.get('/wxGetFrom',async (ctx,next)=>{
    let jsondata=wxInfo.wxGetFrom(ctx);
    ctx.render('',{title: '维修地区表',data:jsondata})
})

module.exports=router;