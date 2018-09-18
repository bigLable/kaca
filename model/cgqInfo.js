const DAO =require('./DAO')
class DB{

    cgqGetid(id){
        return DAO('select * from cgq where cgqId=?',[id])
    }
    cgqtype(id){
        return DAO('select * from cgq where cgqType=?',[id])
    }
    cgqsize(id){
        return DAO('select * from cgq where cgqSize=?',[id])
    }
    cgqmax(id){
        return DAO('select * from cgq where cgqMax=?',[id])
    }
    cgqd(id){
        return DAO('select * from cgq where cgqD=?',[id])
    }
    cgqj(id){
        return DAO('select * from cgq where cgqJ=?',[id])
    }
    cgqtime(id){
        return DAO('select * from cgq where cgqTime=?',[id])
    }
}
module.exports= new DB();