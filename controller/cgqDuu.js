const DB=require('../model/cgqInfo');
const form=require('formidable');
module.exports={
    cgqGetid:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.cgqGetid(ctx);
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    cgqj:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.cgqj(ctx);
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    cgqtype:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.cgqtype(ctx);
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    cgqsize:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.cgqsize(ctx);
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    cgqmax:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.cgqmax(ctx);
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    cgqd:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.cgqd(ctx);
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    cgqtime:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.cgqtime(ctx);
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
}