// Abstraction for todo operations (DIP: High-level depends on this interface, not concrete impl)
class TodoService {
  constructor(storage) {
    this.storage = storage; // Inject dependency (e.g., localStorage or mock)
  }

  getTodos() {
    return this.storage.get() || [];
  }

  addTodo(todo) {
    const todos = this.getTodos();
    todos.push(todo);
    this.storage.set(todos);
  }

  updateTodo(index, updatedTodo) {
    const todos = this.getTodos();
    todos[index] = updatedTodo;
    this.storage.set(todos);
  }

  deleteTodo(index) {
    const todos = this.getTodos();
    todos.splice(index, 1);
    this.storage.set(todos);
  }
}

// Concrete implementation using localStorage
const localStorageImpl = {
  get: () => JSON.parse(localStorage.getItem('todos')),
  set: (todos) => localStorage.setItem('todos', JSON.stringify(todos)),
};

export const todoService = new TodoService(localStorageImpl); // Injectable