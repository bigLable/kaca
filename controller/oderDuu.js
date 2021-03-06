const DB=require('../model/oderDAO');
module.exports={
    getoder:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.getoder(ctx.query.OderID)
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'特定查询 ok',data:jsondata};
    },
    getAlloder:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        console.log('start')
        let  jsondata=await DB.getAlloder();
        console.log(jsondata)
        ctx.set('content-type','application/json');

        try{
            ctx.body={code:200,message:'查询 ok',data:jsondata};
        }catch (err) {
            ctx.body={code:500,message:err.message,data:[]};
        }
    },
    addoder:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        ctx.set('content-type','application/json');
        let oder = {}
            oder.userId=ctx.request.body.userId
           oder.shopId=ctx.request.body.shopId
           oder.shopnum=ctx.request.body.shopnum
           oder.adre=ctx.request.body.adre
           // console.log('orde的id'+orde)
          let jsondata=await  DB.addoder(oder);
          ctx.body={code:200,message:'add ok',data:jsondata}

    },
    deleteoder:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.deleteoder(ctx.query.OderID);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    }
}