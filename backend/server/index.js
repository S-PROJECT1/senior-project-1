const express = require('express');
const app = express();
const cors = require("cors");
const jwt = require('jsonwebtoken');
const PORT = 8080;
const db = require("../database/index.js");
const route1 = require("../routes/user.js");
const route2 = require("../routes/handmade.js");
const route3 = require("../routes/handywork.js");

app.use(cors());
app.use(express.json());

// jwt token middlewear--------------------------------------------------------
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token.' });
    req.user = decoded;
    next();
  });
};
// jwt token middlewear--------------------------------------------------------

console.log("tessssssssssssttttttttt");

app.use("/user", verifyToken, route1)
app.use("/handmade", route2)
app.use("/handywork", route3)


app.get('/', (req, res) => {
  res.send('Server Listening');
});



// app.get('/login', (req, res) => {
//   const sql = "SELECT * FROM user WHERE email=? AND password=?"
//   db.query(sql, [data.email, data.password], (err, result) => {
//   })
// });






// login: (req, res) => {
//   model.login(req.body, (err, results) => {
//     if (err) {
//       return res.json("error")
//     }
//     if (data.length > 0) {
//       return res.json("success")
//     } else {
//       return res.json("fail")
//     }
//   });
// },


//   login: (data, callback) => {
//     const sql = "SELECT * FROM user WHERE email=? AND password=?"
//     connection.query(sql, [data.email, data.password], (err, result) => {
//       callback(err, result)
//     })
//   },


app.listen(PORT, () => {
  console.log(`listen on http://localhost:${PORT}`);
});
