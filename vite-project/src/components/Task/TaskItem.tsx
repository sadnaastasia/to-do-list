function TaskItem() {
  return (
    <div className="flex flex-row justify-between bg-pink-50 rounded-sm p-1 px-2">
      <div className="flex gap-2 items-center">
        <input type="checkbox" />
        TASK
      </div>
      <button className="bg-purple-400 hover:bg-purple-300 p-2 rounded-md">
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
