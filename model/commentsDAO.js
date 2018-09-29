const DAO=require('../model/DAO');

class DB{
    getcomments(){
        //获取全部评论信息的方法
        return DAO('select * from comments',[])
    }
    //获取一个评论信息的方法
    getOneComments(id){
        return DAO('select * from comments where commentid=?',[id])
    }
    //添加一个评论信息的方法
    addcomments(comments){
        return DAO('insert into  comments values(?,?,?,?,?)',
            [comments.commentsId,comments.commentsContent,comments.commentsDate,comments.worksId,comments.UseID])
    }
    //删除一个评论信息
    deletecomments (id){
        return DAO('delete from comments where commentid=?',[id])
    }

}
module.exports= new DB();