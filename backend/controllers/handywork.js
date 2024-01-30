const model = require("../models/handywork")

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
      getAllHandWorks: (req,res) => {
            model.getAllData((err,handmades)=>{
                  if (err) {
                        res.status(500).send("Error GETTING all handworks from the database: ",err)
                  } else {
                        res.json(handmades)
                  }
            })
      }
};