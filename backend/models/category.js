const Sequelize = require("sequelize");
const sequelize = require("../../util/database.js");

const Category = sequelize.define("category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created: {
    defaultValue: Sequelize.NOW,
    type: DataTypes.DATE,
    allowNull: false,
  },
  lastUpdated: {
    defaultValue: Sequelize.NOW,
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Category;
