const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Dashboard = sequelize.define('Dashboard', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Dashboard;