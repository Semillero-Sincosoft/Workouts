import { HeaderContent } from "./HeaderContent";
import "../four-card.css";
import { Card } from "./Card";
import { ImageCalculator } from "./img/ImageCalculator";
import { ImageKarma } from "./img/imageKarma";
import { ImageBuid } from "./img/ImageBuid";
import { ImageSupervisor } from "./img/imageSupervisor";

export const ContentCard = () => {
  return (
    <main>
      <HeaderContent />
      <section className="content">
        <Card
          titleCard="Supervisor"
          colorCard="card-1"
          textCard="Monitors activity to identify project roadblocks"
          imageCard={<ImageSupervisor />}
        />
        <div className="columns flex-and-direction">
          <Card
            colorCard="card-2"
            titleCard="Team Builder"
            textCard="scans our talent network to create the optimal team for your project"
            imageCard={<ImageBuid />}
          />
          <Card
            colorCard="card-3"
            titleCard="Karma"
            textCard="Regularly evaluates our talent to ensure quality"
            imageCard={<ImageKarma />}
          />
        </div>
        <Card
          colorCard="card-4"
          titleCard="Calculator"
          textCard="Uses data from past projects to provide better delivery estimates"
          imageCard={<ImageCalculator />}
        />
      </section>
    </main>
  );
};
