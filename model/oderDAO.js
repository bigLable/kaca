const DAO=require('../model/DAO');
class DB {
    getoder(OderID){
        return DAO('select * from orders where OderID=?',[OderID])
    }
    getAlloder(){
        return DAO('call getAlloder()',[])
    }
    addoder(oder){
        return DAO('call oderadd(?,?,?,?)',[oder.userId,oder.shopId,oder.shopnum,oder.adre])
    }
    deleteoder(adminId){
        return DAO('delete from orders where OderID=?',[adminId])
    }
    updateoder(oder){
        return DAO('update orders set Manangementid=?,UserID=?,oderdata=? where OderID=?',[oder.Manangementid,oder.UserID,oder.oderdata,oder.OderID])
    }
}
module.exports= new DB();