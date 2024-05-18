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



module.exports = {
  getAllDestinations
};
