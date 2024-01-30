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
            model.getAllData((err,handworks)=>{
                  if (err) {
                        res.status(500).send("Error GETTING all handworks from the database: ",err)
                  } else {
                        res.json(handworks)
                  }
            })
      },
      addNewHandWork:(req,res) =>{
            var newHandWork=req.body
            model.addHandWork(newHandWork,(err,results)=>{
                  if (err) {
                        res.status(500).send("Error adding all handworks from the database: ",err)
                  } else {
                        res.json(results)
                  }

            })
      }
};