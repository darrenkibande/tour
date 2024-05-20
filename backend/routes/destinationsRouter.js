const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const destinationsController = require('../controllers/destinationsController.js');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get('/', destinationsController.getAllDestinations);
router.post('/', upload.single('image_preview'), destinationsController.createDestination);

module.exports = router;
