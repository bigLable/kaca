const DAO =require('./DAO')
class DB{

    wxGetid(wxId){
        return DAO('select * from wx where wxId=?',[wxId])
    }
    wxGetFrom(wxFrom){
        return DAO('select * from wx where wxFrom=?',[wxFrom])
    }

}
module.exports= new DB();