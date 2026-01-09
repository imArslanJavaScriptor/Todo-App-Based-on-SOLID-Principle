import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';
import TodoFooter from './components/TodoFooter';
import ThemeToggle from './components/ThemeToggle';
import { todoService } from './services/TodoService';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setTodos(todoService.getTodos());
  }, []);

  const refreshTodos = () => setTodos(todoService.getTodos());

  const handleAdd = (newTodo) => {
    todoService.addTodo({ ...newTodo, id: Date.now() });
    refreshTodos();
  };

  const handleToggle = (index) => {
    const todos = todoService.getTodos();
    todos[index].completed = !todos[index].completed;
    todoService.storage.set(todos);
    refreshTodos();
  };

  const handleUpdate = (index, updatedTodo) => {
    todoService.updateTodo(index, updatedTodo);
    refreshTodos();
  };

  const handleDelete = (index) => {
    todoService.deleteTodo(index);
    refreshTodos();
  };

  const handleClearCompleted = () => {
    const filtered = todos.filter((t) => !t.completed);
    todoService.storage.set(filtered);
    refreshTodos();
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Todo App</h1>
          <ThemeToggle />
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
          <TodoInput onAdd={handleAdd} />
          <TodoFilters currentFilter={filter} onFilterChange={setFilter} />
          <TodoList
            todos={filteredTodos}
            onToggle={handleToggle}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
          {todos.length > 0 && (
            <TodoFooter todos={todos} onClearCompleted={handleClearCompleted} />
          )}
        </div>

        <footer className="text-center mt-10 text-sm text-gray-500">
          Built with SOLID principles • Double-click to edit • Tailwind CSS
        </footer>
      </div>
    </div>
  );
}

export default App;