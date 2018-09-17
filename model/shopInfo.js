const DAO =require('./DAO')
class DB{

    shopGetid(shopId){
        return DAO('select * from shop where shopId=?',[shopId])
    }

}
module.exports= new DB();