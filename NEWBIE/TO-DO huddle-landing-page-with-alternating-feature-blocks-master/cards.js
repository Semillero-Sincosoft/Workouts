import { createImage, createTag } from "./createElements.js";

export const contentCards = createTag("section", ["content-cards", "card-2"]);

export const card = (subtitle, writen, img) => {
  const cards = createTag("article", ["cards", "flex-and-direction"]);
  const h2Card = createTag("h2", [""]);
  h2Card.textContent = subtitle;
  const writtenGrow = createTag("p", [""]);
  writtenGrow.textContent = writen;
  const contentImgTogether = createTag("article", ["content-img-together"]);
  const imageTogether = createImage(img, "imgs");

  contentCards.append(cards, contentImgTogether);
  cards.append(h2Card, writtenGrow);
  contentImgTogether.append(imageTogether);
  return cards;
};

export const createCard = (subtitle, text, urlImg, cardObjetivo = "") => {
  const card = createTag("article", ["cards", "flex-and-direction"]);
  const subtitleh2 = document.createElement("h2");
  subtitleh2.textContent = subtitle;
  const textoInformativo = document.createElement("p");
  textoInformativo.textContent = text;

  const contentImg = createTag("article", ["content-img-together"]);
  const imagen = createImage(urlImg, "imgs");
  contentImg.append(imagen);
  const objetivo = document.getElementsByClassName("card-1")[0];
  objetivo.append(imagen);
  card.append(subtitleh2, textoInformativo);
  contentCards.append(card, contentImg);

  return card;
};

export const contentCardFlow = document.createElement("section");
contentCardFlow.classList.add("content-cards", "card-1");

export const card2 = (h2, p) => {
  const cards2 = document.createElement("article");
  cards2.classList.add("cards", "flex-and-direction");
  const h2Flow = createTag("h2", [""]);
  h2Flow.textContent = h2;
  const writtenFlow = createTag("p", [""]);
  writtenFlow.textContent = p;
  const contentImg = createTag("article", [""]);
  contentCardFlow.append(contentImg, cards2);
  const imageFLow = createImage(
    "images/illustration-flowing-conversation.svg",
    "imgs"
  );
  cards2.append(h2Flow, writtenFlow);

  contentImg.appendChild(imageFLow);
  return cards2;
};

export const card3 = (h2, p) => {
  const cards2 = document.createElement("article");
  cards2.classList.add("cards", "flex-and-direction");

  const h2Flow = createTag("h2", [""]);
  h2Flow.textContent = h2;

  const writtenFlow = createTag("p", [""]);
  writtenFlow.textContent = p;

  const contentImg3 = createTag("article", [""]);
  const imageUsers = createImage("images/illustration-your-users.svg", "imgs");
  contentCardUsers.append(contentImg3, cards2);
  cards2.append(h2Flow, writtenFlow);
  contentImg3.appendChild(imageUsers);
  return cards2;
};

export const contentCardUsers = document.createElement("section");
contentCardUsers.classList.add("content-cards", "card-2");
