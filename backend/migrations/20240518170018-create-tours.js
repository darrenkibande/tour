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
      destination_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      image_preview: {
        type: Sequelize.STRING,
        allowNull: false
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tours');
  }
};