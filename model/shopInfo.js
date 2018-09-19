const DAO =require('./DAO')
class DB{

    shopGetid(id){
        return DAO('select * from shop where shopId=?',[id])
    }
    shopGetpara(id){
        return DAO('select * from shop where shopPara=?',[id])
    }
    shopGprice(id){
        return DAO('select * from shop where shopPrice=?',[id])
    }
    shopXImg(id){
        return DAO('select * from shop where shopXImg=?',[id])
    }

}
module.exports= new DB();