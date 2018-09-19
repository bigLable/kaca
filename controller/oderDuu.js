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
        let REV={
             OderID:ctx.request.body.OderID,
            Manangementid:ctx.request.body.Manangementid,
            UserID:ctx.request.body.UserID,
            oderdata:ctx.request.body.oderdata
        }

        console.log(REV)
          let jsondata=await  DB.addoder(REV);
          ctx.body={code:200,message:'add ok',data:jsondata}

    },
    deleteoder:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.deleteoder(ctx.query.OderID);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    },
    updateoder:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        ctx.set('Access-Control-Allow-Origin','*');
        let REV={
            Manangementid:ctx.query.Manangementid,
            UserID:ctx.query.UserID,
            oderdata:ctx.query.oderdata,
            OderID:ctx.query.OderID
        }
        console.log(REV)
        let jsondata=await DB.updateoder(REV)
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'update ok',data:jsondata}
    }
}