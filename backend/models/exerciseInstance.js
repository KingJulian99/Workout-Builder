const Sequelize = require("sequelize");
const sequelize = require("../../util/database.js");

const ExerciseInstance = sequelize.define("exerciseInstance", {
    exerciseInstanceId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    exericseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    workoutStepID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    duration: {
        type: Sequelize.FLOAT,
        allowNull: true,
    },
    reps: {
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

module.exports = ExerciseInstance;