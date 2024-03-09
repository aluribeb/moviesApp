const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Directors = sequelize.define('directors', {
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    nationality: {
        type: DataTypes.STRING(50)
    },
    image: {
        type: DataTypes.TEXT
    },
    birthday: {
        type: DataTypes.DATEONLY
    }
});

module.exports = Directors;