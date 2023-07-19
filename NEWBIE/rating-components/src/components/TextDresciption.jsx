const TextDresciption = ({ textTitle, text }) => {
  return (
    <>
      <h1 className="title">{textTitle}</h1>
      <p className="descripcion">{text}</p>
    </>
  );
};

export default TextDresciption;
