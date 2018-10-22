const DAO=require('../model/DAO');
class DB {
    getadres(aId){
        return DAO('call getadress(?)',[aId])
    }
    getAlladres(){
        return DAO('call getAlladress() ',[])
    }
    addadres(adrename){
        return DAO('call addadres(?)',[adrename])
    }
    delete(aId){
        return DAO('call deleAdress(?)',[aId])
    }
    update(adre){
        return DAO('update adress set adrename=? where Adressid=?',[adre.adrename,adre.Adressid])
    }
}
module.exports= new DB();