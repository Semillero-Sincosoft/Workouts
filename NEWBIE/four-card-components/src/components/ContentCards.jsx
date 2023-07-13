import { DescripcionCard } from "./DescripcionCard";
import Image from "./Image";

export const ContentCard = ({ calssCard, textCard, titleCard, img }) => {
  if (calssCard === "card-2") {
    // Manejo especial para el elemento que necesita el div anidado adicional
    return (
      <div className="columns flex-and-direction">
        <section className={`${calssCard} cards`}>
          <DescripcionCard text={textCard} title={titleCard} />
          <Image route={img} />
        </section>
        <div className="columns flex-and-direction">
          <section className="cards card-3">
            <DescripcionCard
              text="Regularly evaluates our talent to ensure quality"
              title="Karma"
            />
            <Image route="./src/assets/images/icon-karma.svg" />
          </section>
        </div>
      </div>
    );
  }

  // Estructura normal para los demás elementos
  return (
    <section className="columns flex-and-direction">
      <div className={`${calssCard} cards`}>
        <DescripcionCard text={textCard} title={titleCard} />
        <Image route={img} />
      </div>
    </section>
  );
};
