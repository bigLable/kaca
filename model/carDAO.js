const DAO=require('../model/DAO');
class DB {
    getcar(trolleyId){
        return DAO('select * from admins where adminId=?',[trolleyId])
    }
    getAllcar(){
        return DAO('select * from admins',[])
    }
    addcar(trolleyId){
        return DAO('insert into admins values(?,?,?,?,?,?)',[trolleyId.adminId,adminer.adminName,adminer.adminsPwd,adminer.adminsPic,adminer.adminsEmail,adminer.adminsPhoneNum])
    }
    deletecar(adminer){
        return DAO('delete admins where aId=?',[adminer.adminId])
    }
    updatecar(adminer){
        return DAO('update admins set adminName=?,adminsPwd=?,adminsPic=?,adminsEmail=?,adminsPhoneNum=? where aId=?',[adminer.adminName,adminer.adminsPwd,adminer.adminsPic,adminer.adminsEmail,adminer.adminsPhoneNum,adminer.adminId])
    }
}
module.exports= new DB();