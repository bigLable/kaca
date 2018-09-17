const DAO=require('../model/DAO');

class DB{
    getworks(){
        //获取全部作品信息的方法
        return DAO('select * from wroks',[])
    }
    //获取一个作品信息的方法
    getOneWorks(id){
        return DAO('select * from wroks where worksId=?',[id])
    }
    //添加一个作品信息的方法
    addWorks(works){
        return DAO('insert into  wroks values(?,?,?,?,?,?,?)',
            [works.worksId,works.wroksauthor,works.wroksDescribe,works.wroksEquipment,works.wroksPageview,works.wroksPoint,works.wroksDate])
    }
    //删除一个作品信息
    delete (id){
        return DAO('delete from wroks where worksId=?',[id])
    }

}
module.exports= new DB();