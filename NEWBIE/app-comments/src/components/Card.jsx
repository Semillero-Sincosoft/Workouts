import "../styles/main.css";
import {ContentBodyCard} from "./CardBody"
import CardHeader from "./CardHeader";
const Card = () => {
  return (
    <>
      <article className="content-card">
        <CardHeader />
        <section className="content-comment">
            <ContentBodyCard />
        </section>
        <div>
            <p></p>
        </div>
      </article>
    </>
  );
};

export default Card;
