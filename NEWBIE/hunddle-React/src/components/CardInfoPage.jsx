const CardInfoPage = ({ classCard, img, title, text }) => {
  return (
    <>
      <article className={`content-cards ${classCard}`}>
        <div className="card-image">{img}</div>
        <article className="cards flex-and-direction">
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      </article>
    </>
  );
};

export default CardInfoPage;
