const DB=require('../model/oderdetailsDAO')
const form=require('formidable');
module.exports={
    getAlloderdetail:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        ctx.set('content-type','application/json');
        console.log('start')
        let  jsondata=await DB.getAlloderdetail(ctx.query.userID);
        console.log(jsondata)

        ctx.body={code:200,message:'查询ok',data:jsondata}
    },
    addoderdetail:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
          DB.addoderdetail()
                ctx.body={code:200,message:'add ok',data:{} }
  },
    deleteoderdetail:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.deleteoderdetail(ctx.query.odertailId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    },
    updateoderdetail:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.updateoderdetail(ctx.query.detailId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    }
}