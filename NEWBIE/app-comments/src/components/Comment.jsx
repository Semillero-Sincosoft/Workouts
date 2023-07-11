import "../../styles/main.css";
import { ContentBodyCard } from "./CardBody";
import { CardHeader } from "./CardHeader";
import Likes from "./Likes";
export const Card = ({ comentario }) => {
  return (
    <article className="content-card">
      <Likes score={comentario.score} />
      <section className="content-comment">
        <CardHeader
          username={comentario.user.username}
          createAt={comentario.createdAt}
        />

        <ContentBodyCard content={comentario.content} />
      </section>
    </article>
  );
};
