const DB=require('../model/wxInfo');
const form=require('formidable');
module.exports={
    shopcid:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.shopcid(ctx.shopCId)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    shopccontent:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.shopccontent(ctx.shopCContent)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    shopcdate:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.shopcdate(ctx.shopCDate)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },

}