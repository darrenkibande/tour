const express = require('express');
const router = express.Router();
const destnations = require('../controllers/destinationController');

// Route to get all users
router.get('/destinations', destnations.getDestination);
 
module.exports = router;
