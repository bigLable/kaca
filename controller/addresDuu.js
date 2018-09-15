const DB=require('../model/addressDAO');
const form=require('formidable');
module.exports={
    getadres:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.getadres(ctx.query.aId)
        ctx.set('content-type','application/json');
         ctx.body=jsondata;
    },
    getAlladres:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        console.log('start')
        let  jsondata=await DB.getAlladres();
        console.log(jsondata)
        ctx.set('content-type','application/json');
         ctx.body=jsondata;
    },
    addadres:async(ctx)=>{
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
            DB.addadres(Revalue,(data)=>{
                ctx.body={code:200,message:'delete ok',data:{}}
            });

        })
    },
    delete:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.delete(ctx.query.aId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    },
    update:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.update(ctx.query.aId);
        ctx.set('content-type','application/json');
         ctx.body={code:200,message:'delete ok',data:jsondata}
    }
}