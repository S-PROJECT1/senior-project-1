const express = require('express')
const controller = require("../controllers/user.js")
const routes = express.Router()



routes.delete("/DELETE/:id", controller.DELETE)
routes.post("/add", controller.add)
routes.post("/login", controller.login)

module.exports = routes;