const DAO =require('./DAO')
class DB{

    wxGetid(wxId){
        return DAO('select * from wx where wxId=?',[wxId])
    }

}
module.exports= new DB();