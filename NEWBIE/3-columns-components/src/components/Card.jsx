import Img from "./img"
import ContentInfo from "./ContentInfo"
import Button from "./Button"
import '../column.css'
const Card = ({ classCard, route, title, text, classBtn }) => {
    return (
      <article className={`${classCard} flex-direction`}>
        <Img route={route} />
        <ContentInfo title={title} text={text} />
        <Button classBtn={classBtn} />
      </article>
    );
  };
  
export default Card
