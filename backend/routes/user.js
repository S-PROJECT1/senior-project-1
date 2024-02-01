const express = require('express')
const controller = require("../controllers/user")
const routes = express.Router()



routes.delete("/DELETE/:id", controller.DELETE)
routes.post("/add", controller.add)

module.exports = routes;