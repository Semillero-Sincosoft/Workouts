import DataCards from "./data/DataCards";
import TextThankYou from "./TextThankYou";
import IconStart from "./img/IconStart";
const CardThank = () => {
  return (
    <>
      <section className="container-active">
        <div className="contenido">
          <header className="flex img-container-two">
            <IconStart />
          </header>
          <div className="flex selected">
            <p>You selected</p>
            <p className="raiting-selected">0</p>
            <div>
              <TextThankYou
                textTitle={DataCards.cardThankYou.textTitle}
                text={DataCards.cardThankYou.text}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardThank;
{
  /* <section className="container-active">
        <div className="contenido">
          <header className="flex img-container-two">
            <IconStart />
          </header>
          <div className="flex selected">
            <p>You selected</p>
            <p className="raiting-selected">0</p>
            <div>
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
        </div>
      </section> */
}
