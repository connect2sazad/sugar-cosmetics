const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Product = sequelize.define('Product', {
  productname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  displayimage: {
    type: DataTypes.STRING,
    allowNull: true
  },
  displaytext: {
    type: DataTypes.STRING,
    allowNull: true
  },
  offerprice: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fullprice: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  timestamps: true
});

module.exports = Product;
