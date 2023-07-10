import "../styles/main.css";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody"
import { ButtonLikes } from "./button-likes";
const Card = () => {
  return (
    <>
      <article className="content-card">
        <ButtonLikes />
        <section className="content-comment">
          <article className="content-title-card">
            <CardHeader />
          </article>
        <CardBody />
        </section>
      </article>
    </>
  );
};

export default Card;
