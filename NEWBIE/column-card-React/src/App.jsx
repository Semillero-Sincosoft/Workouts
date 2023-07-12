import { DescriptionCard } from "./components/DescriptionCard";
import "./column.css";
import "./utilidades/utilidades.css";
function App() {
  return (
    <main className="card flex-width">
      <section className="escrito">
        <DescriptionCard
          classContent={"sedan"}
          route={"./src/assets/images/icon-sedans.svg"}
          title={"SEDANS"}
          text={
            "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
          }
          classBtn={"learn1"}
        />

        <DescriptionCard
          classContent={"suvs"}
          title={"SUSV"}
          text={
            "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
          }
          classBtn={"learn2"}
        />
        <DescriptionCard
          classContent={"luxu"}
          title={"LUXURY"}
          text={
            "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
          }
          classBtn={"learn3"}
        />
      </section>
    </main>
  );
}

export default App;
