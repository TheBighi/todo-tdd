const TodoModel = require('../models/todo.model');

const createTodo = async (req, res, next) => {
    try{
        const createdModel = await TodoModel.create(req.body);
        res.status(201).json(createdModel);
    }
    catch (err) {
        next(err);
    }
};

const getTodos = async (req, res, next) => {
    try {
        const todos = await TodoModel.find();
        res.status(200).json(todos);
    }
    catch (err) {
        next(err);
    }
};

module.exports = {
    createTodo,
    getTodos
}