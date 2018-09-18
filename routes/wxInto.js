const router=require('koa-router')()
const wxInfo=require('../controller/wxDuu')

router.get('/wxGetid',async (ctx,next)=>{
    let jsondata=wxInfo.wxGetid(ctx);
    ctx.render('',{title: '维修id表',data:jsondata})
})
router.get('/wxGetFrom',async (ctx,next)=>{
    let jsondata=wxInfo.wxGetFrom(ctx);
    ctx.render('',{title: '维修地区表',data:jsondata})
})

module.exports=router;