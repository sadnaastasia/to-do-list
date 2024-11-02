import SummaryItem from './SummaryItem.tsx';

function Summary() {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
      <SummaryItem itemName={'Total'} itemValue={3}></SummaryItem>
      <SummaryItem itemName={'To Do'} itemValue={2}></SummaryItem>
      <SummaryItem itemName={'Done'} itemValue={1}></SummaryItem>
    </div>
  );
}

export default Summary;
