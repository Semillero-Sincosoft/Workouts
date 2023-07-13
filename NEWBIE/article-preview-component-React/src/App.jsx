import { ContentImage } from "./components/ContentImage";
import { DescriptionCard } from "./components/DescriptionCard";

import "./estilos.css";
import "./utilidades/utilidades.css";
function App() {
  return (
    <main className="container">
      <section className="content display-flex">
        <ContentImage
          route={"./src/assets/images/drawers.jpg"}
          classe={"content-img"}
          classeImg={"img"}
        />
        <DescriptionCard />

      </section>
    </main>
  );
}

export default App;
