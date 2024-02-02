const express = require('express')
const controller = require("../controllers/user")
const jwt = require('jsonwebtoken')
const routes = express.Router()

routes.delete("/DELETE/:id", controller.DELETE)
routes.post("/add", verifyToken, controller.add)
routes.post("/login", controller.login)

module.exports = routes;