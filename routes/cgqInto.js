const router=require('koa-router')()
const cgqInfo=require('../model/cgqInfo')

router.prefix('/users')
router.get('/',async (ctx,next)=>{
    let jsondata=cgqInfo.cgqGetid();
    ctx.render('',{title: '详细信息',data:jsondata})
})
router.get('/',async (ctx,next)=>{
    let jsondata=cgqInfo.cgqtype();
    ctx.render('',{title: '详细信息',data:jsondata})
})
router.get('/',async (ctx,next)=>{
    let jsondata=cgqInfo.cgqsize();
    ctx.render('',{title: '详细信息',data:jsondata})
})
router.get('/',async (ctx,next)=>{
    let jsondata=cgqInfo.cgqmax();
    ctx.render('',{title: '详细信息',data:jsondata})
})
router.get('/',async (ctx,next)=>{
    let jsondata=cgqInfo.cgqd();
    ctx.render('',{title: '详细信息',data:jsondata})
})
router.get('/',async (ctx,next)=>{
    let jsondata=cgqInfo.cgqj();
    ctx.render('',{title: '详细信息',data:jsondata})
})
router.get('/',async (ctx,next)=>{
    let jsondata=cgqInfo.cgqtime();
    ctx.render('',{title: '详细信息',data:jsondata})
})

module.exports=router;