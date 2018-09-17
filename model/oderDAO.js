const DAO=require('../model/DAO');
class DB {
    getoder(orderId){
        return DAO('select * from orders where orderId=?',[orderId])
    }
    getAlloder(){
        return DAO('select * from orders',[])
    }
    addoder(orde){
        return DAO('insert into orders(adminName,adminsPwd,adminspic,manaId) values(?,?)',[orde.orderDate,orde.manaId])
    }
    deleteoder(adminId){
        return DAO('delete from admins where adminId=?',[adminId])
    }
    updateoder(oder){
        return DAO('update orders set orderDate=?,manaId=? where orderId=?',[oder.orderDate,oder.manaId,oder.orderId])
    }
}
module.exports= new DB();