'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      productname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      displayimage: {
        type: Sequelize.STRING,
        allowNull: true
      },
      displaytext: {
        type: Sequelize.STRING,
        allowNull: true
      },
      offerprice: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fullprice: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
