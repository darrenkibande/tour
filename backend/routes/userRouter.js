// routes/userRouter.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register route
router.post('/register', userController.registerUser);

// Authenticate route
router.post('/login', userController.authenticateUser);

module.exports = router;
