const connection = require("../database/index")


module.exports = {
      addUser:(newUser,callback)=>{
     const sql="INSERT INTO `user`SET firstName=?,lastName=?;email=?"
     connection.query(sql,[newUser.firstName,newUser.lastName,newUser.email],(err,result)=>{
      callback(err,result)
     })
      },






      DELETE: (id, callback) => {
            const sql = "DELETE FROM user WHERE id=?"
            connection.query(sql, [id], (err, results) => {
                  callback(err, results)
            })
      },
}


