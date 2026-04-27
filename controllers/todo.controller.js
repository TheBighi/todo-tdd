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

const getTodoById = async (req, res, next) => {
    try {
        const todoModel = await TodoModel.findById(req.params.todoId)
        if (todoModel){
            res.status(200).json(todoModel)
        } else {
            res.status(404).send()
        }
    }
    catch(err){
        if (err.kind === 'ObjectId') {
            res.status(404).send()
        } else {
            next(err)
        }
    }
}

module.exports = {
    createTodo,
    getTodos,
    getTodoById
}