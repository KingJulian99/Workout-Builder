const Sequelize = require("sequelize");
const sequelize = require("../../util/database.js");

const Exercise = sequelize.define("exercise", {
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
    allowNull: false,
  },
  imageName: {
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

module.exports = Exercise;
