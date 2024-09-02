const Sequelize = require("sequelize");
const sequelize = require("../../util/database.js");

const Category = sequelize.define("category", {
    categoryId: {
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

module.exports = Category;