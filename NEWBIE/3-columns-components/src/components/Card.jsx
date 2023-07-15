import Img from "./img";
import ContentInfo from "./ContentInfo";
import Button from "./Button";
import "../column.css";
const Card = ({ colorCard, image, title, text }) => {
  return (
    <article className={`${colorCard} flex-direction`}>
      {image}
      <ContentInfo title={title} text={text} />
      <Button />
    </article>
  );
};

export default Card;
