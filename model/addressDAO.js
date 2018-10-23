const DAO=require('../model/DAO');
class DB {
    getadres(aId){
        return DAO('call getadress(?)',[aId])
    }
    getAlladres(id){
        return DAO('call getAlladre(?) ',[id])
    }
    addadres(adrename,userId){
        return DAO('call addadres(?,?)',[adrename,userId])
    }
    delete(aId){
        return DAO('call deleAdress(?)',[aId])
    }
    update(adre){
        return DAO('update adress set adrename=? where Adressid=?',[adre.adrename,adre.Adressid])
    }
}
module.exports= new DB();