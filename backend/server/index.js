const express = require('express')
const app = express()
const cors = require("cors");
const PORT = 8080
const db = require("../database/index.js")
const route1 = require("../routes/route1.js")
const route2 = require("../routes/route2.js")
const route3 = require("../routes/route3.js")





app.use(cors())
app.use(express.json())
app.use("/route1", route1)
app.use("/route2", route2)
app.use("/route3", route3)



app.get('/', (req, res) => {
      res.send('Server Listening')
})

app.listen(PORT, () => {
      console.log(`listen on  http://localhost:${PORT}`)
})