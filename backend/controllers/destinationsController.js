// controllers/destinationsController.js
const db = require('../models'); // Assuming your Sequelize models are stored in the models directory
const Destinations = db.destinations;

const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destinations.findAll();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDestinationById = async (req, res) => {
  const id = req.params.id;
  try {
    const destination = await Destinations.findByPk(id);
    if (destination) {
      res.json(destination);
    } else {
      res.status(404).json({ message: 'Destination not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createDestination = async (req, res) => {
  const { destination_name, destination_title1, description1, destination_title2, description2, image_preview } = req.body;
  try {
    const newDestination = await Destinations.create({
      destination_name,
      destination_title1,
      description1,
      destination_title2,
      description2,
      image_preview
    });
    res.status(201).json(newDestination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateDestination = async (req, res) => {
  const id = req.params.id;
  const { destination_name, destination_title1, description1, destination_title2, description2, image_preview } = req.body;
  try {
    const destination = await Destinations.findByPk(id);
    if (destination) {
      await destination.update({
        destination_name,
        destination_title1,
        description1,
        destination_title2,
        description2,
        image_preview
      });
      res.json({ message: 'Destination updated successfully' });
    } else {
      res.status(404).json({ message: 'Destination not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteDestination = async (req, res) => {
  const id = req.params.id;
  try {
    const destination = await Destinations.findByPk(id);
    if (destination) {
      await destination.destroy();
      res.json({ message: 'Destination deleted successfully' });
    } else {
      res.status(404).json({ message: 'Destination not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination
};
