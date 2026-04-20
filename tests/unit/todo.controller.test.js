const TodoController = require('../../controllers/todo.controller');
const TodoModel = require('../../models/todo.model');
const httpMocks = require('node-mocks-http');
const newTodo = require('../mock-data/new-todo.json');

TodoModel.create = jest.fn();

let req, res, next;

beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
});

describe('TodoController.createTodo', () => {
    beforeEach(() => {
        req.body = newTodo;
    })
    it('should create a new todo item', () => {
        expect(typeof TodoController.createTodo).toBe('function');
    })
    it('should call TodoMode.create', () => {
        TodoController.createTodo(req, res, next);
        expect(TodoModel.create).toHaveBeenCalledWith(newTodo);
    })
    it('it should return 201', () => {
        TodoModel.create.mockReturnValue(newTodo);
        TodoController.createTodo(req, res, next);
        expect(res._getJSONData()).toStrictEqual(newTodo);
    })
})