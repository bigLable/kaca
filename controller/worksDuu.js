const DB = require('../model/worksDAO');
const formidable = require('formidable');
const fs =require('fs');
const path=require('path');
const crypto=require('crypto');
const moment = require('moment');//用于显示时间
module.exports = {
    getworks: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getworks()
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    getpic: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getpic()
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    getOneWorks: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getOneWorks(ctx.query.id)
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    addWorks: async (ctx, next) => {
        console.log('---------------')
        ctx.set('Access-Control-Allow-Origin','*');
        ctx.set('content-type','application/json')

        var form = new formidable.IncomingForm();
        form.uploadDir = '../public/img';   //设置文件存放路径
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
            let newp=path.join(__dirname,'../public/img/'+newname)
            console.log(newp+'新路径完整')

            //重命名

            fs.renameSync(comppath,newp)

            let works = {}
            works.worksId=fields.worksId;
            works.worksPic = newname;
            works.userid= fields.userid;
            works.worksDescribe = fields.worksDescribe;
            works.worksEquipment = fields.worksEquipment;
            works.worksDate = fields.worksDate;

            console.log(fields.worksId)
            console.log(fields.userid)
            console.log(fields.worksDescribe)
            console.log(fields.worksEquipment)
            console.log(newname)
            console.log(fields.worksDate)


            try{
                let jsondata=  await DB.addWorks(works);
                //3.反馈结果
                ctx.body = {"code": 200, "message": "ok", data:works}
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
    updateworks: async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin','*');
        ctx.set('content-type','application/json');
        console.log(ctx.request.body)
        let work = {};
        work.worksPic = ctx.request.body.worksPic;
        work.worksauthor = ctx.request.body.worksauthor;
        work.worksDescribe = ctx.request.body.worksDescribe;
        work.worksEquipment = ctx.request.body.worksEquipment;
        work.worksDate = ctx.request.body.worksDate;
        work.worksId = ctx.request.body.worksId;
        let jsondata =await DB.updateworks(work);
        ctx.body = {code: 200, message: 'message', data: jsondata}


    },
    deleteworks: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.deleteworks(ctx.query.id);
        ctx.set('content-type', 'application/json');
        ctx.body = {code: 200, message: 'delete ok', data: jsondata}
    },

    getnewworks: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getnewworks()
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },


}