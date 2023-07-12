import { BtnMoreInfo } from "./BtnMoreInfo";
import { ContentImage } from "./imageCard";

export const DescriptionCard = ({ classContent,route, title, text, classBtn }) => {
  return (
    <article className={`${classContent} flex-direction`}>
      <ContentImage route={`${route}`} />
      <h1 className="title">{title}</h1>
      <p className="text">{text}</p>

      <BtnMoreInfo classse={`${classBtn}`} />
    </article>
  );
};
