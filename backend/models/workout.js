const Sequelize = require("sequelize");
const sequelize = require("../../util/database.js");

const Workout = sequelize.define("workout", {
    workoutId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    firstWorkoutStep: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    createdBy: {
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

module.exports = Workout;