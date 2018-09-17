const DB=require('../model/hotDAO');
const form=require('formidable');
module.exports= {
    gethot: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.gethot(ctx.query.id)
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    }
}