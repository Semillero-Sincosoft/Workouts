const ListButtons = ({ cantidad }) => {
  const numbers = Array.from({ length: cantidad }, (_, index) => index + 1);
  return (
    <div className="flex numbers">
      {numbers.map((number) => (
        <button key={number} className="num">
          {number}
        </button>
      ))}
    </div>
  );
};

export default ListButtons;
