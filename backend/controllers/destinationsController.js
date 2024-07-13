const { destinations } = require('../models');

// Create a new destination
exports.createDestination = async (req, res) => {
  const { destination_name, destination_title1, description1, destination_title2, description2 } = req.body;
  const image_preview = req.files && req.files['image_preview'] ? req.files['image_preview'][0].path : null;
  const image1 = req.files && req.files['image1'] ? req.files['image1'][0].path : null;
  const image2 = req.files && req.files['image2'] ? req.files['image2'][0].path : null;
  const image3 = req.files && req.files['image3'] ? req.files['image3'][0].path : null;

  try {
      const newDestination = await destinations.create({
          destination_name,
          destination_title1,
          description1,
          destination_title2,
          description2,
          image_preview,
          image1,
          image2,
          image3
      });

      res.status(201).json(newDestination);
  } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the destination.' });
  }
};


exports.getDestinations = async (req, res) => {
  try {
    const allDestinations = await destinations.findAll();
    res.status(200).json(allDestinations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDestinationById = async (req, res) => {
  try {
    const destination = await destinations.findByPk(req.params.id);
    if (destination) {
      res.status(200).json(destination);
    } else {
      res.status(404).json({ error: 'Destination not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDestination = async (req, res) => {
  try {
    const destination = await destinations.findByPk(req.params.id);
    if (destination) {
      const updatedDestination = await destination.update(req.body);
      res.status(200).json(updatedDestination);
    } else {
      res.status(404).json({ error: 'Destination not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDestination = async (req, res) => {
  try {
    const destination = await destinations.findByPk(req.params.id);
    if (destination) {
      await destination.destroy();
      res.status(200).json({ message: 'Destination deleted' });
    } else {
      res.status(404).json({ error: 'Destination not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
