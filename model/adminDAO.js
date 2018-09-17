
const DAO=require('../model/DAO');
class DB {
    getadmin(adminId){
        return DAO('select * from admins where adminId=?',[adminId])
    }
    getAlladmin(){
        return DAO('select * from admins',[])
    }
    addadmin(adminer){
        return DAO('insert into admins values(?,?,?,?,?,?)',[adminer.adminName,adminer.adminsPwd,adminer.adminsPic,adminer.adminsEmail,adminer.adminsPhoneNum,adminer.manaId])
    }
    deleteadmin(adminId){
        return DAO('delete from admins where adminId=?',[adminId])
    }
    updateadmin(adminer){
        return DAO('update admins set adminName=?,adminsPwd=?,adminsPic=?,adminsEmail=?,adminsPhoneNum=?,manaId=? where adminId=?',[adminer.adminName,adminer.adminsPwd,adminer.adminsPic,adminer.adminsEmail,adminer.adminsPhoneNum,adminer.manaId,adminer.adminId])
    }
}
module.exports= new DB();