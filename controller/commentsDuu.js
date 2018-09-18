const DB=require('../model/commentsDAO');
const form=require('formidable');
module.exports= {
    getcomments: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getcomments()
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    getOneComments:async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB. getOneComments(ctx.query.id)
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    addcomments:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let form= new form.IncomingForm();
        await  form.parse(ctx,(err,fileds)=>{
            let Revalue= {
                commentsId: fileds.value1,
                commentsContent: fileds.value2,
                commentsDate: fileds.value3,
                worksId: fileds.value4,
                cId: fileds.value5,
            }
            DB. addcomments(Revalue,(data)=>{
                ctx.body={code:200,message:'add ok',data:{}}
            });

        })
    },
    deletecomments:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.deletecomments(ctx.query.id);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    }
}