const DAO=require('../model/DAO');
class DB {
    getoder(oderIdId){
        return DAO('select * from orders where oderId=?',[oderId])
    }
    getAlloder(){
        return DAO('select * from orders',[])
    }
    addoder(oder){
        return DAO('insert into orders values(?,?,?)',[oder.oderId,oder.oderDate,oder.manaId])
    }
    deleteoder(oder){
        return DAO('delete orders where orderId=?',[oder.oderId])
    }
    updateoder(oder){
        return DAO('update orders set oderId=?,oderDate=?,manaId=?',[oder.oderId,oder.oderDate,oder.manaId])
    }
}
module.exports= new DB();