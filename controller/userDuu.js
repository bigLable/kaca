var DB = require('../model/userDAO');
var formidable = require('formidable');
var fs =require('fs');
var path=require('path');
var crypto=require('crypto');
const moment = require('moment');//用于显示时间

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
        user.userPwd = ctx.request.body.userPwd;
        console.log(user.userEmail);
        let jsondata =  await DB.getOneUser(user.userEmail);
        console.log(jsondata)
        ctx.body ={"code":200,data:jsondata}

    },
    addUsers: async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin','*');
        ctx.set('content-type','application/json')
        console.log(ctx.request.body)
        const cry=crypto.createHash('md5');
        cry.update(ctx.request.body.userPwd);
        var pawd=cry.digest('hex');
        let user = {};
        user.userName = ctx.request.body.userName;
        user.userPwd = pawd;
        user.userEmail = ctx.request.body.userEmail;
        user.userPhoneNum = ctx.request.body.userPhoneNum;
        user.userRegisterDate = ctx.request.body.userRegisterDate;
        console.log('加密密码'+pawd)
        let jsondata =  await DB.addUsers(user);

        ctx.body = {code: 200, message: 'message', data: jsondata}
    },
    updateUsers: async (ctx, next) => {
        console.log('---------------')
        ctx.set('Access-Control-Allow-Origin','*');
        ctx.set('content-type','application/json')

        var form = new formidable.IncomingForm();
        form.uploadDir = '../public/headpic';   //设置文件存放路径
        form.multiples = true;  //设置上传多文件

        form.parse(ctx.req,async function (err, fields, files) {

            let heapicName=files.filename.name
            console.log("头像名称"+heapicName);
            var now=moment(new Date()).format('YYYYMMDDHHmmss');
            let comppath=path.join(__dirname,files.filename.path)
            console.log(comppath+'完整路径');
            //新名
            let newname=path.basename(heapicName,path.extname(heapicName))+now+path.extname(heapicName)
            console.log('LL'+newname);
            let newp=path.join(__dirname,'../public/headpic/'+newname)
            console.log(newp+'新路径完整')

            //重命名

            fs.renameSync(comppath,newp)
            const cry=crypto.createHash('md5');
            cry.update(fields.userPwd);
            var pawd=cry.digest('hex');
            let users = {}
            users.userID=fields.userId;
            users.userSex=parseInt(fields.userSex);
            users.userName = fields.userName;
            users.userPhoneNum = fields.userPhoneNum;
            users.userPwd = pawd;
            users.userPic = newname;
            console.log('加密密码'+pawd)
            console.log(fields.userId)
            console.log(fields.userSex)
            console.log(fields.userName)
            console.log(fields.userPhoneNum)
            console.log(newname)


            try{
                let jsondata=  await DB.updateUsers(users);
                //3.反馈结果
                ctx.body = {"code": 200, "message": "ok", data: users}
                // ctx.render('user', {data: jsondata})

            }catch (e) {
                ctx.body = {"code": 500, "message": err, data: []}

            }
            if (err) {
                ctx.body = '上传失败'
            }
        })
        ctx.body = '上传成功'
    },

}