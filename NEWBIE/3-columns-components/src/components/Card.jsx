import ContentInfo from "./ContentInfo";
import BtnLearnMore from "./BtnLearnMore";
import "../column.css";
const Card = ({ colorCard, image, title, text }) => {
  return (
    <article className={`${colorCard} flex-direction`}>
      {image}
      <ContentInfo title={title} text={text} />
      <BtnLearnMore />
    </article>
  );
};

export default Card;
