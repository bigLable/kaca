const DAO=require('../model/DAO');
class DB {
    getBacktage(adminId){
        return DAO('select * from admins where adminId=?',[adminId])
    }
    getAllBacktage(){
        return DAO('select * from addresses,admins,buinesses,cgq,comments,customers,management,orderdetails,orders,shop,trolleys,types,wroks,wx where addresses.manaId=admins.manaId=buinesses.manaId=cgq.manaId=comments.manaId=customers.manaId=management.manaId=orderdetails.manaId=orders.manaId=shop.manaId=trolleys.manaId=types.manaId=wroks.manaId=wx.manaId',[])
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