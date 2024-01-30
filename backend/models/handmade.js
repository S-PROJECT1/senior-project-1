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
      }
}