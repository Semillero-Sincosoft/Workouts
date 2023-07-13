export const DescripcionCard = ({ text, title }) => {
  return (
    <article className="title-content">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};
