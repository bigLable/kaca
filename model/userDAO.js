const DAO=require('../model/DAO');
class DB{
    getUsers(){
        //获取全部用户信息的方法
        return DAO('select * from users',[])
    }
    //获取一个用户信息的方法
    getOneUser(id){
        return DAO('select * from users where userID=? and userPwd=?',[id.userID,id.userPwd])
    }
    //添加一个用户信息的方法
    addUsers(users){
        return DAO('insert into  users values(?,?,?,?,?)',
            [users.userID,users.userName,users.userPwd,users.userEmail,users.userRegisterDate])
    }
    //修改一个用户信息
    updateUsers(users){
        return DAO('update users set userName=?,userPwd=?,userEmail=?,userPhoneNum=?,userPic=?,userRegisterDate=? where userID=?',
            [users.userName,users.userPwd,users.userEmail,users.userPhoneNum,users.userPic,users.userRegisterDate,users.userID])
    }
}
module.exports= new DB();