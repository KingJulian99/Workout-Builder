const Sequelize = require("sequelize");
const sequelize = require("../../util/database.js");

const ExerciseCategoryJunction = sequelize.define("exerciseCategoryJunction", {
    exerciseCategoryJunctionId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    exericseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
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

module.exports = ExerciseCategoryJunction;