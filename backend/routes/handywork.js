const express = require('express');
const controller = require('../controllers/handywork.js');
const routes = express.Router();

routes.get('/GETALL', controller.getAllHandWorks);
routes.delete('/DELETE/:id', controller.DELETE);
routes.post('/CREATE', controller.addNewHandWork);
routes.get('/getbytitle/:title', controller.getByTitle);

module.exports = routes;

