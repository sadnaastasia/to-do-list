function TaskItem({
  name,
  done,
  id,
  toggleDoneTask,
  handleDeleteTask,
}: {
  name: string;
  done: boolean;
  id: string;
  toggleDoneTask(done: boolean, id: string): void;
  handleDeleteTask(id: string): void;
}) {
  return (
    <div className="flex flex-row justify-between bg-pink-50 rounded-sm p-1 px-2">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={done}
          onChange={() => toggleDoneTask(!done, id)}
        />
        {name}
      </div>
      <button
        className="bg-purple-400 hover:bg-purple-300 p-2 rounded-md"
        type="button"
        onClick={() => handleDeleteTask(id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
