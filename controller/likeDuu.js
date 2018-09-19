const DB = require('../model/likeDAO');
const form = require('formidable');
module.exports = {

    addlike: async (ctx, next) => {
        console.log(ctx.request.body)
        let like = {};
        like.likeId = ctx.request.body.likeId;
        like.worksId = ctx.request.body.worksId;
        like.usedId = ctx.request.body.usedId;
        like.statu = ctx.request.body.statu;
        let jsondata =  await DB.addlike(like);
        ctx.body = {code: 200, message: 'message', data: jsondata}
    },
    deletelike: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.deletelike(ctx.query.id);
        ctx.set('content-type', 'application/json');
        ctx.body = {code: 200, message: 'delete ok', data: jsondata}
    }

}