const { tours } = require('../models'); // Ensure you have a model named 'tours' in your models directory

// Get all tours
exports.getAllTours = async (req, res) => {
    try {
        const allTours = await tours.findAll();
        res.status(200).json(allTours);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new tour
exports.createTour = async (req, res) => {
    const {
        destination_title,
        destination_name,
        description,
        duration,
        price,
        info_overview,
        info_highlight,
        departure,
        departure_date,
        return_date,
        included,
        excluded,
        travel_plan_overview,
        travel_plan_day_title,
        travel_plan_time,
        travel_plan_day_description
    } = req.body;

    const image_preview = req.file ? req.file.path : null; // Get the file path from Multer

    try {
        const newTour = await tours.create({
            destination_title,
            destination_name,
            description,
            duration,
            price,
            image_preview,
            info_overview,
            info_highlight,
            departure,
            departure_date,
            return_date,
            included,
            excluded,
            travel_plan_overview,
            travel_plan_day_title,
            travel_plan_time,
            travel_plan_day_description
        });
        res.status(201).json(newTour);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the tour.' });
    }
};

// Update an existing tour
exports.updateTour = async (req, res) => {
    const { id } = req.params;
    const {
        destination_title,
        destination_name,
        description,
        duration,
        price,
        info_overview,
        info_highlight,
        departure,
        departure_date,
        return_date,
        included,
        excluded,
        travel_plan_overview,
        travel_plan_day_title,
        travel_plan_time,
        travel_plan_day_description
    } = req.body;

    const image_preview = req.file ? req.file.path : req.body.image_preview; // Update the file path if a new file is uploaded

    try {
        const tour = await tours.findByPk(id);

        if (tour) {
            tour.destination_title = destination_title;
            tour.destination_name = destination_name;
            tour.description = description;
            tour.duration = duration;
            tour.price = price;
            tour.image_preview = image_preview;
            tour.info_overview = info_overview;
            tour.info_highlight = info_highlight;
            tour.departure = departure;
            tour.departure_date = departure_date;
            tour.return_date = return_date;
            tour.included = included;
            tour.excluded = excluded;
            tour.travel_plan_overview = travel_plan_overview;
            tour.travel_plan_day_title = travel_plan_day_title;
            tour.travel_plan_time = travel_plan_time;
            tour.travel_plan_day_description = travel_plan_day_description;

            await tour.save();
            res.status(200).json(tour);
        } else {
            res.status(404).json({ error: 'Tour not found.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the tour.' });
    }
};

// Delete a tour
exports.deleteTour = async (req, res) => {
    const { id } = req.params;

    try {
        const tour = await tours.findByPk(id);

        if (tour) {
            await tour.destroy();
            res.status(200).json({ message: 'Tour deleted successfully.' });
        } else {
            res.status(404).json({ error: 'Tour not found.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the tour.' });
    }
};
