const Sequelize = require("sequelize");
const sequelize = require("../../util/database.js");

const WorkoutStep = sequelize.define("workoutStep", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  workoutId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  condition: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  stepNumber: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  nextStepOne: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  nextStepTwo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  exerciseInstanceId: {
    type: DataTypes.INTEGER,
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

module.exports = WorkoutStep;
