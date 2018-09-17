const DB=require('../model/oderDAO');
const form=require('formidable');
module.exports= {
    getoder: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getoder(ctx.query.aId)
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    getAlloder: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        console.log('start')
        let jsondata = await DB.getAlloder();
        console.log(jsondata)
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    addoder: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        // let  jsondata=await DB.getAlladres();
        // ctx.set('content-type','application/json');
        // await ctx.body=jsondata;
        let form = new form.IncomingForm();
        await  form.parse(ctx, (err, fileds) => {
            let Revalue = {
                oderId: fileds.value1,
                oderDate: fileds.value2,
                manaId: fileds.value3
            }
            DB.addoder(Revalue, (data) => {
                ctx.body = {code: 200, message: 'delete ok', data: {}}
            });

        })
    },
    deleteoder: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.deleteoder(ctx.query.oderId);
        ctx.set('content-type', 'application/json');
        ctx.body = {code: 200, message: 'delete ok', data: jsondata}
    },
    updateoder: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.updateoder(ctx.query.oderId);
        ctx.set('content-type', 'application/json');
        ctx.body = {code: 200, message: 'delete ok', data: jsondata}
    }
}