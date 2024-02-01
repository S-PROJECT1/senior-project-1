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
      login: (req, res) => {
            model.login(req.body, (err, results) => {
                  if (err) {
                        return res.json("error")
                  }
                  if (results.length > 0) {
                        return res.json("success")
                  } else {
                        return res.json("fail")
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
}