const DAO=require('../model/DAO');

class DB {
    gethot(id) {
        //获取全部作品信息的方法
        return DAO('select shopName,shopImg,shopPrice from shop where shopId=?', [id])
    }
}
    module.exports= new DB();