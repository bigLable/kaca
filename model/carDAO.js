const DAO=require('../model/DAO');
class DB {

    getAllcar(){
        return DAO('select SUM(e1.shopPrice) FROM shop e1 LEFT JOIN orders e2  on e1.shopId=e2.orderId ',[])
    }
    addcar(trolley){
        return DAO('insert into trolleys(trolleytotal,shopcId,orderId,manaId) values(?,?,?,?)',[trolley.trolleytotal,trolley.shopcId,trolley.orderId,trolley.manaId])
    }
    deletecar(trolleyId){
        return DAO('delete from trolleys where trolleyId=?',[trolleyId])
    }

}
module.exports= new DB();
