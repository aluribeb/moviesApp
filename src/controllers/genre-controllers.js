const catchError = require('../utils/catchError');
const Genre = require('../models/Genre.js');

const getAll = catchError(async (req, res) => {
    const genres = await Genre.findAll();
    return res.json(genres)
});

const create = catchError(async (req, res) => {
    const { name } = req.body;
    const genre = await Genre.create({
        name
    });
    return res.status(201).json(genre);
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const genre = await Genre.findByPk(id);
    return res.json(genre);
});

const remove = catchError(async (req, res) => {
    const { id } = req.params;
    await Genre.destroy({ where: { id } });
    return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const genre = await Genre.update(
        { name },
        { where: { id }, returning: true }
    );
    return res.json(genre[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}