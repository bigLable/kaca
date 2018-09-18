const router=require('koa-router')()
const cgqInfo=require('../controller/cgqDuu')

router.prefix('/users')
router.get('cgqGetid',async (ctx,next)=>{
    let jsondata=cgqInfo.cgqGetid(ctx);
    ctx.render('',{title: '详细信息',data:jsondata})
})
router.get('/cgqtype',async (ctx,next)=>{
    let jsondata=cgqInfo.cgqtype(ctx);
    ctx.render('',{title: '详细信息',data:jsondata})
})
router.get('/cgqsize',async (ctx,next)=>{
    let jsondata=cgqInfo.cgqsize(ctx);
    ctx.render('',{title: '详细信息',data:jsondata})
})
router.get('/cgqmax',async (ctx,next)=>{
    let jsondata=cgqInfo.cgqmax(ctx);
    ctx.render('',{title: '详细信息',data:jsondata})
})
router.get('/cgqd',async (ctx,next)=>{
    let jsondata=cgqInfo.cgqd(ctx);
    ctx.render('',{title: '详细信息',data:jsondata})
})
router.get('/cgqj',async (ctx,next)=>{
    let jsondata=cgqInfo.cgqj(ctx);
    ctx.render('',{title: '详细信息',data:jsondata})
})
router.get('/cgqtime',async (ctx,next)=>{
    let jsondata=cgqInfo.cgqtime(ctx);
    ctx.render('',{title: '详细信息',data:jsondata})
})

module.exports=router;