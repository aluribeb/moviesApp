const catchError = require('../utils/catchError');
const Movies = require('../models/Movies.js');
const Actors = require('../models/Actors.js');
const Directors = require( '../models/Directors.js' );
const Genre = require('../models/Genre.js')

const getAll = catchError(async (req, res) => {
    const movies = await Movies.findAll({include:[Genre, Directors, Actors ]});
    return res.json(movies)
});

const create = catchError(async (req, res) => {
    const { name, image, synopsis, release_year } = req.body;
    const movies = await Movies.create({
        name,
        image,
        synopsis,
        release_year
    });
    return res.status(201).json(movies);
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const movies = await Movies.findByPk(id);
    return res.json(movies);
});

const remove = catchError(async (req, res) => {
    const { id } = req.params;
    await Movies.destroy({ where: { id } });
    return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
    const { id } = req.params;
    const { name, image, synopsis, release_year } = req.body;
    const movies = await Movies.update(
        { 
            name,
            image,
            synopsis,
            release_year
        },
        { where: { id }, returning: true }
    );
    return res.json(movies[1][0]);
});

const setMovieGenres = catchError(async(req, res) => {
    const {id} = req.params
    const movie = await Movies.findByPk(id)
    if(!movie) return res.status(404).json({ message: "Movie not found"})
    await movie.setGenres(req.body)
    const genres = await movie.getGenres()
    return res.json(genres)
})

const setMovieDirector = catchError(async(req, res) => {
    const {id} = req.params
    const movie = await Movies.findByPk(id)
    if(!movie) return res.status(404).json({ message: "Movie not found"})
    await movie.setDirectors(req.body)
    const directors = await movie.getDirectors()
    return res.json(directors)
})

const setMovieActor = catchError(async(req, res) => {
    const {id} = req.params
    const movie = await Movies.findByPk(id)
    if(!movie) return res.status(404).json({ message: "Movie not found"})
    await movie.setActors(req.body)
    const actors = await movie.getActors()
    return res.json(actors)
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update, 
    setMovieGenres,
    setMovieDirector,
    setMovieActor
}