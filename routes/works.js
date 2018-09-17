const worksDAO=require('../model/worksDAO')
const router = require('koa-router')()
router.prefix('/works')

router.get('/',async(ctx)=>{
    let jsondata=worksDAO.getworks();
    ctx.render('wrokslist',{title:'作品信息表',data:jsondata})
})

module.exports=router