const express = require('express');
const router = express.Router();
const destinationsController = require('../controllers/destinationsController');
const multer = require('multer');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');  // Directory to save the uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));  // Save files with unique names
  }
});

const upload = multer({ storage: storage });

router.post(
  '/',
  upload.fields([
    { name: 'image_preview', maxCount: 1 },
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 }
  ]),
  destinationsController.createDestination
);

router.get('/', destinationsController.getDestinations);
router.get('/:id', destinationsController.getDestinationById);
router.put('/:id', destinationsController.updateDestination);
router.delete('/:id', destinationsController.deleteDestination);

module.exports = router;

