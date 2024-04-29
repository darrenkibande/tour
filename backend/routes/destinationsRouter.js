// routes/destinations.js
const express = require('express');
const router = express.Router();
const destinationsController = require('../controllers/destinationsController');

// Routes for handling CRUD operations
router.get('/', destinationsController.getAllDestinations);
router.get('/:id', destinationsController.getDestinationById);
router.post('/', destinationsController.createDestination);
router.put('/:id', destinationsController.updateDestination);
router.delete('/:id', destinationsController.deleteDestination);

module.exports = router;
