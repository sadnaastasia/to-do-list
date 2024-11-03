import TaskItem from './TaskItem.tsx';
import { Task } from '../../App.tsx';

function Tasks({
  tasks,
  toggleDoneTask,
  handleDeleteTask,
}: {
  tasks: Task[];
  toggleDoneTask(done: boolean, id: string): void;
  handleDeleteTask(id: string): void;
}) {
  return (
    <div className="flex flex-col gap-2">
      {tasks.length ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            name={task.name}
            done={task.done}
            id={task.id}
            toggleDoneTask={toggleDoneTask}
            handleDeleteTask={handleDeleteTask}
          />
        ))
      ) : (
        <span className="text-pink-50"> Add new task!</span>
      )}
    </div>
  );
}

export default Tasks;
