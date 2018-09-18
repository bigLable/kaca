const DAO =require('./DAO')
class DB{

    shopGetid(shopId){
        return DAO('select * from shop where shopId=?',[shopId])
    }
    shopGetpara(shopPara){
        return DAO('select * from shop where shopPara=?',[shopPara])
    }

}
module.exports= new DB();