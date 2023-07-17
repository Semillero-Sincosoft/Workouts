import TextContent from "./TextContent";
import ContentStars from "./ContentStars";
import "../social-proof.css";
const Page = () => {
  return (
    <main className="container">
      <section className="content flex-and-direction">
        <header className="title">
          <article className="products flex-and-direction">
            <TextContent
              textTitle="10,000+ of our users love our products."
              text="We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services."
            />
          </article>
          <section className="reviews flex-and-direction">
            <ContentStars
              classContentStar="content-stars-1"
              ratingPage="Reviews"
            />
            <ContentStars
              classContentStar="content-stars-2"
              ratingPage="Guru"
            />
            <ContentStars
              classContentStar="content-stars-3"
              ratingPage="BestTech"
            />
          </section>
        </header>
      </section>
    </main>
  );
};

export default Page;
