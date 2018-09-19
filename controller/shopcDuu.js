const DB=require('../model/shopCDAO');
const form=require('formidable');
module.exports={
    shopcid:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.shopcid(ctx.query.id)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    shopccontent:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.shopccontent(ctx.query.id)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    shopcdate:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.shopcdate(ctx.query.id)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    shoplabel:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.shoplabel(ctx.query.id)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    username:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.username(ctx.query.id)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },

}