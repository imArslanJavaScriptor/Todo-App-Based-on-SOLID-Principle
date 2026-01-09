const TodoFooter = ({ todos, onClearCompleted }) => {
  const activeCount = todos.filter((t) => !t.completed).length;
  const hasCompleted = todos.some((t) => t.completed);

  return (
    <div className="flex justify-between items-center mt-6 text-sm text-gray-600 dark:text-gray-400">
      <span>{activeCount} {activeCount === 1 ? 'item' : 'items'} left</span>
      {hasCompleted && (
        <button
          onClick={onClearCompleted}
          className="text-red-500 hover:text-red-700"
        >
          Clear completed
        </button>
      )}
    </div>
  );
};

export default TodoFooter;