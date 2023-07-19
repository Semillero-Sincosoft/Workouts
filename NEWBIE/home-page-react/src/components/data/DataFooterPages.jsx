import { ImageComputerRetro } from "../image/imageComputerRetro";
import { Imagekeyboard } from "../image/Imagekeyboard";
import { ImageController } from "../image/ImageController";
import { ContentSpam } from "../ContentSpam";

export const DataFooterPages = () => {
  const footerPages = [
    {
      imageSpam: <ImageComputerRetro />,
      enumeration: "01",
      title: "Reviving Retro PCs",
      text: "What happens when old PCs are given modern upgrades?",
    },
    {
      imageSpam: <Imagekeyboard />,
      enumeration: "02",
      title: "Top 10 Laptops of 2022",
      text: "Our best picks for various needs and budgets.",
    },
    {
      imageSpam: <ImageController />,
      enumeration: "03",
      title: "The Growth of Gaming",
      text: "How the pandemic has sparked fresh opportunities.",
    },
  ];
  return (
    <footer>
      {footerPages.map((cardData) => (
        <ContentSpam key={cardData.enumeration} {...cardData} />
      ))}
    </footer>
  );
};
