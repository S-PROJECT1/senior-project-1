const express = require('express')
const controller = require("../controllers/handywork")
const routes = express.Router()


routes.delete("/DELETE/:id", controller.DELETE)

module.exports = routes;
