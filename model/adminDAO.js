
const DAO=require('../model/DAO');
class DB {
    getadmin(adminId){
        return DAO('select * from admins where adminId=?',[adminId])
    }
    getAlladmin(){
        return DAO('select * from admins',[])
    }
    addadmin(adminer){
        return DAO('insert into admins values(?,?,?,?,?,?)',[adminer.adminId,adminer.adminName,adminer.adminsPwd,adminer.adminsPic,adminer.adminsEmail,adminer.adminsPhoneNum])
    }
    deleteadmin(adminer){
        return DAO('delete admins where aId=?',[adminer.adminId])
    }
    updateadmin(adminer){
        return DAO('update admins set adminName=?,adminsPwd=?,adminsPic=?,adminsEmail=?,adminsPhoneNum=? where aId=?',[adminer.adminName,adminer.adminsPwd,adminer.adminsPic,adminer.adminsEmail,adminer.adminsPhoneNum,adminer.adminId])
    }
}
module.exports= new DB();