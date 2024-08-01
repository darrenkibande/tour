'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      destination_title: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      destination_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      image_preview: {
        type: Sequelize.STRING,
        allowNull: false
      },
      info_overview: {
        type: Sequelize.STRING(300),
        allowNull: false
      },
      info_highlight: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      departure: {
        type: Sequelize.STRING
      },
      departure_date: {
        type: Sequelize.DATE
      },
      return_date: {
        type: Sequelize.DATE
      },
      included: {
        type: Sequelize.STRING(255)
      },
      exluded: {
        type: Sequelize.STRING(255)
      },
      travel_plan_overview: {
        type: Sequelize.STRING(300)
      },
      travel_plan_day_title: {
        type: Sequelize.STRING(30)
      },
      travel_plan_time: {
        type: Sequelize.DATE
      },
      travel_plan_day_description: {
        type: Sequelize.STRING(255)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tours');
  }
};