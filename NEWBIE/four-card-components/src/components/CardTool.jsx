export const CardTool = ({ colorCard, titleCard, textCard, imageCard }) => {
  return (
    <section className={`${colorCard}`}>
      <article className="title-content">
        <h2>{titleCard}</h2>
        <p>{textCard}</p>
      </article>
      <article className="img flex-and-direction">{imageCard}</article>
    </section>
  );
};
