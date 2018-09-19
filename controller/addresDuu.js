const DB=require('../model/addressDAO');

module.exports={
    getadres:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.getadres(ctx.query.Adressid)

        console.log(jsondata)
        ctx.set('content-type','application/json');
         ctx.body={code:200,message:'特定查询地址 ok',data:jsondata};

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
        ctx.set('content-type','application/json');
             let Revalue={
                 adrename:ctx.query.adrename,
                 Adressid:ctx.query.Adressid,

             }
             console.log('到达此处'+Revalue)

            let jsondata =await DB.addadres(Revalue);
        ctx.body={code:200,message:'add ok',data:jsondata}
      },
    deleteadres:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.delete(ctx.query.Adressid);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    },
    updateadres:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let REV={
            adrename:ctx.query.adrename,
            Adressid:ctx.query.Adressid,
        }
        let jsondata=await DB.update(REV);
        ctx.set('content-type','application/json');
         ctx.body={code:200,message:'update ok',data:jsondata}
    }
}