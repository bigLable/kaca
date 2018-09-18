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
                worksauthor:fileds.value2,
                worksDescribe:fileds.value3,
                worksEquipment:fileds.value4,
                worksPageview:fileds.value5,
                worksPoint:fileds.value6,
                worksDate:fileds.value7
            }
            DB. addWorks(Revalue,(data)=>{
                ctx.body={code:200,message:'add ok',data:{}}
            });

        })
    },
    deleteworks:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.deleteworks(ctx.query.id);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    }
}