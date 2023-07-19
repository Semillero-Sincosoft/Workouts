import IconStart from "./img/IconStart";
import TextDresciption from "./TextDresciption";
import BtnCard from "./BtnCard";
import ListButtons from "./ListButtons";
import DataCards from "./data/DataCards";
import "../estilos.css";
const CardRating = () => {
  return (
    <>
      <main className="flex container flex-column">
        <section className="flex content">
          <IconStart />
          <TextDresciption
            textTitle={DataCards.ratingCard.textTitle}
            text={DataCards.ratingCard.text}
          />
          <ListButtons cantidad={DataCards.ratingCard.cantidad} />
        </section>
        <BtnCard />
      </main>
    </>
  );
};

export default CardRating;
