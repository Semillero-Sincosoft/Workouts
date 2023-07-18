import ImgIllustration from "./img/ImgIllustration";
import TitleCard from "./TitleCard";
import { FaqContent } from "./Data/FaqContent";
import "../estilos.css";
const CardFaq = () => {
  return (
    <>
      <main className="container">
        <section className="content-1">
          <ImgIllustration />
          <div className="content-shadow"></div>
        </section>
        <section className="content-2">
          <TitleCard classTitle={"title"} text={"FAQ"} />
          <FaqContent />
        </section>
      </main>
    </>
  );
};

export default CardFaq;
