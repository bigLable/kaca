const DB=require('../model/wxInfo');
const form=require('formidable');
module.exports={
    shopcid:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.shopcid(ctx)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    shopccontent:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.shopccontent(ctx)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    shopcdate:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.shopcdate(ctx)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },

}