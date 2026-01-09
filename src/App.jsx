import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput.jsx';
import TodoList from './components/TodoList.jsx';
import { todoService } from './services/TodoService.js';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(todoService.getTodos());
  }, []);

  const handleAdd = (newTodo) => {
    todoService.addTodo(newTodo);
    setTodos(todoService.getTodos());
  };

  const handleUpdate = (index, updatedTodo) => {
    todoService.updateTodo(index, updatedTodo);
    setTodos(todoService.getTodos());
  };

  const handleDelete = (index) => {
    todoService.deleteTodo(index);
    setTodos(todoService.getTodos());
  };

  return (
    <div>
      <h1>Todo List (SOLID Demo)</h1>
      <TodoInput onAdd={handleAdd} />
      <TodoList todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}

export default App;