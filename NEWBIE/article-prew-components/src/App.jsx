import Img from "./components/Img";
import TextContent from "./components/TextContent";
import "./estilos.css";

function App() {
  return (
    <div className="container">
      <div className="content display flex">
        <Img
          route={"./src/assets/images/drawers.jpg"}
          classTag={"content-img"}
          classImg={"img"}
        />
        <TextContent
          mainText={
            "Shift the overall look and feel by adding these wonderful touches to furniture in your home"
          }
          text={
            "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete."
          }
        />
      </div>
    </div>
  );
}

export default App;
