const DB=require('../model/managenmentDAO');
const form=require('formidable');
module.exports={
    getBacktage:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.getBacktage(ctx.query.aId)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    getAllBacktage:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        console.log('start')
        let  jsondata=await DB.getAllBacktage();
        console.log(jsondata)
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'查询 ok',data:{}}
    },
    addBacktage:async(ctx)=>{
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
            DB.addBacktage(Revalue,(data)=>{
                ctx.body={code:200,message:'delete ok',data:{}}
            });

        })
    },
    deleteBacktage:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.deleteBacktage(ctx.query.aId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    },
    updateBacktage:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.updateBacktage(ctx.query.aId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    }
}