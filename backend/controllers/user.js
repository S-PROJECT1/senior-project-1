const model = require("../models/user");


module.exports = {
      add: (req, res) => {
            let newUser = req.body
            model.addUser(newUser, (err, results) => {
                  if (err) {
                        res.status(500).send(err)
                  } else {
                        res.json(results)
                  }
            });
      },

      DELETE: (req, res) => {
            model.DELETE(req.params.id, (err, results) => {
                  if (err) {
                        res.status(500).send(err);
                  } else {
                        res.json(results);
                  }
            });
      },
      searchByName: (req, res) => {
            const firstName = req.params.title;
            model.searchByName(firstName, (err, result) => {
              if (err) {
                res.status(500).send(err);
              } else {
                if (!result) {
                  res.status(404).send("Item not found");
                } else {
                  res.status(200).json(result);
                }
            }
      }
)}

      
}
