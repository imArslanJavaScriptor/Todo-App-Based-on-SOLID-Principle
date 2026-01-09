import TodoItem from './TodoItem';

const TodoList = ({ todos, onUpdate, onDelete }) => { // ISP: Minimal props
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;