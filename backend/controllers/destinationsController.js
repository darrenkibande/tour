const { destinations } = require('../models'); // Assuming your model file is in the models directory

// Get all destinations
const getAllDestinations = async (req, res) => {
  try {
    const allDestinations = await destinations.findAll();
    res.json(allDestinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get destination by ID
const getDestinationById = async (req, res) => {
  const { id } = req.params;
  try {
    const destination = await destinations.findByPk(id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllDestinations,
  getDestinationById
};
