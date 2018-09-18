const router=require('koa-router')()
const wxInfo=require('../controller/shopcDuu')

router.get('/shopcid',async (ctx,next)=>{
    let jsondata=wxInfo.shopcid(ctx);
    ctx.render('',{title: '',data:jsondata})
})
router.get('/shopccontent',async (ctx,next)=>{
    let jsondata=wxInfo.shopccontent(ctx);
    ctx.render('',{title: '',data:jsondata})
})
router.get('/shopcdate',async (ctx,next)=>{
    let jsondata=wxInfo.shopcdate(ctx);
    ctx.render('',{title: '',data:jsondata})
})

module.exports=router;