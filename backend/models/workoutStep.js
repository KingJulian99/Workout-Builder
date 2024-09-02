const Sequelize = require("sequelize");
const sequelize = require("../../util/database.js");

const WorkoutStep = sequelize.define("workoutStep", {
    workoutStepId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    workoutId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    condition: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    stepNumber: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    nextStepOne: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    nextStepTwo: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    exerciserInstanceId: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    created: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    lastUpdated: {
        type: Sequelize.DATE,
        allowNull: false,
    }
});

module.exports = WorkoutStep;