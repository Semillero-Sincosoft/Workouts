import { ContentImage } from "./components/ContentImage";
import { Description } from "./components/Description";
import "./estilos.css";
import "./utilidades/utilidades.css";
// import "./components/index.js";
import { ButtonSumit } from "./components/ButtonSumit";
function App() {
  return (
    <main className="flex container flex-column">
      <section className="flex content">
        <ContentImage
          classContent={"flex img-container"}
          image={"./src/assets/images/icon-star.svg"}
        />
        <Description
          classTitle={"title"}
          title={"How did we do?"}
          text={
            " Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
          }
          classDescription={"descripcion"}
        />
        <ButtonSumit />
      </section>
    </main>
  );
}

export default App;
