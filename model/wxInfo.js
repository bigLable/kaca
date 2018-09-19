const DAO=require('../model/DAO');
class DB{

    wxGetid(id){
        return DAO('select * from wx where wxId=?',[id])
    }
    wxGetFrom(id){
        return DAO('select * from wx where wxFrom=?',[id])
    }

}
module.exports= new DB();