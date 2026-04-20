const TodoModel = require('../models/todo.model');

const createTodo = (req, res) => {
    const createdModel = TodoModel.create(req.body);
    res.status(201).json(createdModel);
};

module.exports = {
    createTodo
}