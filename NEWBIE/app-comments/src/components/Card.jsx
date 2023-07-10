import "../styles/main.css";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import { ButtonLikes } from "./button-likes";
const Card = ({comentario}) => {
  //const titulo = props.titulo;
  return (
    <>
      <article className="content-card">
        <ButtonLikes />
        <section className="content-comment">
          <article className="content-title-card">
            <CardHeader userName={comentario.user.username} createAt={comentario.createdAt} />
          </article>
          <CardBody  title={comentario.content} />
        </section>
      </article>
    </>
  );
};

export default Card;
