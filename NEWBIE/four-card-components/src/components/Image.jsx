const Image = ({route}) => {
  return (
    <article className="img flex-and-direction">
      <img src={route} alt="" />
    </article>
  );
};

export default Image;
