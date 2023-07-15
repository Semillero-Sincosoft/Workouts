import Card from "./components/Card";
import { ImgSedan } from "./components/image/ImgSedan";

export const CardContent = () => {
  return (
    <section className="escrito">
      <Card
        colorCard="sedan"
        image={<ImgSedan />}
        title="SEDANS"
        text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      />
      <Card
        colorCard={"suvs"}
        route={"./src/assets/images/icon-suvs.svg"}
        tixtle={"SUVS"}
        text={
          "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        }
      />
      <Card
        colorCard={"luxu"}
        route={"./src/assets/images/icon-luxury.svg"}
        title={"LUXURY"}
        text={
          "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        }
      />
    </section>
  );
};
