const DB=require('../model/carDAO');
const form=require('formidable');
module.exports={

    addcar:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        ctx.set('content-type','application/json')
        ctx.session.shop=[];

       for(let i=0;i<ctx.session.shop.length;i++){
           ctx.session.shop[i]=[{shopID:ctx.query.shopID,countNum:ctx.query.countNum}]
       }
       ctx.body={code:200,message:'add ok',data:{}}
   },
    getAllcar:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        console.log('start')
        // for(let i=0;i<ctx.session.shop.length;i++){
            // let  jsondata=await DB.getcarshop(ctx.session.shop[i].shopID);
        ctx.set('content-type','application/json');
        let  jsondata=await DB.getcarshop(10001);
            console.log(jsondata)

            // ctx.body={code:200,message:'ok',data:jsondata,countNum:ctx.session.shop.countNum}
        ctx.body={code:200,message:'ok',data:jsondata}
        // }
        // ctx.set('Access-Control-Allow-Origin','*');
        //         // console.log('start')
        //         // // for(let i=0;i<ctx.session.shop.length;i++){
        //         // ctx.session.shopid=[]
        //         // let newShop=[]
        //         // ctx.session.shopid.push(ctx.query.ShopID)
        //         // for(let i=0;i<ctx.session.shopid.length;i++){
        //         //     let  jsondata=await DB.getcarshop(ctx.session.ShopID);
        //         //     console.log(jsondata)
        //         //     newShop.push(jsondata)
        //         // }
        //         // ctx.set('content-type','application/json');
        //         // ctx.body={code:200,message:'ok',data:newShop}
        //         //
        //         // // }

    },
    deletecar:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.deletecar(ctx.query.carId);

        ctx.body={code:200,message:'delete ok',data:jsondata}
    },
    updatecar:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.updatecar(ctx.query.aId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'delete ok',data:jsondata}
    }
}