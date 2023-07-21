import LogoProyect from "./imgs/LogoProyect";
import BtnBackProject from "./BtnBackProject";
import BtnBookMark from "./BtnBookMark";
const SupportCard = () => {
  return (
    <section className="card-monitor">
      <LogoProyect />
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="content-btn-bookmark">
        <BtnBackProject />
        <BtnBookMark />
      </div>
    </section>
  );
};

export default SupportCard;
