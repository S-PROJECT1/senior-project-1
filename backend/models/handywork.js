const connection = require("../database/index")


module.exports = {

      DELETE: (id, callback) => {
            const sql = "DELETE FROM handwork WHERE id_Work=?"
            connection.query(sql, [id], (err, results) => {
                  callback(err, results)
            })
      }
}