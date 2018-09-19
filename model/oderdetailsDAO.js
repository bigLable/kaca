const DAO=require('../model/DAO');
class DB {
    getoderdetail(detailId){
        return DAO('select * from trolle  ',[detailId])
    }
    getAlloderdetail(){
        return DAO('select det.OderID,det.detailCount,det.Adressid,det.payway,det.detailPrice from  orderdetails det  LEFT JOIN  orders o on det.OderID=o.OderID INNER JOIN adress adre on ' +
            'det.Adressid=adre.Adressid\n' +
            ' ',[])
    }
    addoderdetail(oder){
        return DAO('insert into orders values(?,?,?)',[oder.oderId,oder.oderDate,oder.manaId])
    }
    deleteoderdetail(oder){
        return DAO('delete orders where orders=?',[oder.oderId])
    }
    updateoderdetail(oder){
        return DAO('update orders set oderId=?,oderDate=?,manaId=?',[oder.oderId,oder.oderDate,oder.manaId])
    }
}
module.exports= new DB();