const DB=require('../model/oderDAO');
module.exports={
    getoder:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.getoder(ctx.query.oderId)
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'查询地址 ok',data:jsondata};
    },
    getAlloder:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        console.log('start')
        let  jsondata=await DB.getAlloder();
        console.log(jsondata)
        ctx.set('content-type','application/json');

        try{
            ctx.body={code:200,message:'查询地址 ok',data:jsondata};
        }catch (err) {
            ctx.body={code:500,message:err.message,data:[]};
        }
    },
    addoder:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let REV={
            orderDate:ctx.body.orderDate,
            manaId:ctx.body.manaId
        }

        console.log(REV)
          let jsondata=await  DB.addoder(REV);
          ctx.body={code:200,message:'add ok',data:jsondata}

    },
    deleteoder:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.deleteoder(ctx.query.orderId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    },
    updateoder:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        ctx.set('Access-Control-Allow-Origin','*');
        let REV={
            orderDate:ctx.query.orderDate,
            manaId:ctx.query.manaId,
            orderId:ctx.query.orderId
        }
        let jsondata=await DB.updateoder(REV)
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'update ok',data:jsondata}
    }
}