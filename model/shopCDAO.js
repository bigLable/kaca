const DAO =require('./DAO')
class DB{

    shopcid(id){
        return DAO('select * from shopcomments where ComentId=?',[id])
    }
    shopccontent(id){
        return DAO('select * from shopcomments where shopCContent=?',[id])
    }
    shopcdate(id){
        return DAO('select * from shopcomments where shopCDate=?',[id])
    }
    shoplabel(id){
        return DAO('select * from shopcomments where shoplabel=?',[id])
    }
    username(id){
        return DAO('select * from shopcomments where username=?',[id])
    }
}
module.exports= new DB();