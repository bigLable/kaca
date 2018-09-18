const router=require('koa-router')()
const shopInfo=require('../controller/shopDuu')

router.get('/shopGetid',async (ctx,next)=>{
    let jsondata=shopInfo.shopGetid(ctx);
    ctx.render('',{title: '商品id表',data:jsondata})
})
router.get('/shopGetpara',async (ctx,next)=>{
    let jsondata=shopInfo.shopGetpara(ctx);
    ctx.render('',{title: '商品类别表',data:jsondata})
})

module.exports=router;