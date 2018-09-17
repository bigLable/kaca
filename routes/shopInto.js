const router=require('koa-router')()
const shopInfo=require('../model/shopInfo')

router.prefix('/users')
router.get('/',async (ctx,next)=>{
    let jsondata=shopInfo.shopGetid();
    ctx.render('',{title: '商品id表',data:jsondata})
})

module.exports=router;