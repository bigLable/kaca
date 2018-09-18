const DAO=require('../model/DAO');
class DB {

    getAllcar(){
        return DAO('select * from trolleys',[])
    }
    addcar(trolley){
        return DAO('insert into trolleys(trolleytotal,customers_cId,orderId,manaId) values(?,?,?,?)',[trolley.trolleytotal,trolley.customers_cId,trolley.orderId,trolley.manaId])
    }
    deletecar(trolleyId){
        return DAO('delete from trolleys where trolleyId=?',[trolleyId])
    }

}
module.exports= new DB();
