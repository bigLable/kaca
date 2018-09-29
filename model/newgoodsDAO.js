const DAO=require('../model/DAO');

class DB {
    getnew() {
        //获取最新商品的方法
        return DAO('select shopName,shopImg,shopPrice from shop order by ShopID  desc limit 0,6', [])
    }
}
module.exports= new DB();