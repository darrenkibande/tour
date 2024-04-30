const express = require('express');
const router = express.Router();
const { getAllDestinations, getDestinationById } = require('../controllers/destinationsController');

// Routes for fetching data (GET requests only)
router.get('/', getAllDestinations); // Get all destinations
router.get('/:id', getDestinationById); // Get destination by ID

module.exports = router;
