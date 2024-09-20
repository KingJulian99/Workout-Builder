const Sequelize = require("sequelize");
const sequelize = require("../../util/database.js");

const WorkoutInstance = sequelize.define("workoutIntance", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  workoutId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  currentWorkoutStep: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  currentSetCount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  owner: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  timeStarted: {
    defaultValue: Sequelize.NOW,
    type: DataTypes.DATE,
    allowNull: true,
  },
  timeCompleted: {
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

module.exports = WorkoutInstance;
