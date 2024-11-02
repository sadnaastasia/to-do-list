function SummaryItem({
  itemName,
  itemValue,
}: {
  itemName: string;
  itemValue: number;
}) {
  return (
    <article className="flex flex-row justify-between bg-pink-200 w-36 rounded-sm p-2">
      <h3>{itemName}</h3>
      <span className="bg-pink-800 rounded-sm text-white px-2">
        {itemValue}
      </span>
    </article>
  );
}

export default SummaryItem;
