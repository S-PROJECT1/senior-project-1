const connection = require("../database/index")


module.exports = {

      DELETE: (id, callback) => {
            const sql = "DELETE FROM handwork WHERE id_Work=?"
            connection.query(sql, [id], (err, results) => {
                  callback(err, results)
            })
      },
      getAllData: (callback)=>{
            const query = "SELECT * FROM handwork"
            connection.query(query,(err,results)=>{
                  callback(err,results)
            })
      },
      addHandWork:(newHandWork,callback)=>{
            const sql = "INSERT INTO ``handwork`SET image=?,title=?,desc=?,videos=?"
            connection.query(sql, [newHandWork.image,newHandWork.title,newHandWork.desc,newHandWork.videos])
            callback(err, results)
      }
}