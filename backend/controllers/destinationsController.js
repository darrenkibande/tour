const { destinations } = require('../models');
const path = require('path');

module.exports = {
  async getAllDestinations(req, res) {
    try {
      const allDestinations = await destinations.findAll();
      res.json(allDestinations);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async createDestination(req, res) {
    try {
      const { destination_name, destination_title1, description1, destination_title2, description2 } = req.body;
      const image_preview = req.file ? req.file.path : null;

      const newDestination = await destinations.create({
        destination_name,
        destination_title1,
        description1,
        destination_title2,
        description2,
        image_preview
      });

      res.status(201).json(newDestination);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};
