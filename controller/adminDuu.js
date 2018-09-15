const DB=require('../model/adminDAO');
const form=require('formidable');
const crypto=require('crypto');
const moment=require('moment');
module.exports={
    getadmin:async (ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.getadmin(ctx.query.adminId)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    getAlladmin:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        console.log('start')
        let  jsondata=await DB.getAlladmin();
        console.log(jsondata)
        ctx.set('content-type','application/json');
        ctx.body=jsondata;
    },
    addadmin:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        ctx.set('content-type','application/json');
        let form= new form.IncomingForm();
        form.uploadDir='../public/headpic';

      const now=moment(new Date()).format('YYYYMMDDHHmmss');

        await  form.parse(ctx,(err,fileds,files)=>{
                let filename=files.headpic.name;
                let src=files.headpic.path;
                let press = path.join(__dirname,files.headpic.path)
                let pics=path.basename(filename,path.extname(filename))
                let fileDes='../'+'public'+pics+now+path.extname(filename)
                fs.renameSync(press,path.join(path.parse(src).dir,fileDes))
            }

            //  var src=files.headpic.path;
            // var des=path.join(__dirname,'../','public/sb',path.basename(src))
            //  fs.copyFile(src,des,function () {
            //      console.log('文件复制成功！！')
            //  });
            // var urL=path.join('../','sb',path.basename(src))
            const cry=crypto.createHash('md5');
            cry.update(fileds.Pawd);
            let pawd=cry.digest('hex');
            let Revalue={
                adminId:fileds.value1,
                adminName:fileds.value2,
                adminsPwd:pawd,
                adminsPic:fileds.value4,
                adminsEmail:fileds.value5,
                adminsPhoneNum:fileds.value6,
            }
            DB.addadmin(Revalue,(data)=>{
                ctx.body={code:200,message:'ok',data:{}}
            });
    },
    deleteadmin:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.deleteadmin(ctx.query.adminId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'ok',data:jsondata}
    },
    updateadmin:async(ctx)=>{
        ctx.set('Access-Control-Allow-Origin','*');
        let jsondata=await DB.updateadmin(ctx.query.adminId);
        ctx.set('content-type','application/json');
        ctx.body={code:200,message:'ok',data:jsondata}
    }
}