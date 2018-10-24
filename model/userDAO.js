const DAO=require('../model/DAO');
class DB{
    getUsers(){
        //获取全部用户信息的方法
        return DAO('select * from users',[])
    }
    //获取一个用户信息的方法
    getOneUser(userEmail){
        return DAO('select * from users where userEmail=?',[userEmail])
    }
    //添加一个用户信息的方法
    addUsers(users){
        return DAO('insert into  users(userName,userPwd,userEmail,userPhoneNum) values(?,?,?,?)',
            [users.userName,users.userPwd,users.userEmail,users.userPhoneNum])
    }
    //修改一个用户信息
    updateUsers(users){
        return DAO('update users set userName=?,userPwd=?,userEmail=?,userSex=?,userPhoneNum=?,userPic=?,userRegisterDate=? where userID=?',
            [users.userName,users.userPwd,users.userEmail,users.userSex,users.userPhoneNum,users.userPic,users.userRegisterDate,users.userID])
    }
}
module.exports= new DB();