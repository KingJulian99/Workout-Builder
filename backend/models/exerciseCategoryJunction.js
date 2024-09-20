const Sequelize = require("sequelize");
const sequelize = require("../../util/database.js");

const ExerciseCategoryJunction = sequelize.define("exerciseCategoryJunction", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  exerciseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoryId: {
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

module.exports = ExerciseCategoryJunction;
