const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Actors = sequelize.define('actors', {
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
        type: DataTypes.STRING(2048)
    },
    birthday: {
        type: DataTypes.DATEONLY
    }
});

module.exports = Actors;