const DAO=require('../model/DAO');

class DB {
    gethot() {
        //获取热门商品信息的方法
        return DAO('select shopID, shopName,shopImg,IMG1,shopPrice,shopPara from shop order by shopPrice desc limit 0,4', [])
    }
   newworks() {
        //获取最新作品信息的方法
        return DAO('select worksId,worksPic,worksauthor,worksDescribe,worksEquipment,worksDate from works  order by worksDate  desc limit 0,16', [])
    }
    recworks() {
        //获取最新作品信息的方法
        return DAO('select worksId,worksPic,worksauthor,worksDescribe,worksEquipment,worksDate from works  order by worksId asc limit 0,16', [])
    }
   hotworks() {
        //获取最新作品信息的方法
        return DAO('select worksId,worksPic,worksauthor,worksDescribe,worksEquipment,worksDate from works  order by worksDate  asc limit 0,16', [])
    }
}
    module.exports= new DB();