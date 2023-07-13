export const Opcion = ({ title,text }) => {
  return (
    <section>
      <details className="content-2-details">
        <summary className="content-2-details-summary">
          {title}
          <img className="flecha" src="./src/assets/images/icon-arrow-down.svg" alt="" />
        </summary>
        <p className="content-2-details-parrafo">{text}</p>
      </details>
      <hr  className="content2-line"/>
    </section>
  );
};
