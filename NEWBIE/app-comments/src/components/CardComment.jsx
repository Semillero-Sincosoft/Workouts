import "../styles/main.css";
import CardHeader from "./Header";
import CardBody from "./TextContent";
import { LikeCounter } from "./LikeCounter";
const CardComment = ({ comentario }) => {
  return (
    <article className="content-card">
      <LikeCounter score={comentario.score} />
      <section className="content-comment">
        <article className="content-title-card">
          <CardHeader
            userName={comentario.user.username}
            createAt={comentario.createdAt}
            img={comentario.user.image.png}
          />
        </article>
        <CardBody title={comentario.content} />
      </section>
    </article>
  );
};
export default CardComment;
