const DAO=require('../model/DAO');

class DB {
    gethot() {
        //获取热门商品信息的方法
        return DAO('select shopName,shopImg,shopPrice from shop where shopPara=(select max(shopPara) from shop)', [])
    }
}
    module.exports= new DB();