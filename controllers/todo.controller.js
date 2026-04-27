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

const updateTodo = async (req, res, next) => {
    try {
        const updatedTodo = await TodoModel.findByIdAndUpdate(
            req.params.todoId,
            req.body,
            { new: true, useFindAndModify: false }
        );
        if (updatedTodo) {
            return res.status(200).json(updatedTodo);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(404).send();
        }
        next(error);
    }
};

const findByIdAndDelete = async (req, res, next) => {
    try {
        const TodoDeleted = await TodoModel.findByIdAndDelete(req.params.todoId)
        if (TodoDeleted) {
            return res.status(200).json(TodoDeleted)
        }
        else{
            return res.status(404).send()
        }
    }
    catch(err){
        if (err.name == 'CastError') {
            return res.status(404).send()
        }
        next(err);
    }
}

module.exports = {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    findByIdAndDelete
}