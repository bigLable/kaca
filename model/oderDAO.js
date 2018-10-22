const DAO=require('../model/DAO');
class DB {
    getoder(OderID){
        return DAO('select * from orders where OderID=?',[OderID])
    }
    getAlloder(){
        return DAO('call getAlloder()',[])
    }
    addoder(orde){
        return DAO('call oderadd(?)',[orde])
    }
    deleteoder(adminId){
        return DAO('delete from orders where OderID=?',[adminId])
    }
    updateoder(oder){
        return DAO('update orders set Manangementid=?,UserID=?,oderdata=? where OderID=?',[oder.Manangementid,oder.UserID,oder.oderdata,oder.OderID])
    }
}
module.exports= new DB();