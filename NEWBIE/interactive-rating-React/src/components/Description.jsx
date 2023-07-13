export const Description = ({ title, classTitle, text, classDescription }) => {
  return (
    <>
      <h1 className={classTitle}>{title}</h1>
      <p className={classDescription}>{text}</p>
    </>
  );
};
