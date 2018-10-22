const DB = require('../model/commentsDAO');
const form = require('formidable');
module.exports = {
    getcomments: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getcomments()
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    getOneComments: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getOneComments(ctx.query.id)
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    addcomments: async (ctx, next) => {
        console.log(ctx.request.body)
        let comments = {};
        comments.commentsId=ctx.request.body.commentsId;
        comments.commentsContent=ctx.request.body.commentsContent;
        comments.commentsDate=ctx.request.body.commentsDate;
        comments.UserID=ctx.request.body.UserID;
        comments.worksId=ctx.request.body.worksId;
        let jsondata = DB.addcomments(comments);
        ctx.body = {code: 200, message: 'message', data: jsondata}
    },
    deletecomments: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.deletecomments(ctx.query.id);
        ctx.set('content-type', 'application/json');
        ctx.body = {code: 200, message: 'delete ok', data: jsondata}
    },
    getcom: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getcom(ctx.query.id)
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
}