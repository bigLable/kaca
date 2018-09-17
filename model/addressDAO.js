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
    delete(aId){
        return DAO('delete from addresses where aId=?',[aId])
    }
    update(oder){
        return DAO('update addresses set aName=?,cId=?,manaId=? where aId=?',[oder.aName,oder.cId,oder.manaId,oder.aId,])
    }
}
module.exports= new DB();