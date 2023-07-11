import "../styles/main.css";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import { ButtonLikes } from "./buttonLikes";
const Card = ({comentario}) => {
  //const titulo = props.titulo;
  return (
    <>
      <article className="content-card">
        <ButtonLikes score={comentario.score} />
        <section className="content-comment">
          <article className="content-title-card">
            <CardHeader userName={comentario.user.username} createAt={comentario.createdAt} img={comentario.user.image.png} />
          </article>
          <CardBody  title={comentario.content} />
        </section>
      </article>
    </>
  );
};

export default Card;
