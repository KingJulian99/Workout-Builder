const Sequelize = require("sequelize");
const sequelize = require("../../util/database.js");

const User = sequelize.define("user", {
    userId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    config: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    isLocked: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
    },
    numRetries: {
        type: Sequelize.INTEGER,
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

module.exports = User;