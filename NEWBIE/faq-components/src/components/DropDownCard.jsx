const DropDownCard = ({
  classDetails,
  classSummary,
  textSummary,
  classImg,
  route,
  classTextDetails,
  textDetails,
  classHr,
}) => {
  return (
    <>
      <details className={classDetails}>
        <summary className={classSummary}>
          {textSummary}
          <img className={classImg} src={route} alt="" />
        </summary>
        <p className={classTextDetails}>{textDetails}</p>
      </details>
      <hr className={classHr} />
    </>
  );
};

export default DropDownCard;
