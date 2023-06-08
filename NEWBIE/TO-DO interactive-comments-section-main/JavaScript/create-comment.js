import createCard from "./card/card.js";
import renderComentary, { sectionAddComentary } from "./card/commentary.js";
import { currentUser } from "./comments.js";
import { createElement } from "./utilities-ui.js";

export const createComment = (comentario) => {
  const containerCard = createElement("section", "container-card");
  const card = createCard(comentario);
  const commentary = renderComentary(comentario);

  const contentHome = document.getElementById("content-home");

  contentHome.append(containerCard);
  containerCard.append(card, commentary);

  containerCard.commentary = commentary;
  // containerCard.contentBtn = card;
  card.replyButton.addEventListener("click", () => {
    commentary.classList.toggle("hidden");
    const prueba = document.getElementByClassName("content-card");

    for (let i = 0; i < prueba.length; i++) {
      if (i === 0) {
        prueba[i].classList.remove("clase-prueba");
      } else {
        prueba[i].classList.add("clase-prueba");
      }
    }
  });
  return containerCard;
};
