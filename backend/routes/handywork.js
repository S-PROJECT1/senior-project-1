const express = require('express')
const controller = require("../controllers/handywork")
const routes = express.Router()

routes.get("/GETALL",controller.getAllHandWorks)
routes.delete("/DELETE/:id", controller.DELETE)

module.exports = routes;
