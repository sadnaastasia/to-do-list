import SummaryItem from './SummaryItem.tsx';
import { Task } from '../../App.tsx';

function Summary({ tasks }: { tasks: Task[] }) {
  const total = tasks.length;
  const pending = tasks.filter((task: Task) => task.done === false).length;
  const done = tasks.filter((task: Task) => task.done === true).length;
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
      <SummaryItem itemName={'Total'} itemValue={total}></SummaryItem>
      <SummaryItem itemName={'To Do'} itemValue={pending}></SummaryItem>
      <SummaryItem itemName={'Done'} itemValue={done}></SummaryItem>
    </div>
  );
}

export default Summary;
