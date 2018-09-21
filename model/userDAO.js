const DAO=require('../model/DAO');

class DB{
    getUsers(){
        //获取全部用户信息的方法
        return DAO('select * from user',[])
    }
    //获取一个用户信息的方法
    getOneUser(id){
        return DAO('select * from user where UserID=?',[id])
    }
    //添加一个用户信息的方法
    addUsers(users){
        return DAO('insert into  user values(?,?,?,?,?,?,?)',
            [users.UserID,users.cName,users.cPwd,users.cEmail,users.cPhoneNum,users.cPic,users.cRegisterDate])
    }
    //删除一个用户信息
    deleteUsers (id){
        return DAO('delete from user where UserID=?',[id])
    }
    //修改一个用户信息
    updateUsers(user){
        return DAO('update user set cName=?,cPwd=?,cEmail=?,cPhoneNum=?,cPic=?,cRegisterDate=? where UserID=?,',
            [users.cName,users.cPwd,users.cEmail,users.cPhoneNum,users.cPic,users.cRegisterDate,users.UserID])
    }

}
module.exports= new DB();