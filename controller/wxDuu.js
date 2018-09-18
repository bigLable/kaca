const DB=require('../model/wxInfo');
const form=require('formidable');
module.exports={
    wxGetid:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.wxGetid(ctx.query)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    wxGetFrom:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.wxGetFrom(ctx.query)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },

}