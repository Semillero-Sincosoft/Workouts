const TextThankYou = ({ textTitle, text }) => {
  return (
    <>
      <h1 className="subtitle">{textTitle}</h1>
      <p className="congratulations">{text}</p>
    </>
  );
};

export default TextThankYou;
