'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class destinations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  destinations.init({
    destination_name: DataTypes.STRING,
    destination_title1: DataTypes.STRING,
    description1: DataTypes.STRING,
    destination_title2: DataTypes.STRING,
    description2: DataTypes.STRING,
    image_preview: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'destinations',
    timestamps: false
  });
  return destinations;
};