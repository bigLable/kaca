const router=require('koa-router')()
const wxInfo=require('../model/wxInfo')

router.prefix('/users')
router.get('/',async (ctx,next)=>{
    let jsondata=wxInfo.wxGetid();
    ctx.render('',{title: '维修id表',data:jsondata})
})

module.exports=router;