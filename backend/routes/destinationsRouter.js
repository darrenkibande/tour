const express = require('express');
const router = express.Router();
const { getAllDestinations} = require('../controllers/destinationsController');

// Routes for fetching data (GET requests only)
router.get('/', getAllDestinations); // Get all destinations

module.exports = router;
