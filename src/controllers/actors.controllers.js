const catchError = require('../utils/catchError');
const Actors = require('../models/Actors.js');

const getAll = catchError(async (req, res) => {
    const actors = await Actors.findAll();
    return res.json(actors)
});

const create = catchError(async (req, res) => {
    const { first_name, last_name, nationality, image, birthday } = req.body;
    const actor = await Actors.create({
        first_name,
        last_name,
        nationality,
        image,
        birthday
    });
    return res.status(201).json(actor);
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const actor = await Actors.findByPk(id);
    return res.json(actor);
});

const remove = catchError(async (req, res) => {
    const { id } = req.params;
    await Actors.destroy({ where: { id } });
    return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, nationality, image, birthday } = req.body;
    const actor = await Actors.update(
        {   first_name,
            last_name,
            nationality,
            image,
            birthday },
        { where: { id }, returning: true }
    );
    return res.json(actor[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}