const DB=require('../model/oderdetailsDAO')
const form=require('formidable');
module.exports={
    getAlloderdetail:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        console.log('start')
        let  jsondata=await DB.getAlloderdetail();
        console.log(jsondata)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
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