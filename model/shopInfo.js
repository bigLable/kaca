const DAO =require('./DAO')
class DB{

    shopGetid(shopId){
        return DAO('select * from shop where shopId=?',[shopId])
    }
    shopGetpara(shopPara){
        return DAO('select * from shop where shopPara=?',[shopPara])
    }
    shopGprice(shopPrice){
        return DAO('select * from shop where shopPrice=?',[shopPrice])
    }

}
module.exports= new DB();