const { Tour } = require('../models'); // Ensure you have a model named 'Tour' in your models directory

// Get all tours
exports.getAllTours = async (req, res) => {
    try {
        const tours = await Tour.findAll();
        res.status(200).json(tours);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching tours.' });
    }
};

// Get a single tour by ID
exports.getTourById = async (req, res) => {
    const { id } = req.params;
    try {
        const tour = await Tour.findByPk(id);
        if (tour) {
            res.status(200).json(tour);
        } else {
            res.status(404).json({ error: 'Tour not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the tour.' });
    }
};

// Create a new tour
exports.createTour = async (req, res) => {
    const { destination_name, description, duration, price } = req.body;
    const image_preview = req.file ? req.file.path : null; // Get the file path from Multer
    try {
        const newTour = await Tour.create({ destination_name, description, duration, price, image_preview });
        res.status(201).json(newTour);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the tour.' });
    }
};

// Update an existing tour
exports.updateTour = async (req, res) => {
    const { id } = req.params;
    const { destination_name, description, duration, price } = req.body;
    const image_preview = req.file ? req.file.path : req.body.image_preview; // Update the file path if a new file is uploaded
    try {
        const tour = await Tour.findByPk(id);
        if (tour) {
            tour.destination_name = destination_name;
            tour.description = description;
            tour.duration = duration;
            tour.price = price;
            tour.image_preview = image_preview;
            await tour.save();
            res.status(200).json(tour);
        } else {
            res.status(404).json({ error: 'Tour not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the tour.' });
    }
};

// Delete a tour
exports.deleteTour = async (req, res) => {
    const { id } = req.params;
    try {
        const tour = await Tour.findByPk(id);
        if (tour) {
            await tour.destroy();
            res.status(200).json({ message: 'Tour deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Tour not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the tour.' });
    }
};
