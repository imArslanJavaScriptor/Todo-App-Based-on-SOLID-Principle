import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onUpdate, onDelete }) => {
  if (todos.length === 0) {
    return <p className="text-center text-gray-500">No todos yet. Add one above!</p>;
  }

  return (
    <div className="space-y-3">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;