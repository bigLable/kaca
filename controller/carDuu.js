const DB=require('../model/carDAO');
const form=require('formidable');
module.exports={
    getcar:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.getcar(ctx.query.trolleyId)
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'ok',data:jsondata};
    },
    getAllcar:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        console.log('start')
        let  jsondata=await DB.getAllcar();
        console.log(jsondata)
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'ok',data:jsondata}
    },
    addcar:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        // let  jsondata=await DB.getAlladres();
        // ctx.set('content-type','application/json');
        // await ctx.body=jsondata;
        // let form= new form.IncomingForm();
        // await  form.parse(ctx,(err,fileds)=>{
            let Revalue={
                trolleytotal:ctx.request.body.trolleytotal,
                shopcId:ctx.request.body.shopcId,
                orderId:ctx.request.body.orderId,
                manaId:ctx.request.body.manaId
            }
            DB.addcar(Revalue);
        ctx.set('content-type','application/json')
        ctx.body={code:200,message:'add ok',data:{}}


        // })
    },
    deletecar:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.deletecar(ctx.query.trolleyId);

        ctx.body={code:200,message:'delete ok',data:jsondata}
    },
    updatecar:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.updatecar(ctx.query.aId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    }
}