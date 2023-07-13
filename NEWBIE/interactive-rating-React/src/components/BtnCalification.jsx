export const BtnCalification = () => {
  const num = [1, 2, 3, 4, 5];
  return (
    <section className="flex numbers">
      {num.map((numer) => {
        <button key={numer} className="num">
          {numer}
        </button>;
      })}
    </section>
  );
};