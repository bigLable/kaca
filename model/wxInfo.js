const DAO=require('../model/DAO');
class DB{
    allwx(){
        return DAO('select * from wx ',[])
    }
    wxGetid(id){
        return DAO('select * from wx where wxId=?',[id])
    }
    wxGetFrom(id){
        return DAO('select * from wx where wxFrom=?',[id])
    }

}
module.exports= new DB();