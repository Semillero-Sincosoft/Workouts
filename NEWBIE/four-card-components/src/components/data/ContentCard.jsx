import { ImageBuid } from "../img/ImageBuid";
import { ImageCalculator } from "../img/ImageCalculator";
import { ImageKarma } from "../img/imageKarma";
import { ImageSupervisor } from "../img/imageSupervisor";
import { HeaderContent } from "../HeaderContent";
import { CardTool } from "../CardTool";

export const ContentCard = () => {
  const cardData = [
    {
      colorCard: "card-1",
      titleCard: "Supervisor",
      textCard: "Monitors activity to identify project roadblocks",
      imageCard: <ImageSupervisor />,
    },
    {
      colorCard: "card-2",
      titleCard: "Team Builder",
      textCard:
        "scans our talent network to create the optimal team for your project",
      imageCard: <ImageBuid />,
    },
    {
      colorCard: "card-3",
      titleCard: "Karma",
      textCard: "Regularly evaluates our talent to ensure quality",
      imageCard: <ImageKarma />,
    },
    {
      colorCard: "card-4",
      titleCard: "Calculator",
      textCard:
        "Uses data from past projects to provide better delivery estimates",
      imageCard: <ImageCalculator />,
    },
  ];

  return (
    <main>
      <HeaderContent />
      <section className="content">
        <CardTool key={cardData[0].titleCard} {...cardData[0]} />
        <div className="columns flex-and-direction">
          <CardTool key={cardData[1].titleCard} {...cardData[1]} />
          <CardTool key={cardData[2].titleCard} {...cardData[2]} />
        </div>
        <CardTool key={cardData[3].titleCard} {...cardData[3]} />
      </section>
    </main>
  );
};
