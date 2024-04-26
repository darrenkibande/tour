'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  destination.init({
    dest_name: DataTypes.STRING,
    description_1: DataTypes.STRING,
    description_2: DataTypes.STRING,
    dest_heading_1: DataTypes.STRING,
    dest_heading_2: DataTypes.STRING,
    image_preview: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'destination',
    timestamps:false
  });
  return destination;
};