const DAO=require('../model/DAO');
class DB {
    getadmin(adminId){
        return DAO('select * from admins where adminId=?',[adminId])
    }
    getoneadmin(){
        return DAO('select * from admins',[])
    }
    addadmin(admin){
        return DAO('insert into admins values(?,?,?)',[admin.adminId,admin.adminName,admin.adminPwd])
    }
    deleteadmin(adminId){
        return DAO('delete from admins where adminId=?',[adminId])
    }
    updateadmin(admin){
        return DAO('update admins set adminName=?,adminPwd=?,adminId=? where adminId=?',[admin.adminName,admin.adminPwd,admin.adminId])
    }
}
module.exports= new DB();