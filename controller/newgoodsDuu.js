const DB=require('../model/newgoodsDAO');
const form=require('formidable');
module.exports= {
    getnew: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getnew()
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    }
}