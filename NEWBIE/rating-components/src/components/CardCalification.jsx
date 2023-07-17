import IconStart from "./img/IconStart";
import TextContent from "./TextContent";
import BtnCard from "./BtnCard";
import ListButtons from "./ListButtons";
import "../estilos.css";
const CardCalification = () => {
  return (
    <>
      <main className="flex container flex-column">
        <section className="flex content">
          <IconStart />
          <TextContent
            classTitle={"title"}
            textTitle={"How did we do?"}
            classText={"descripcion"}
            text={
              "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
            }
          />
          <ListButtons cantidad={5} />
        </section>
        <BtnCard />
      </main>
      <section className="container-active">
        <div className="contenido">
          <IconStart />
          <div className="flex selected">
            <p>You selected</p>
            <p className="raiting-selected">0</p>
            <TextContent
              classTitle={"subtitle"}
              textTitle={"Thank you!"}
              classText={"congratulations"}
              text={
                "we appreciate you taking the time to give a rating. If you ever need more support, don´t hesitate to get in touch!"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CardCalification;
