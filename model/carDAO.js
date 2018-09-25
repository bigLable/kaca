const DAO=require('../model/DAO');
class DB {

    getcarshop(shopid){
        return DAO('call getCarshop(?)',[shopid])
    }

    deletecar(trolleyId){
        return DAO('delete from car where carId=?',[trolleyId])
    }

}
module.exports= new DB();
