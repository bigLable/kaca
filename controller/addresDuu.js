const DB=require('../model/addressDAO');

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
        ctx.set('content-type','application/json');
             let Revalue={
                 aName:ctx.query.aName,
                 cId:ctx.query.cId,
                 manaId:ctx.query.manaId
             }
             console.log('到达此处'+Revalue)

            let jsondata =await DB.addadres(Revalue);
        ctx.body={code:200,message:'add ok',data:jsondata}
      },
    deleteadres:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.delete(ctx.query.aId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    },
    updateadres:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let REV={
            aId:ctx.query.aId,
            aName:ctx.query.aName,
            cId:ctx.query.cId,
            manaId:ctx.query.manaId
        }
        let jsondata=await DB.update(REV);
        ctx.set('content-type','application/json');
         ctx.body={code:200,message:'delete ok',data:jsondata}
    }
}