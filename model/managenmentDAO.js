const DAO=require('../model/DAO');
class DB {
    getBacktage(adminId){
        return DAO('select * from admins where adminId=?',[adminId])
    }
    getAllBacktage(){
        return DAO('select * from admins',[])
    }
    addBacktage(adminer){
        return DAO('insert into admins values(?,?,?,?,?,?)',[adminer.adminId,adminer.adminName,adminer.adminsPwd,adminer.adminsPic,adminer.adminsEmail,adminer.adminsPhoneNum])
    }
    deleteBacktage(adminer){
        return DAO('delete admins where aId=?',[adminer.adminId])
    }
    updateBacktage(adminer){
        return DAO('update admins set adminName=?,adminsPwd=?,adminsPic=?,adminsEmail=?,adminsPhoneNum=? where aId=?',[adminer.adminName,adminer.adminsPwd,adminer.adminsPic,adminer.adminsEmail,adminer.adminsPhoneNum,adminer.adminId])
    }
}
module.exports= new DB();