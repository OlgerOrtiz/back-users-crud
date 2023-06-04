const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
const User = sequelize.define('user', {
    // Definimos las columnas aquí
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY
    },
});

module.exports = User;