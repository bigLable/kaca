const DAO=require('../model/DAO');
class DB {
    getadres(aId){
        return DAO('select * from addresses where aId=?',[aId])
    }
    getAlladres(){
        return DAO('select * from addresses ',[])
    }
    addadres(add){
        return DAO('insert into addresses(aName,cId,manaId)  values(?,?,?)',[add.aName,add.cId,add.manaId])
    }
    delete(oder){
        return DAO('delete addresses where aId=?',[oder.aId])
    }
    update(oder){
        return DAO('update addresses set aName=?,customers_cId=? where aId=?',[oder.aId,oder.aName,oder.customers_cId])
    }
}
module.exports= new DB();