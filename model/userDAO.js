const DAO=require('../model/DAO');
class DB{
    getUsers(){
        //获取全部用户信息的方法
        return DAO('select * from users',[])
    }
    //获取一个用户信息的方法
    getOneUser(id){
        return DAO('select * from users where userEmail=? ',[id])
    }
    //添加一个用户信息的方法
    addUsers(users){
        return DAO('insert into  users(userName,userPwd,userEmail) values(?,?,?)',
            [users.userName,users.userPwd,users.userEmail])
    }
    //修改一个用户信息
    updateUsers(users){
        return DAO('update users set userName=?,userPwd=?,userEmail=?,userPhoneNum=?,userPic=?,userRegisterDate=? where userID=?',
            [users.userName,users.userPwd,users.userEmail,users.userPhoneNum,users.userPic,users.userRegisterDate,users.userID])
    }
}
module.exports= new DB();