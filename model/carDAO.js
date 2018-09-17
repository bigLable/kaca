const DAO=require('../model/DAO');
class DB {

    getAllcar(){
        return DAO('select * from trolleys',[])
    }
    addcar(trolley){
        return DAO('insert into trolleys values(?,?,?,?)',[trolley.trol])
    }
    deletecar(adminer){
        return DAO('delete trolleys where aId=?',[adminer.adminId])
    }

}
module.exports= new DB();