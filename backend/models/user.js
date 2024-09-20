const Sequelize = require("sequelize");
const sequelize = require("../../util/database.js");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  config: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isLocked: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  numRetries: {
    type: DataTypes.INTEGER,
    allowNull: false,
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

module.exports = User;
