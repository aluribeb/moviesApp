const express = require('express');
const genreRouter = require('./genre.router.js');
const actorsRouter = require( './actors.router' );
const directorsRouter = require( './directors.router' ) ;
const moviesRouter = require( './movies.routers.js' ) ;
const router = express.Router();

// colocar las rutas aquí
router.use(genreRouter)
router.use(actorsRouter)
router.use(directorsRouter)
router.use(moviesRouter)


module.exports = router;