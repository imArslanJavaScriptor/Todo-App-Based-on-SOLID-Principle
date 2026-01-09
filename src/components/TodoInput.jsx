import { useState } from 'react';

const TodoInput = ({ onAdd }) => { // ISP: Only needs 'onAdd' prop
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd({ text, completed: false });
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;