import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container.tsx';
import Summary from './components/Summary/Summary.tsx';
import Input from './components/Input/Input.tsx';
import Tasks from './components/Tasks/Tasks.tsx';

export interface Task {
  name: string;
  done: boolean;
  id: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault();
    const newTask = { name: value, done: false, id: uuidv4() };
    setTasks((tasks) => [...tasks, newTask]);
  };
  const toggleDoneTask = (done: boolean, id: string) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          task.done = done;
        }
        return task;
      })
    );
  };
  const handleDeleteTask = (id: string) => {
    setTasks((tasks) => tasks.filter((task) => task.id != id));
  };
  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col items-center">
        <div className="border border-pink-100 shadow p-6 flex flex-col gap-10 sm:p-10 sm:w-[640px]">
          <div className="p-4">
            <Container title={'Summary'}>
              <Summary tasks={tasks} />
            </Container>
          </div>
          <div className="p-4">
            <Container>
              <Input handleSubmit={handleSubmit} />
            </Container>
          </div>
          <div className="p-4">
            <Container title={'Tasks'}>
              <Tasks
                tasks={tasks}
                toggleDoneTask={toggleDoneTask}
                handleDeleteTask={handleDeleteTask}
              />
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
