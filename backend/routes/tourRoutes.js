const express = require('express');
const multer = require('multer');
const tourController = require('../controllers/tourController.js');

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure this directory exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.get('/', tourController.getAllTours);
router.get('/:id', tourController.getTourById);
router.post('/', upload.single('image'), tourController.createTour); // Add multer middleware here
router.put('/:id', upload.single('image'), tourController.updateTour); // Add multer middleware here
router.delete('/:id', tourController.deleteTour);

module.exports = router;
