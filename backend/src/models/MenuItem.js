// models/MenuItem.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('votre_base_de_données', 'utilisateur', 'mot_de_passe', {
    host: 'localhost',
    dialect: 'postgres', // ou 'mysql', 'sqlite', etc.
});

const MenuItem = sequelize.define('MenuItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    label: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    parent_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    is_dropdown: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'menu_items',
    timestamps: false, // Si vous gérez les timestamps manuellement
});

module.exports = MenuItem;