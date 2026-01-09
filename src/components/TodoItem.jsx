import { useState } from "react";

const TodoItem = ({ todo, index, onToggle, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      onUpdate(index, { ...todo, text: editText.trim() });
      setIsEditing(false);
    }
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          autoFocus
          className="flex-1 px-3 py-1 rounded border border-blue-500 bg-transparent"
        />
      ) : (
        <div className="flex items-center gap-4 flex-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(index)}
            className="todo-checkbox"
          />
          <span
            className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.text}
          </span>
        </div>
      )}
      <button
        onClick={() => onDelete(index)}
        className="text-red-500 hover:text-red-700 font-medium"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;