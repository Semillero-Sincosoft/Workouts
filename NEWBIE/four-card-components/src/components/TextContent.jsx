const TextContent = ({ textTitle, textSubtitle, textParagraph }) => {
  return (
    <section className="title">
      <h1>{textTitle}</h1>
      <h2>{textSubtitle}</h2>
      <p>{textParagraph}</p>
    </section>
  );
};

export default TextContent;
