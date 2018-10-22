const DB=require('../model/hotDAO');
const form=require('formidable');
module.exports= {
    gethot: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.gethot()
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
   newworks: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.newworks()
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
   recworks: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.recworks()
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
  hotworks: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.hotworks()
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    }
}