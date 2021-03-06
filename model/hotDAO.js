const DAO=require('../model/DAO');

class DB {
    gethot() {
        //获取热门商品信息的方法
        return DAO('select shopID, shopName,shopImg,IMG1,shopPrice,shopPara from shop order by shopPrice desc limit 0,4', [])
    }
   newworks() {
        //获取最新作品信息的方法
        return DAO('SELECT  works.worksId, works.worksPic,works.worksDescribe,works.worksEquipment,works.worksDate,users.userName  FROM `works`,users WHERE works.userid=users.userID order by worksDate  desc limit 0,16', [])
    }
    recworks() {
        //获取最新作品信息的方法
        return DAO('SELECT  works.worksId,works.worksPic,works.worksDescribe,works.worksEquipment,works.worksDate,users.userName  FROM `works`,users WHERE works.userid=users.userID  order by worksId  asc ', [])
    }
   hotworks() {
        //获取最新作品信息的方法
        return DAO('SELECT  works.worksId,works.worksPic,works.worksDescribe,works.worksEquipment,works.worksDate,users.userName  FROM `works`,users WHERE works.userid=users.userID  order by worksDate  asc limit 0,16', [])
    }
}
    module.exports= new DB();