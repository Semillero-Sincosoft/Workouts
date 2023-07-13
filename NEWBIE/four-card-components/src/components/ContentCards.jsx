import { DescripcionCard } from "./DescripcionCard";
import Image from "./Image";
export const ContentCard = ({ calssCard, textCard, titleCard, img }) => {
  return (
    <section className="columns flex-and-direction">
      <div className={`${calssCard} cards`}>
        <DescripcionCard text={textCard} title={titleCard} />
        <Image route={img} />
      </div>
    </section>
  );
};
