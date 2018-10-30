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
        let id=ctx.query.userId
        let  jsondata=await DB.getAlladres(id);
        console.log(jsondata)
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'查询地址 ok',data:jsondata};
    },
    addadres:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        ctx.set('content-type','application/json');
        console.log('到达此处'+ctx.query.adrename)
        let jsondata =await DB.addadres(ctx.query.adrename,ctx.query.userId);
        ctx.body={code:200,message:'add ok',data:jsondata}
      },
    deleteadres:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.delete(ctx.query.Adressid);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    },

}