import {createImage, createTags} from "./createElements.js"
export const footer = document.createElement("footer");

const contentGame = (
  titleFooter,
  subtitlep,
  writtenFooter,
  images,
  classArticle
) => {
  const cards = document.createElement("section");
  cards.classList.add("cards");

  const contentImg = document.createElement("article");

  const imgFooter = createImage(images);
  contentImg.append(imgFooter);
  cards.append(contentImg);

  const contentCard2 = document.createElement("article");
  contentCard2.classList.add(classArticle);

  const h2Footer = document.createElement("h2");
  h2Footer.textContent = titleFooter;

  const subtitle = createTags("p", ["subtitle"]);
  subtitle.textContent = subtitlep;

  const prueba = document.createElement("p");
  prueba.textContent = writtenFooter;

  contentCard2.append(h2Footer, subtitle, prueba);
  cards.append(contentCard2);
  return cards;
};
const card1 = contentGame(
  "01",
  "Reviving Retro PCs",
  "What happens when old PCs are given modern upgrades?",
  "assets/images/image-retro-pcs.jpg",
  "card-1"
);
footer.append(card1);

const card2 = contentGame(
  "01",
  "Reviving Retro PCs",
  " Our best picks for various needs and budgets.",
  "assets/images/image-top-laptops.jpg",
  "card-2"
);
footer.append(card2);

const card3 = contentGame(
  "01",
  "Reviving Retro PCs",
  "How the pandemic has sparked fresh opportunities.",
  "assets/images/image-gaming-growth.jpg",
  "card-3"
);
footer.append(card3);