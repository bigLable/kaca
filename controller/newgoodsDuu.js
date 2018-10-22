const DB=require('../model/newgoodsDAO');
const form=require('formidable');
module.exports= {
    getnew: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getnew()
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    addgoods: async (ctx, next) => {
        console.log(ctx.request.body)
        let goods = {};
        goods.shopID = ctx.request.body.shopID;
        goods.shopType = ctx.request.body.shopType;
        goods.shopName = ctx.request.body.shopName;
        goods.shopImg = ctx.request.body.shopImg;
        goods.shopifo = ctx.request.body.shopifo;
        goods.shopPrice = ctx.request.body.shopPrice;
        goods.shopPara = ctx.request.body.shopPara;
        goods.commentId = ctx.request.body.commentId;
        goods.infoId = ctx.request.body.infoId;
        goods.shopXImg = ctx.request.body.shopXImg;
        goods.shopNum= ctx.request.body.shopNum;
        let jsondata =  await DB.addgoods(goods);
        ctx.body = {code: 200, message: 'message', data: jsondata}
    },
    updategoods: async (ctx, next) => {
        console.log(ctx.request.body)
        let goods = {};
        goods.shopType = ctx.request.body.shopType;
        goods.shopName = ctx.request.body.shopName;
        goods.shopImg = ctx.request.body.shopImg;
        goods.shopifo = ctx.request.body.shopifo;
        goods.shopPrice = ctx.request.body.shopPrice;
        goods.shopPara = ctx.request.body.shopPara;
        goods.commentId = ctx.request.body.commentId;
        goods.infoId = ctx.request.body.infoId;
        goods.shopXImg = ctx.request.body.shopXImg;
        goods.shopNum= ctx.request.body.shopNum;
        goods.shopID = ctx.request.body.shopID;
        let jsondata =await DB.updategoods(goods);
        ctx.body = {code: 200, message: 'message', data: jsondata}


    },
    deletegoods: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.deletegoods(ctx.query.id);
        ctx.set('content-type', 'application/json');
        ctx.body = {code: 200, message: 'delete ok', data: jsondata}
    }

}