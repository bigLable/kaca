const DAO=require('../model/DAO');

class DB {
    //添加一个赞
    addlike(like) {
            return DAO('insert into  like values(?,?,?,?)',
                [like.likeId,like.worksId,like.userId,like.statu])

    }
    //删除一个赞
    deletelike(id){
        return DAO('delete from like where statu=?',[id])
    }
}
module.exports= new DB();