const DAO=require('../model/DAO');

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
        return DAO('insert into  works values(?,?,?,?,?,?)',
            [works.worksId,works.worksPic,works.worksauthor,works.worksDescribe,works.worksEquipment,works.worksDate])
    }
    //删除一个作品信息
    deleteworks (id){
        return DAO('delete from works where worksId=?',[id])
    }
    //修改一个作品信息
    updateworks(work){
        return DAO('update works set worksPic=?,worksauthor=?,worksDescribe=?,worksEquipment=?,worksDate=? where worksId=?',
            [work.worksPic,work.worksauthor,work.worksDescribe,work.worksEquipment,work.worksDate,work.worksId])
    }
    getnewworks() {
        //获取最新作品信息的方法
        return DAO('select worksPic,worksauthor,worksDescribe,worksEquipment from works  where worksDate = (select max(worksDate) from works )', [])
    }

}
module.exports= new DB();