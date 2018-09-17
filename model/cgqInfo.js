const DAO =require('./DAO')
class DB{

    cgqGetid(cgqId){
        return DAO('select * from cgq where cgqId=?',[cgqId])
    }
    cgqtype(cgqType){
        return DAO('select * from cgq where cgqType=?',[cgqType])
    }
    cgqsize(cgqSize){
        return DAO('select * from cgq where cgqSize=?',[cgqSize])
    }
    cgqmax(cgqMax){
        return DAO('select * from cgq where cgqMax=?',[cgqMax])
    }
    cgqd(cgqD){
        return DAO('select * from cgq where cgqD=?',[cgqD])
    }
    cgqj(cgqJ){
        return DAO('select * from cgq where cgqJ=?',[cgqJ])
    }
    cgqtime(cgqTime){
        return DAO('select * from cgq where cgqTime=?',[cgqTime])
    }
}
module.exports= new DB();