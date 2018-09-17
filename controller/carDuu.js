const DB=require('../model/carDAO');
const form=require('formidable');
module.exports={
    getcar:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.getcar(ctx.query.aId)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    getAllcar:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        console.log('start')
        let  jsondata=await DB.getAllcar();
        console.log(jsondata)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    addcar:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        // let  jsondata=await DB.getAlladres();
        // ctx.set('content-type','application/json');
        // await ctx.body=jsondata;
        let form= new form.IncomingForm();
        await  form.parse(ctx,(err,fileds)=>{
            let Revalue={
                aId:fileds.value1,
                aName:fileds.value2,
                customers_cId:fileds.value3
            }
            DB.addcar(Revalue,(data)=>{
                ctx.body={code:200,message:'delete ok',data:{}}
            });

        })
    },
    deletecar:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.deletecar(ctx.query.aId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    },
    updatecar:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.updatecar(ctx.query.aId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    }
}