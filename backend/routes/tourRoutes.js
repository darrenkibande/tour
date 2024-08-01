const express = require('express');
const multer = require('multer');
const path = require('path');
const tourController = require('../controllers/tourController.js');
const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure this directory exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Get all tours
router.get('/', tourController.getAllTours);

// Create a new tour
router.post('/', upload.single('image_preview'), tourController.createTour);

// Update an existing tour
router.put('/:id', upload.single('image_preview'), tourController.updateTour);

// Delete a tour
router.delete('/:id', tourController.deleteTour);

module.exports = router;
