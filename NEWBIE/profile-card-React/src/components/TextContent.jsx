export const TextContent = ({ textTitle, classTitle, text, classText,textSpan, classSpan }) => {
  return (
    <>
      <h1 className={classTitle}>{textTitle} <span className={classSpan}>{textSpan}</span></h1>
      <p className={classText}> {text}</p>
    </>
  );
};
