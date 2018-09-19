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
    cgqwight(id){
        return DAO('select * from cgq where cgqweight=?',[id])
    }
    cgqpoint(id){
        return DAO('select * from cgq where cgqpoint=?',[id])
    }
    cgqtime(id){
        return DAO('select * from cgq where cgqTime=?',[id])
    }
}
module.exports= new DB();