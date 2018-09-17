const DAO=require('../model/DAO');

class DB {
    gethotworks() {
        //获取热门作品信息的方法
        return DAO('select * from works where worksPoint=(select max(worksPoint) from works)', [])
    }
}
module.exports= new DB();