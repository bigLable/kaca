const DB=require('../model/hotworksDAO');
const form=require('formidable');
module.exports= {
    gethotworks: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.gethotworks()
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    }
}