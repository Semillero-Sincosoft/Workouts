const ImgCard = ({ route, classTag }) => {
  return (
    <>
      <img className={classTag} src={route} alt="" />
    </>
  );
};

export default ImgCard;
