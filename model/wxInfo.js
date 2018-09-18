const DAO=require('../model/DAO');
class DB{

    wxGetid(id){
        return DAO('select * from wx where wxId=?',[id])
    }
    wxGetFrom(wxFrom){
        return DAO('select * from wx where wxFrom=?',[wxFrom])
    }

}
module.exports= new DB();