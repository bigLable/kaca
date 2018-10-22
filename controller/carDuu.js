const DB=require('../model/carDAO');
const form=require('formidable');
const session=require('koa-session')
module.exports={
   //  addcar:async(ctx)=>{
   //      ctx.set('Access-Control-Allow-Origin','*');
   //      ctx.set('content-type','application/json')
   //      ctx.session.shop=[];
   //
   //     for(let i=0;i<ctx.session.shop.length;i++){
   //         ctx.session.shop[i]=[{shopID:ctx.query.shopID,countNum:ctx.query.countNum}]
   //     }
   //     ctx.body={code:200,message:'add ok',data:{}}
   // },
    getAllcar:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        console.log('start')
        ctx.set('content-type','application/json')

        let  jsondata=await DB.getcarshop(ctx.query.ShopID);

        ctx.body={code:200,message:'ok',data:jsondata}


    },
    deletecar:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.deletecar(ctx.query.carId);

        ctx.body={code:200,message:'delete ok',data:jsondata}
    },
    updatecar:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.updatecar(ctx.query.aId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    }
}