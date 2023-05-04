import { createImage, createTag } from "./createElements.js";

export const contentCards = createTag("section", ["content-cards", "card-1"]);

export const createCard = (subtitle, text, urlImg, cardObjetivo) => {
  const card = createTag("article", ["cards", "flex-and-direction"]);
  const subtitleh2 = document.createElement("h2");
  subtitleh2.textContent = subtitle;
  const textoInformativo = document.createElement("p");
  textoInformativo.textContent = text;

  const contentImg = createTag("article", ["content-img-together"]);
  const imagen = createImage(urlImg, "imgs");
  contentImg.append(imagen);

  card.append(subtitleh2, textoInformativo);
  cardObjetivo.append(card, imagen);

  return card;
};
