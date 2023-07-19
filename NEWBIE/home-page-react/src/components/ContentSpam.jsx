export const ContentSpam = ({ imageSpam, enumeration, title, text }) => {
  return (
    <section className="content-card">
      <article className="content-img">{imageSpam}</article>
      <article className="card">
        <h2>{enumeration}</h2>
        <p className="subtitle">{title}</p>
        <p>{text}</p>
      </article>
    </section>
  );
};
