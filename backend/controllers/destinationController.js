const destination = require('../models/destination');

// Controller function to fetch all users
const getDestination = async (req, res) => {
    try {
        const destinations = await destination.findAll();
        res.status(200).json(destinations);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getDestination
};
