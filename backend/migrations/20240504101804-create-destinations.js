'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('destinations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      destination_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      destination_title1: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      description1: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      destination_title2: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      description2: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      image_preview: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('destinations');
  }
};