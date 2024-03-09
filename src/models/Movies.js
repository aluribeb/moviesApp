const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Movies = sequelize.define('movies', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(2068)
    },
    synopsis: {
        type: DataTypes.TEXT
    },
    release_year:{
        type :DataTypes.DATEONLY
    }
});

module.exports = Movies;