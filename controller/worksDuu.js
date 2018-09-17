const DB=require('../model/worksDAO');
const form=require('formidable');
module.exports= {
    getworks: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getworks()
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    getOneWorks:async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getOneWorks(ctx.query.id)
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    addWorks:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let form= new form.IncomingForm();
        await  form.parse(ctx,(err,fileds)=>{
            let Revalue={
                worksId:fileds.value1,
                wroksauthor:fileds.value2,
                wroksDescribe:fileds.value3,
                wroksEquipment:fileds.value4,
                wroksPageview:fileds.value5,
                wroksPoint:fileds.value6,
                wroksDate:fileds.value7
            }
            DB. addWorks(Revalue,(data)=>{
                ctx.body={code:200,message:'add ok',data:{}}
            });

        })
    }, delete:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.delete(ctx.query.id);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    }
}