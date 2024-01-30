const express = require('express');
const controller = require('../controllers/handmade.js');
const routes = express.Router();

routes.get('/GETALL', controller.getAllHandMades);
routes.delete('/DELETE/:id', controller.DELETE);
routes.post('/add', controller.addOneHandMade);
routes.get('/getbytitle/:title', controller.getByTitle); 

module.exports = routes;
