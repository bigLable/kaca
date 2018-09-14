const mysql=require('mysql');
const confidb=require('../model/confidb');
const pool=mysql.createPool(confidb);
function query(sql,values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err,connection){
            if (err){
                reject('连接失败！'+err.message)
            }else {
                connection.query(sql,values,(err,rows)=>{
                    if (err){
                        reject('操作失败！'+err.message)
                    } else {
                        resolve(rows)
                    }
                    connection.release();
                })
            }
        })
    })
}
module.exports=query;