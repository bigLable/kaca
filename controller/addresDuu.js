const DB=require('../model/addressDAO');
const form=require('formidable');
module.exports={
    getadres:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.getadres(ctx.query.aId)

        console.log(jsondata)
        ctx.set('content-type','application/json');
         ctx.body={code:200,message:'查询地址 ok',data:jsondata};

    },
    getAlladres:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        console.log('start')
        let  jsondata=await DB.getAlladres();
        console.log(jsondata)
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'查询地址 ok',data:jsondata};
    },
    addadres:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
             let Revalue={
                 aId:ctx.query.aId,
                 aId:ctx.query.aId,
                 aId:ctx.query.aId,
                 aId:ctx.query.aId
             }

            DB.addadres(Revalue,(data)=>{
                ctx.body={code:200,message:'add ok',data:{}}
            });


    },
    deleteadres:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.delete(ctx.query.aId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    },
    updateadres:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.update(ctx.query.aId);
        ctx.set('content-type','application/json');
         ctx.body={code:200,message:'delete ok',data:jsondata}
    }
}