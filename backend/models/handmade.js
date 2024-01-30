const connection = require("../database/index");

module.exports = {
      DELETE: (id, callback) => {
            const sql = "DELETE FROM handmade WHERE id=?"
            connection.query(sql, [id], (err, results) => {
                  callback(err, results)
            })
      },
      getAllData: (callback)=>{
            const query = "SELECT * FROM handmade"
            connection.query(query,(err,results)=>{
                  callback(err,results)
            })
      },
      addOne:(handmade,callback) => {
            const sql='insert into `handmade` set img=?,title=?,description=?,video=?'
            let values=[handmade.img,handmade.title,handmade.description,handmade.video]
            connection.query(sql, values, (err, results) => {
                  callback(err, results)
            })
      }

}