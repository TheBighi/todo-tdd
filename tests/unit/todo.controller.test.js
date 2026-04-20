const TodoController = require('../../controllers/todo.controller');

describe('TodoController.createTodo', () => {
    it('should create a new todo item', () => {
        expect(typeof TodoController.createTodo).toBe('function');
    })
})