const DAO=require('../model/DAO');

class DB {
    gethot() {
        //获取热门商品信息的方法
        return DAO('select shopName,shopImg,shopPrice from shop order by shopNum  desc limit 0,6)', [])
    }
}
    module.exports= new DB();