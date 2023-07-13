export const TextContent = ({ textTitle, classTitle, text, classText }) => {
  return (
    <>
      <h1 className={classTitle}>{textTitle} <span></span> </h1>
      <p className={classText}> {text}</p>
    </>
  );
};
