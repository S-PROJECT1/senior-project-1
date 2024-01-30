
const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.get('/search', search.search);

module.exports = router;
