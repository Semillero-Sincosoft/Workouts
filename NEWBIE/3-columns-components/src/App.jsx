// import './App.css'
import Card from "./components/Card";

function App() {
  return (
    <>
      <section className="escrito">
        <Card
          classCard={"sedan"}
          route={"./src/assets/images/icon-sedans.svg"}
          title={"SEDANS"}
          text={
            "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
          }
          classBtn={"learn1"}
        />
        <Card
          classCard={"suvs"}
          route={"./src/assets/images/icon-suvs.svg"}
          title={"SUVS"}
          text={
            "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
          }
          classBtn={"learn2"}
        />
        <Card
          classCard={"luxu"}
          route={"./src/assets/images/icon-luxury.svg"}
          title={"LUXURY"}
          text={
            "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
          }
          classBtn={"learn3"}
        />
      </section>
    </>
  );
}

export default App;
