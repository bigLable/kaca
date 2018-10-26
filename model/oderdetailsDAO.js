const DAO=require('../model/DAO');
class DB {
    getoderdetail(detailId){
        return DAO('select * from trolle  ',[detailId])
    }
    getAlloderdetail(user){
        return DAO('call getOnegood(?)',[user])
    }
    addoderdetail(oder){
        return DAO('insert into orders values(?,?,?)',[oder.oderId,oder.oderDate,oder.manaId])
    }
    deleteoderdetail(odertailId){
        return DAO('call deletedetail(?)',[odertailId])
    }
    updateoderdetail(oder){
        return DAO('update orders set oderId=?,oderDate=?,manaId=?',[oder.oderId,oder.oderDate,oder.manaId])
    }
}
module.exports= new DB();