const DB=require('../model/oderdetailsDAO')
const form=require('formidable');
module.exports={
    getoderdetail:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.getoderdetail(ctx.query.oderId)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    getAlloderdetail:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        console.log('start')
        let  jsondata=await DB.getAlloderdetail();
        console.log(jsondata)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    addoderdetail:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        // let  jsondata=await DB.getAlladres();
        // ctx.set('content-type','application/json');
        // await ctx.body=jsondata;
        let form= new form.IncomingForm();
        await  form.parse(ctx,(err,fileds)=>{
            let Revalue={
                oderId:fileds.value1,
                oderDate:fileds.value2,
                manaId:fileds.value3
            }
            DB.addoderdetail(Revalue,(data)=>{
                ctx.body={code:200,message:'delete ok',data:{}}
            });

        })
    },
    deleteoderdetail:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.deleteoderdetail(ctx.query.detailId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    },
    updateoderdetail:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.updateoderdetail(ctx.query.detailId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    }
}