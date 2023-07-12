import ImgCard from "./components/ImgCard";
import TextContent from "./components/TextContent";
import BtnCard from "./components/BtnCard";
import "./estilos.css";

function App() {
  return (
    <>
      <main className="flex container flex-column">
        <section className="flex content">
          <ImgCard
            classContainer={"flex img-container"}
            route={"./src/assets/images/icon-star.svg"}
          />
          <TextContent
            classTitle={"title"}
            textTitle={"How did we do?"}
            classText={"descripcion"}
            text={
              "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
            }
          />
          <div className="flex numbers"></div>
          <BtnCard />
        </section>
      </main>
      <section className="container-active">
        <div className="contenido">
          <ImgCard
            classContainer={"flex img-container-two"}
            route={"./src/assets/images/illustration-thank-you.svg"}
          />
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
}

export default App;
