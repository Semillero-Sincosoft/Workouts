import InputCstmPercentage from "./InputCstmPercentage";
const ListPercentageBtns = () => {
  const numbers = ['5%', '10%', '15%', '25%', '50%'];
  return (
    <article className="content-buttons">
      {numbers.map((number) => {
        return (
          <button key={number} className="buttons">
            {number}
          </button>
        );
      })}
      <InputCstmPercentage />
    </article>
  );
};

export default ListPercentageBtns;
