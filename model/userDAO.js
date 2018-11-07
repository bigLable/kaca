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
        return DAO('insert into  users(userName,userPwd,userEmail,userPhoneNum,userPic,userRegisterDate) values(?,?,?,?,?,?)',
            [users.userName,users.userPwd,users.userEmail,users.userPhoneNum,'pic.jpg',users.userRegisterDate])
    }
    //修改一个用户信息
    updateUsers(users){
        return DAO('update users set userName=?,userPwd=?,userSex=?,userPhoneNum=?,userPic=? where userID=?',
            [users.userName,users.userPwd,users.userSex,users.userPhoneNum,users.userPic,users.userID])
    }
}
module.exports= new DB();