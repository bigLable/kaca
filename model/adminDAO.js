const DAO=require('../model/DAO');
class DB {
    getadmin(){
        return DAO('select * from admins',[])
    }
    getoneadmin(id){
        return DAO('select * from admins where adminId=?',[id])
    }
    addadmin(admins){
        return DAO('insert into admins values(?,?,?,?,?)',[admins.adminId,admins.adminName,admins.adminPwd,admins.adminPhone,admins.adminRegidate])
    }
    deleteadmin(id){
        return DAO('delete from admins where adminId=?',[id])
    }
    updateadmin(admins){
        return DAO('update admins set adminName=?,adminPwd=?,adminPhone=?,adminRegidate=? where adminId=?',[admins.adminName,admins.adminPwd,admins.adminPhone,admins.adminRegidate,admins.adminId])
    }
}
module.exports= new DB();