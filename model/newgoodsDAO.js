const DAO=require('../model/DAO');

class DB {
    getnew() {
        //获取最新商品的方法
        return DAO('select shopID,shopName,shopImg,shopPrice,shopPara from shop order by ShopID  desc limit 0,9', [])
    }
    //添加一个商品信息的方法
    addgoods(goods){
        return DAO('insert into  shop values(?,?,?,?,?,?,?,?,?,?,?)',
            [goods.shopID,goods.shopType,goods.shopName,goods.shopImg,goods.shopifo,goods.shopPrice,goods.shopPara,goods.commentId,goods.infoId,goods.shopXImg,goods.shopNum])
    }
    //删除一个商品信息
    deletegoods (id){
        return DAO('delete from shop where shopID=?',[id])
    }
    //修改一个商品信息
    updategoods(goods){
        return DAO('update shop set shopType=?,shopName=?,shopImg=?,shopifo=?,shopPrice=? ,shopPara=?,commentId=?,infoId=?,shopXImg=?,shopNum=? where shopID=?',
            [goods.shopType,goods.shopName,goods.shopImg,goods.shopifo,goods.shopPrice,goods.shopPara,goods.commentId,goods.infoId,goods.shopXImg,goods.shopNum,goods.shopID])
    }
}
module.exports= new DB();