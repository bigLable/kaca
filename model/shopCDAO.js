const DAO =require('./DAO')
class DB{

    shopcid(id){
        return DAO('select * from shopcomments where shopCId=?',[id])
    }
    shopccontent(id){
        return DAO('select * from shopcomments where shopCContent=?',[id])
    }
    shopcdate(id){
        return DAO('select * from shopcomments where shopCDate=?',[id])
    }

}
module.exports= new DB();