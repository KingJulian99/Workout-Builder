const Sequelize = require("sequelize");
const sequelize = require("../../util/database.js");

const ExerciseInstance = sequelize.define("exerciseInstance", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  exericseId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Exercise",
      key: "id",
    },
    allowNull: false,
  },
  workoutStepId: {
    type: DataTypes.INTEGER,
    references: {
      model: "workoutStep",
      key: "id",
    },
    allowNull: false,
  },
  duration: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  reps: {
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

module.exports = ExerciseInstance;
