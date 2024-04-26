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
      dest_name: {
        type: Sequelize.STRING(25),
        allowNull: false
      },
      description_1: {
        type: Sequelize.STRING(225),
        allowNull: false
      },
      description_2: {
        type: Sequelize.STRING(225),
        allowNull: false
      },
      dest_heading_1: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      dest_heading_2: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      image_preview: {
        type: Sequelize.BLOB
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('destinations');
  }
};