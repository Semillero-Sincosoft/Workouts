import { BtnCard } from "./BtnCard";

export const CardStand = ({ stand, price, text, units, textBtn }) => {
  return (
    <article className="card">
      <div className="title-card">
        <h3>{stand}</h3>
        <p>{price}</p>
      </div>
      <p className="text-card">{text}</p>
      <section className="content-btn-card">
        <div className="content-left">
          <h2>{units}</h2>
          <p>left</p>
        </div>
        <BtnCard textBtn={textBtn} />
      </section>
    </article>
  );
};
