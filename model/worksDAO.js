//关于作品对象的相关数据操作
const DAO=require('../model/DAO')

class DB{
    getworks(){
        //获取全部作品信息的方法
        return DAO('select * from works',[])
    }
    //获取一个作品信息的方法
    getOneWorks(id){
        return DAO('select * from works where worksId=?',[id])
    }
    //添加一个作品信息的方法
    addWorks(works){
        return DAO('insert into  works values(?,?,?,?,?,?,?)',
            [works.worksId,works.worksauthor,works.worksDescribe,works.worksEquipment,works.worksPageview,works.worksPoint,works.worksDate])
    }
    //删除一个作品信息
    delete (works){
        return DAO('delete works where worksId=?',[works.worksId])
    }

}
module.exports= new DB();