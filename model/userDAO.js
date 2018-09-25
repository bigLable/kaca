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
            [users.UserID,users.userName,users.userPwd,users.userEmail,users.userPhoneNum,users.userPic,users.userRegisterDate])
    }
    //修改一个用户信息
    updateUsers(user){
        return DAO('update user set userName=?,userPwd=?,userEmail=?,userPhoneNum=?,userPic=?,userRegisterDate=? where userID=?,',
            [users.userName,users.userPwd,users.userEmail,users.userPhoneNum,users.userPic,users.userRegisterDate,users.userID])
    }
}
module.exports= new DB();