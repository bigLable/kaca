const DAO=require('../model/DAO');
class DB {

    getAllcar(){
        return DAO('select s.*,c.* from shop s LEFT JOIN car c ON s.ShopID=c.carId ',[])
    }

    deletecar(trolleyId){
        return DAO('delete from car where carId=?',[trolleyId])
    }

}
module.exports= new DB();
