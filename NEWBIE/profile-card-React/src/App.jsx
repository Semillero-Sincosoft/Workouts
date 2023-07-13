import ImgCard from "./components/ImgCard";
import { TextContent } from "./components/TextContent";
import "./profile.css";

function App() {
  return (
    <main className="perfil">
      <section className="container">
        <ImgCard route={"./src/assets/images/bg-pattern-card.svg"} />
        <div className="content">
          <ImgCard
            route={"./src/assets/images/image-victor.jpg"}
            classTag={"img-perfil"}
          />
          <div className="victor">
            <TextContent
              textTitle={"Victor Crest"}
              classTitle={"name"}
              text={"London"}
              classTag={"form"}
              textSpan={"26"}
              classSpan={"year"}
            />
          </div>
        </div>
        <div className="num">
          <div className="follow">
            <TextContent
              textTitle={"80K"}
              text={"Followers"}
              classText={"description"}
            />
          </div>
          <div className="like">
            <TextContent
              textTitle={"803K"}
              text={"Likes"}
              classText={"description"}
            />
          </div>
          <div className="photo">
            <TextContent
              textTitle={"1.4K"}
              text={"Photos"}
              classText={"description"}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
