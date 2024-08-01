'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tours extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tours.init({
    destination_title: DataTypes.STRING,
    destination_name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    image_preview: DataTypes.STRING,
    info_overview: DataTypes.STRING,
    info_highlight: DataTypes.STRING,
    departure: DataTypes.STRING,
    departure_date: DataTypes.DATE,
    return_date: DataTypes.DATE,
    included: DataTypes.STRING,
    exluded: DataTypes.STRING,
    travel_plan_overview: DataTypes.STRING,
    travel_plan_day_title: DataTypes.STRING,
    travel_plan_time: DataTypes.DATE,
    travel_plan_day_description: DataTypes.STRING
  }, {
    sequelize,
    timestamps:false,
    modelName: 'tours',
  });
  return Tours;
};