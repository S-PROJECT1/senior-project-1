const model = require("../models/user")
const jwt = require('jsonwebtoken')
const secretKey = process.env.JWT_SECRET_KEY || 'babala-ya-7asbala-mad9ouch-3arbou5-ba5bou7';
// 'babala-ya-7asbala-mad9ouch-3arbou5-ba5bou7' //this is a hardcoded jwt key  for testing or idk 
// we also need to use a hash function like bcrypt to securely to store hashed passwords in the database instead of plain text

const generateToken = (userId, username) => {
      return jwt.sign({ id: userId, username: username }, secretKey);
};

module.exports = {
      add: (req, res) => {
            let newUser = req.body;
            model.addUser(newUser, (err, results) => {
                  if (err) {
                        res.status(500).send(err);
                  } else {
                        const token = generateToken(results.insertId, newUser.username);
                        res.json({ token });
                  }
            });
      },

      login: (req, res) => {
            model.login(req.body, (err, results) => {
                  if (err) {
                        return res.json("error");
                  }
                  if (results.length > 0) {
                        const token = generateToken(results[0].id, results[0].username);
                        res.json({ token });
                  } else {
                        return res.json("fail");
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
            });
      }
};
