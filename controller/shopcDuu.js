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
        let jsondata=await DB.shopccontent(ctx.query)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    shopcdate:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.shopcdate(ctx.query)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },

}