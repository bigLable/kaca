const DAO =require('./DAO')
class DB{

    shopcid(shopCId){
        return DAO('select * from shopcomments where shopCId=?',[shopCId])
    }
    shopccontent(shopCContent){
        return DAO('select * from shopcomments where shopCContent=?',[shopCContent])
    }
    shopcdate(shopCDate){
        return DAO('select * from shopcomments where shopCDate=?',[shopCDate])
    }

}
module.exports= new DB();