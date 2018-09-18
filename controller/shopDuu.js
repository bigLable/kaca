const DB=require('../model/shopInfo');
const form=require('formidable');
module.exports={
    shopGetid:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.shopGetid(ctx);
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    shopGetpara:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.shopGetpara(ctx);
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },

}