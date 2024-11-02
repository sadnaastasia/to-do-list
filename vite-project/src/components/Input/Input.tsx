function Input() {
  return (
    <form action="" className="flex flex-col gap-3">
      <div className="flex flex-col">
        <label className="text-white">Enter your next task:</label>
        <input className="p-1 rounded-sm" type="text"></input>
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
