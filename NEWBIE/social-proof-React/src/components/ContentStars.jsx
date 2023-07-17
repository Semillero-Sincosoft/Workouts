const ContentStars = ({ classContentStar, ratingPage }) => {
  return (
    <section className="reviews flex-and-direction">
      <article className={`${classContentStar} content-stars`}>
        <div className="stars">
          <img src="./src/assets/images/icon-star.svg" alt="" />
          <img src="./src/assets/images/icon-star.svg" alt="" />
          <img src="./src/assets/images/icon-star.svg" alt="" />
          <img src="./src/assets/images/icon-star.svg" alt="" />
          <img src="./src/assets/images/icon-star.svg" alt="" />
        </div>
        <div className="escrito-star">
          <span>Rated 5 Stars in {ratingPage}</span>
        </div>
      </article>
    </section>
  );
};
export default ContentStars;
