const DB=require('../model/wxInfo');
const form=require('formidable');
module.exports={
    allwx:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.allwx();
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    wxGetid:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.wxGetid(ctx.query.id)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    wxGetFrom:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.wxGetFrom(ctx.query.id)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },

}