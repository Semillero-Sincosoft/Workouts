import IconArrow from "./img/IconArrow";
const CardQuestion = ({ textSummary, textDetails }) => {
  return (
    <>
      <details className="content-2-details">
        <summary className="content-2-details-summary">
          {textSummary}
          <IconArrow />
        </summary>
        <p className="content-2-details-parrafo">{textDetails}</p>
      </details>
      <hr className="content2-line" />
    </>
  );
};

export default CardQuestion;
