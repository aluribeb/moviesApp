const { getAll, create, getOne, remove, update, setMovieGenres,setMovieDirector, setMovieActor } = require('../controllers/movies.controllers.js');
const express = require('express');

const movieRouter = express.Router();

movieRouter.route('/movies')
    .get(getAll)
    .post(create);

movieRouter.route('/movies/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

movieRouter.route('/movies/:id/genres')
    .post(setMovieGenres);

movieRouter.route('/movies/:id/director')
    .post(setMovieDirector);

movieRouter.route('/movies/:id/actor')
  .post(setMovieActor);

module.exports = movieRouter;