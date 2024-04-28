const express = require('express');
const router = express.Router();
const userController = require('../controllers/destinationController');

// Route to get all users
router.get('/destinations', destnations.getDestination);
 
module.exports = router;
