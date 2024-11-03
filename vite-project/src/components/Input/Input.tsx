import { FormEvent, useState } from 'react';

function Input({
  handleSubmit,
}: {
  handleSubmit(e: FormEvent<HTMLFormElement>, value: string): void;
}) {
  const [newTask, setNewTask] = useState('');
  return (
    <form
      action=""
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        handleSubmit(e, newTask);
        setNewTask('');
      }}
    >
      <div className="flex flex-col">
        <label className="text-white">Enter your next task:</label>
        <input
          className="p-1 rounded-sm"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        ></input>
      </div>
      <button
        type="submit"
        className="rounded-sm text-pink-500 p-1 bg-pink-100 hover:bg-pink-200"
      >
        Add task
      </button>
    </form>
  );
}
export default Input;
