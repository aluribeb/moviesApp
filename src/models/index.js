const Actors = require( '../models/Actors.js' );
const Movies = require('../models/Movies.js');
const Directors = require( "../models/Directors.js" ) ;
const Genre = require( "../models/Genre.js" ) ;

//actors-genero
Actors.belongsToMany(Genre, { through: "artists_genres"})
Genre.belongsToMany(Actors, { through: "artists_genres"})
//actors-movies
Actors.belongsToMany(Movies, { through: "artists_movies"})
Movies.belongsToMany(Actors, { through: "artists_movies"})
//movies-genero
Movies.belongsToMany(Genre, {through: "movies_genres"})
Genre.belongsToMany(Movies, {through: "movies_genres"})
//movies-directors
Movies.belongsToMany(Directors, {through: "movies_directors"})
Directors.belongsToMany(Movies, {through: "movies_directors"})
