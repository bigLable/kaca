const DB=require('../model/shopInfo');
const form=require('formidable');
module.exports={
    shopGetid:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.shopGetid(ctx.query.aId);
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    shopGetpara:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.shopGetpara(ctx.query.aId);
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },

}