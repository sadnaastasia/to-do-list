function Container({
  title,
  children,
}: {
  title?: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className="bg-pink-400 p-4 border shadow rounded-md">
      {title && <h2 className="text-xl pb-2 text-white">{title}</h2>}
      <div>{children}</div>
    </div>
  );
}
export default Container;
