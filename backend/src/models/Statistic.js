const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Statistic = sequelize.define('Statistic', {
    metric: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    period: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Statistic;