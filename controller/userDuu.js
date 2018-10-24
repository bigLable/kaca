const DB = require('../model/userDAO');
const form = require('formidable');
module.exports = {
    getUsers: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getUsers()
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    getOneUser: async (ctx,next) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.set('content-type','application/json');
        console.log(ctx.request.body)
        let user ={};
        user.userEmail = ctx.request.body.userEmail;
        console.log(user.userEmail);
        // user.userPwd = ctx.request.body.userPwd;
        let jsondata =  await DB.getOneUser(user.userEmail);
        console.log(jsondata)
        ctx.body ={"code":200,data:jsondata}

    },
    addUsers: async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin','*');
        ctx.set('content-type','application/json')
        console.log(ctx.request.body)
        let user = {};
        user.userName = ctx.request.body.userName;
        user.userPwd = ctx.request.body.userPwd;
        user.userEmail = ctx.request.body.userEmail;
        user.userPhoneNum = ctx.request.body.userPhoneNum;
        let jsondata =  await DB.addUsers(user);

        ctx.body = {code: 200, message: 'message', data: jsondata}
    },
    updateUsers: async (ctx, next) => {
        console.log(ctx.request.body)
        let user = {};
        user.userName = ctx.request.body.userName;
        user.userPwd = ctx.request.body.userPwd;
        user.userEmail = ctx.request.body.userEmail;
        user.userSex = ctx.request.body.userSex;
        user.userPhoneNum = ctx.request.body.userPhoneNum;
        user.userPic = ctx.request.body.userPic;
        user.userRegisterDate = ctx.request.body.userRegisterDate;
        user.userID = ctx.request.body.userID;
        let jsondata =await DB.updateUsers(user);
        ctx.body = {code: 200, message: 'message', data: jsondata}
    }
}