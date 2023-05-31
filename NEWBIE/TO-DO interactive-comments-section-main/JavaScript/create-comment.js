import createCard from "./card/card.js";

export const createComment = (comentario) => {
  const card = createCard(comentario);
  const contentHome = document.getElementById("content-home");
  contentHome.append(card);
};
