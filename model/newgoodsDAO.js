const DAO=require('../model/DAO');

class DB {
    getnew() {
        //获取全部作品信息的方法
        return DAO('select shopName,shopImg,shopPrice from shop where shopId=(select max(shopId) from shop)', [])
    }
}
module.exports= new DB();