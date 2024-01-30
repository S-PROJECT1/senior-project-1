const express = require('express')
const app = express()
const cors = require("cors");
const PORT = 8080
const db = require("../database/index.js")
const route1 = require("../routes/user.js")
const route2 = require("../routes/handmade.js")
const route3 = require("../routes/handywork.js")
// const searchRoutes = require('../routes/search.js')




app.use(cors())
app.use(express.json())
app.use("/user", route1)
app.use("/handmade", route2)
app.use("/handywork", route3)
// app.use('/search', searchRoutes)



app.get('/', (req, res) => {
      res.send('Server Listening')
})

app.listen(PORT, () => {
      console.log(`listen on  http://localhost:${PORT}`)
})