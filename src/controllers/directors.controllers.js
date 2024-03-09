const catchError = require('../utils/catchError');
const Directors = require('../models/Directors.js');

const getAll = catchError(async (req, res) => {
    const director = await Directors.findAll();
    return res.json(director)
});

const create = catchError(async (req, res) => {
    const { first_name, last_name, nationality, image, birthday } = req.body;
    const directors = await Directors.create({
        first_name,
        last_name,
        nationality,
        image,
        birthday
    });
    return res.status(201).json(directors);
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const directors = await Directors.findByPk(id);
    return res.json(directors);
});

const remove = catchError(async (req, res) => {
    const { id } = req.params;
    await Directors.destroy({ where: { id } });
    return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, nationality, image, birthday } = req.body;
    const directors = await Directors.update(
        {         first_name,
            last_name,
            nationality,
            image,
            birthday },
        { where: { id }, returning: true }
    );
    return res.json(directors[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}