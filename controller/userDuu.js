const DB = require('../model/userDAO');
const formidable = require('formidable');
var fs =require('fs');
var path=require('path');
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
        ctx.set('Access-Control-Allow-Origin','*');
        ctx.set('content-type','application/json')
        var form=new formidable.IncomingForm()
        form.multiples=false;
        form.uploadDir='../public/headpic';
        form.multiples = false
        let users={}
        form.parse(ctx.req,function (err,fileds,files) {
            console.log('-----------------图片-------'+files.headpic.name)
            console.log('测试....' + files.headpic.length)

                var filename=files.headpic.name;
                var src=files.headpic.path;
                var press = path.join(__dirname,files.headpic.path)

                var pics=path.basename(filename,path.extname(filename))
                var fileDes='../'+'public'+pics+path.extname(filename)

                fs.renameSync(press,path.join(path.parse(src).dir,fileDes))
                console.log('press.............'+press);

            let user = { };
            user.userName = fileds.userName;
            user.userPwd = fileds.userPwd;
            // user.userEmail = ctx.request.body.userEmail;
            user.userSex = fileds.userSex;
            user.userPhoneNum =fileds.userPhoneNum;
            user.userPic = fileds.userPic;
            // user.userRegisterDate = ctx.request.body.userRegisterDate;
            user.userID = fileds.userID;
            user.userPic=fileDes;

               users=user
        })

        let  jsondata = await DB.updateUsers(users);
        ctx.body = {code: 200, message: 'message', data: jsondata}
    }
}