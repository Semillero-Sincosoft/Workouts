import Card from "./components/Card";
import { ImgLuxury } from "./components/image/ImgLuxury";
import { ImgSedan } from "./components/image/ImgSedan";
import { ImgSuvs } from "./components/image/ImgSuvs";

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
        colorCard="suvs"
        image={<ImgSuvs />}
        title={"SUVS"}
        text={
          "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        }
      />
      <Card
        colorCard="luxu"
        image={<ImgLuxury />}
        title={"LUXURY"}
        text={
          "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        }
      />
    </section>
  );
};
