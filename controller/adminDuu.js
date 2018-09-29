const DB = require('../model/adminDAO');
const form = require('formidable');
module.exports = {
    getadmin: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getadmin()
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    getoneadmin: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getoneadmin(ctx.query.id)
        ctx.set('content-type', 'application/json');
        ctx.body = jsondata;
    },
    addadmin: async (ctx, next) => {
        console.log(ctx.request.body)
        let admin = {};
        admin.adminId = ctx.request.body.adminId;
        admin.adminName = ctx.request.body.adminName;
        admin.adminPwd = ctx.request.body.adminPwd;
        admin.adminPhone = ctx.request.body.adminPhone;
        admin.adminRegidate = ctx.request.body.adminRegidate;
        let jsondata =  await DB.addadmin(admin);
        ctx.body = {code: 200, message: 'message', data: jsondata}
    },
    updateadmin: async (ctx, next) => {
        console.log(ctx.request.body)
        let admin = {};
        admin.adminId = ctx.request.body.adminId;
        admin.adminName = ctx.request.body.adminName;
        admin.adminPwd = ctx.request.body.adminPwd;
        admin.adminPhone = ctx.request.body.adminPhone;
        admin.adminRegidate = ctx.request.body.adminRegidate;
        let jsondata =  await DB.updateadmin(admin);
        ctx.body = {code: 200, message: 'message', data: jsondata}
    },
    deleteadmin: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.deleteadmin(ctx.query.id);
        ctx.set('content-type', 'application/json');
        ctx.body = {code: 200, message: 'delete ok', data: jsondata}
    }
}