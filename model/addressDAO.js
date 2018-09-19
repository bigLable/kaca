const DAO=require('../model/DAO');
class DB {
    getadres(aId){
        return DAO('select * from adress where Adressid=?',[aId])
    }
    getAlladres(){
        return DAO('select * from adress ',[])
    }
    addadres(add){
        return DAO('insert into adress (Adressid,adrename)  values(?,?)',[add.Adressid,add.adrename])
    }
    delete(aId){
        return DAO('delete from adress where Adressid=?',[aId])
    }
    update(adre){
        return DAO('update adress set adrename=? where Adressid=?',[adre.adrename,adre.Adressid])
    }
}
module.exports= new DB();