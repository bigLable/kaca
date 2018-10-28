var DB = require('../model/userDAO');
var formidable = require('formidable');
var fs =require('fs');
var path=require('path');
var crypto=require('crypto');

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
        //密码加密
        var pwd =ctx.request.body.userPwd;
        const hash=crypto.createHash('md5');
        hash.update(pwd);
         pwd=hash.digest('hex');
        let user ={};
        user.userEmail = ctx.request.body.userEmail;
        user.userPwd = pwd;
        console.log(pwd)
        console.log(user.userEmail);
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
        console.log('---------------')
        ctx.set('Access-Control-Allow-Origin','*');
        ctx.set('content-type','application/json')
        /* var form=new formidable.IncomingForm()
         form.multiples=false;
         form.uploadDir='../public/headpic';
         form.multiples = false

         form.parse(ctx.req,async function (err,fileds,files) {
             console.log('------------------111',ctx.req)
             console.log('-----------------图片-------'+files.headpic.name)
             console.log('测试....' + files.headpic.length)

                 var filename=files.headpic.name;
                 var src=files.headpic.path;
                 var press = path.join(__dirname,files.headpic.path)

                 var pics=path.basename(filename,path.extname(filename))
                 var fileDes='../'+'public'+pics+path.extname(filename)

                 fs.renameSync(press,path.join(path.parse(src).dir,fileDes))
                 console.log('press.............'+press);*/

/*
            let user = {};
            user.userName = fileds.userName;
            user.userPwd = fileds.userPwd;
            // user.userEmail = ctx.request.body.userEmail;
            user.userSex = fileds.userSex;
            user.userPhoneNum =fileds.userPhoneNum;
            user.userPic = fileds.userPic;
            // user.userRegisterDate = ctx.request.body.userRegisterDate;
            user.userID = fileds.userID;
            user.userPic=fileDes;

            // users=user
            console.log('**************'+JSON.stringify(user))
            let  jsondata = await DB.updateUsers(user);
            ctx.body = {code: 200, message: 'message', data: jsondata}
        },

        ctx.body = '上传成功'*/
        var form = new formidable.IncomingForm();
        form.uploadDir = '../public/myPic';   //设置文件存放路径
        form.multiples = true;  //设置上传多文件
        var filename = "";
        var src = "";
        var fileDes = "";
        form.parse(ctx.req, async function (err, fields, files) {
            // console.log(files)
            //根据files.filename.name获取上传文件名，执行后续写入数据库的操作
            filename = files.filename.name;
            src = path.join(__dirname,'../',files.filename.path);
            fileDes = path.basename(filename, path.extname(filename)) + moment(new Date()).format("YYYYMMDDHHMMSS") + path.extname(filename);
            console.log("src : " + src)
            console.log("dir : " + path.join(path.parse(src).dir))
            console.log("fileDes" + fileDes)
            fs.rename(src, path.join(path.parse(src).dir,fileDes));
            let str = `http://localhost:3000/myPic/${fileDes}`;
            console.log("str : " + str);
            console.log("fields : " + fields);
            console.log("mId:   " + fields.mId);
            let user = {}
            user.userName = fields.userName;
            user.userPhoneNum = fields.userPhoneNum;
            user.userPwd = fields.userPwd;
            user.userPic = str;
            try {
                await await DB.updateUsers(user);
                ctx.body={"code":200, "message":"ok", data:[]};
            } catch (e) {
                ctx.body={"code":500, "message":"err"+e.message, data:[]};
            }

            // //根据fileds.mydata获取上传表单元素的数据，执行写入数据库的操作
        })
}
}