const DB = require('../model/shopInfo');
const form = require('formidable');
module.exports = {
    allshop: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.allshop();
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    shopGetid: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.shopGetid(ctx.query.id);
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    shopGetpara: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.shopGetpara(ctx.query.id);
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    shopGprice: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.shopGprice(ctx.query.id);
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    shopXImg: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.shopXImg(ctx.query.id);
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    shopbuy: async (ctx, next) => {
        console.log(ctx.request.body)
        let buy = {};
        buy.p_shopName = ctx.request.body.p_shopName;
        buy.p_shopType = ctx.request.body.p_shopType;
        buy.p_transType = ctx.request.body.p_transType;
        buy.p_transNum = ctx.request.body.p_transNum;
        let jsondata = await DB.shopbuy(buy);
        ctx.body = {code: 200, message: 'message', data: jsondata}
    }

}