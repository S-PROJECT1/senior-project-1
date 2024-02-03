const express = require('express');
const app = express();
const cors = require("cors");
const jwt = require('jsonwebtoken');
const session = require('express-session');
const bodyParser = require('body-parser');
const PORT = 8080;
const db = require("../database/index.js");
const route1 = require("../routes/user.js");
const route2 = require("../routes/handmade.js");
const route3 = require("../routes/handywork.js");

app.use(cors());
app.use(express.json());
// app.use(session({
//   secret: 'your_session_secret',
//   resave: true,
//   saveUninitialized: true
// }));





// // check if the user is logged

// const requireLogin = (req, res, next) => {
//   if (req.session && req.session.user) {
//     return next(); // proceed to the next if user is logged in
//   } else {
//     return res.status(401).json({ message: 'Access denied. Not logged in.' });
//   }
// };

// jwt token middleware--------------------------------------------------------

// const verifyToken = (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) return res.status(401).json({ message: 'Invalid token.' });
//     req.user = decoded;
//     next();
//   });
// };

// jwt token middleware--------------------------------------------------------

// Apply session-based authentication middleware to specific routes
// app.use("/user", requireLogin, route1);
// app.use("/handmade", requireLogin, verifyToken, route2);
// app.use("/handywork", requireLogin, verifyToken, route3);
// 
app.use("/user", route1);
app.use("/handmade", route2);
app.use("/handywork", route3);



app.get('/', (req, res) => {
  res.send('Server Listening');
})

// module.exports = {
//   verifyToken
// };

app.listen(PORT, () => {
  console.log(`listen on http://localhost:${PORT}`);
});
