const DAO =require('./DAO')
class DB{
    allshop(){
        return DAO('select * from shop ',[])
    }
    shopsearch(id){
        return DAO('select * from shop where shopName like "%(?)%" ',[id])
    }
    shopGetid(id){
        return DAO('select * from shop where shopId=?',[id])
    }
    shopGetpara(id){
        return DAO('select * from shop where shopPara=?',[id])
    }
    shopGprice(id){
        return DAO('select * from shop where shopPrice=?',[id])
    }
    shopXImg(id){
        return DAO('select * from shop where shopXImg=?',[id])
    }
    shopbuy(buy){
        return DAO('call proc_shop_transInfo(?,?,?,?) ',[buy.p_shopName,buy.p_shopType,buy.p_transType,buy.p_transNum,])
    }
    allIMG(){
        return DAO('select * from img ',[])
    }

}
module.exports= new DB();