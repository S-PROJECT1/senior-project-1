# senior-project-1


const handmade = require("../models/handmade");
const model = require("../models/handmade")

module.exports = {

      DELETE: (req, res) => {
            model.DELETE(req.params.id, (err, results) => {
                  if (err) {
                        res.status(500).send(err);
                  } else {
                        res.json(results);
                  }
            });
      },
      getAllHandMades: (req,res) => {
            model.getAllData((err,handmades)=>{
                  if (err) {
                        res.status(500).send("Error GETTING all handmades from the database: ",err)
                  } else {
                        res.json(handmades)
                  }
            })
      }
};

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
const express = require('express')
const controller = require("../controllers/handmade.js")
const routes = express.Router()



routes.get("/GETALL",controller.getAllHandMades)
routes.delete("/DELETE/:id", controller.DELETE)

module.exports = routes;
const express = require('express')
const app = express()
const cors = require("cors");
const PORT = 8080
const db = require("../database/index.js")
const route1 = require("../routes/user.js")
const route2 = require("../routes/handmade.js")
const route3 = require("../routes/handywork.js")





app.use(cors())
app.use(express.json())
app.use("/user", route1)
app.use("/handmade", route2)
app.use("/handywork", route3)



app.get('/', (req, res) => {
      res.send('Server Listening')
})

app.listen(PORT, () => {
      console.log(`listen on  http://localhost:${PORT}`)
})