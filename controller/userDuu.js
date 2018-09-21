const DB = require('../model/userDAO');
const form = require('formidable');
module.exports = {
    getUsers: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getUsers()
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    getOneUser: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getOneUser(ctx.query.id)
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    addUsers: async (ctx, next) => {
        console.log(ctx.request.body)
        let user = {};
        user.UserID = ctx.request.body.UserID;
        user.cName = ctx.request.body.cName;
        user.cPwd = ctx.request.body.cPwd;
        user.cEmail = ctx.request.body.cEmail;
        user.cPhoneNum = ctx.request.body.cPhoneNum;
        user.cPic = ctx.request.body.cPic;
        user.cRegisterDate = ctx.request.body.cRegisterDate;
        let jsondata =  await DB.addUsers(user);
        ctx.body = {code: 200, message: 'message', data: jsondata}
    },
    updateUsers: async (ctx, next) => {
        console.log(ctx.request.body)
        let user = {};
        user.cName = ctx.request.body.cName;
        user.cPwd = ctx.request.body.cPwd;
        user.cEmail = ctx.request.body.cEmail;
        user.cPhoneNum = ctx.request.body.cPhoneNum;
        user.cPic = ctx.request.body.cPic;
        user.cRegisterDate = ctx.request.body.cRegisterDate;
        user.UserID = ctx.request.body.UserID;
        let jsondata =await DB.updateUsers(user);
        ctx.body = {code: 200, message: 'message', data: jsondata}


    },
    deleteUsers: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.deleteUsers(ctx.query.id);
        ctx.set('content-type', 'application/json');
        ctx.body = {code: 200, message: 'delete ok', data: jsondata}
    }
}