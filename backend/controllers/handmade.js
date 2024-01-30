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