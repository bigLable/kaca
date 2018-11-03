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
    getOneUser: async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.set('content-type', 'application/json');
        console.log(ctx.request.body)
        let user = {};
        user.userEmail = ctx.request.body.userEmail;
        user.userPwd = ctx.request.body.userPwd;
        console.log(user.userEmail);
        let jsondata = await DB.getOneUser(user.userEmail);
        console.log(jsondata)
        ctx.body = {"code": 200, data: jsondata}

    },
    addUsers: async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.set('content-type', 'application/json')
        console.log(ctx.request.body)
        const cry = crypto.createHash('md5');
        cry.update(ctx.request.body.userPwd);
        var pawd = cry.digest('hex');
        let user = {};
        user.userName = ctx.request.body.userName;
        user.userPwd = pawd;
        user.userEmail = ctx.request.body.userEmail;
        user.userPhoneNum = ctx.request.body.userPhoneNum;
        user.userRegisterDate = ctx.request.body.userRegisterDate;
        console.log('加密密码' + pawd)
        let jsondata = await DB.addUsers(user);

        ctx.body = {code: 200, message: 'message', data: jsondata}
    },
/*      updateUsers: async (ctx, next) => {
          console.log('---------------')
          ctx.set('Access-Control-Allow-Origin','*');
          ctx.set('content-type','application/json')

          var form = new formidable.IncomingForm();
          form.uploadDir = '../public/headpic';   //设置文件存放路径
          form.multiples = true;  //设置上传多文件
          var filename = "";

          form.parse(ctx.req,async function (err, fields, files) {
              // console.log(files)
              //根据files.filename.name获取上传文件名，执行后续写入数据库的操作

              let now=new Date().toLocaleString()
              filename = files.filename.name;
              // console.log('LLLL'+files.filename.path)

              var src = path.join(__dirname, files.filename.path)//获取源文件全路径
              console.log("LLL"+src)
              // var fileDes = path.basename(files.filename.path,path(files.filename.name))
              fileDes = path.basename(files.filename.path, path.extname(filename)) +now+path.extname(filename);
              // console.log("PPPPPPPP"+fileDes)
              // pics = "public/headpic/" + fileDes
              // 更名同步方式
              fs.renameSync(src, path.join(path.parse(src).dir, fileDes))
              let userpic=fileDes
              console.log("fileDes"+fileDes)


              // src = path.join(files.filename.path);
              //
              // console.log("src : " + src)
              // console.log("dir ...........: " + path.join(path.parse(src).dir))
              // console.log("fileDes" + fileDes)
              // fs.rename(src, path.join(path.parse(src).dir,fileDes));
              // let str = `http://localhost:3000/myPic/${fileDes}`;


              // console.log("str : " + str);
              // console.log("fields : " + fields);
              // console.log("files:   " + files);
              const cry=crypto.createHash('md5');
              cry.update(fields.userPwd);
              var pawd=cry.digest('hex');
              let users = {}
              users.userID=fields.userId
              users.userSex=fields.userSex;
              users.userName = fields.userName;
              users.userPhoneNum = fields.userPhoneNum;
              users.userPwd = pawd;
              users.userPic = userpic;
              console.log('加密密码'+pawd)
              console.log(fields.userId)
              console.log(fields. userSex)
              console.log(fields.userName)
              console.log(fields.userPhoneNum)
              console.log(userpic)


              try{
                  let jsondata=  await DB.updateUsers(users);
                  //3.反馈结果
                  ctx.body = {"code": 200, "message": "ok", data: users}
                  // ctx.render('user', {data: jsondata})

              }catch (e) {
                  ctx.body = {"code": 500, "message": err.toString(), data: []}

              }
              if (err) {
                  ctx.body = '上传失败'
              }
          })
          ctx.body = '上传成功'
      },}*/
    updateUsers: async (ctx, next) => {
        console.log('---------------')
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.set('content-type', 'application/json')

        var form = new formidable.IncomingForm();
        form.uploadDir = '../public/headpic';   //设置文件存放路径
        form.multiples = true;  //设置上传多文件
        var filename = "";

        form.parse(ctx.req, async function (err, fields, files) {
            console.log(files)
            //根据files.filename.name获取上传文件名，执行后续写入数据库的操作
            // let now = moment.format('LLL')
// console.log(now+'时间')
            filename = files.filename.name;

            var src = path.join(__dirname, files.filename.path)//获取源文件全路径
            console.log("LLL" + src)
            var fileDes = path.basename(files.filename.path)    //  1.jpg

            // pics = "../../" + fileDes
            // var fileDes=pics+now+path.extname(filename)
            // 更名同步方式
            // fs.renameSync(src, path.join(path.parse(src).dir, fileDes))

            // console.log("pics"+pics)


            // src = path.join(files.filename.path);
            FileDes = path.basename(filename, path.extname(filename)) + path.extname(filename);
            // console.log("src : " + src)
            // console.log("dir ...........: " + path.join(path.parse(src).dir))
            // console.log("fileDes" + fileDes)
            fs.renameSync(src, path.join(path.parse(src).dir, FileDes));
            // let str = `http://localhost:3000/myPic/${fileDes}`;

            let userpic = fileDes
            // console.log("str : " + str);
            // console.log("fields : " + fields);
            // console.log("files:   " + files);
            const cry = crypto.createHash('md5');
            cry.update(fields.userPwd);
            var pawd = cry.digest('hex');
            let users = {}
            users.userID = fields.userID
            users.userSex = fields.userSex;
            users.userName = fields.userName;
            users.userPhoneNum = fields.userPhoneNum;
            users.userPwd = pawd;
            users.userPic = userpic;

            try {
                let jsondata = await DB.updateUsers(users);
                //3.反馈结果
                ctx.body = {"code": 200, "message": "ok", data: users}
                // ctx.render('user', {data: jsondata})

            } catch (e) {
                ctx.body = {"code": 500, data: []}

            }
            if (err) {
                ctx.body = '上传失败'
            }
        })
        ctx.body = '上传成功'

    }
}