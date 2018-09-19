const DB = require('../model/worksDAO');
const form = require('formidable');
module.exports = {
    getworks: async (ctx) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        let jsondata = await DB.getworks()
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
        console.log(ctx.request.body)
        let works = {};
        works.worksId = ctx.request.body.worksId;
        works.worksPic = ctx.request.body.worksPic;
        works.worksauthor = ctx.request.body.worksauthor;
        works.worksDescribe = ctx.request.body.worksDescribe;
        works.worksEquipment = ctx.request.body.worksEquipment;
        works.worksDate = ctx.request.body.worksDate;
        let jsondata =  await DB.addWorks(works);
        ctx.body = {code: 200, message: 'message', data: jsondata}
    },
    updateworks: async (ctx, next) => {
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
    }
}