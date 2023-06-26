import { createElement } from "../utilities-ui.js";

export const uiRenderComments = (card) => {
  const containerCard = createElement("section", "container-card");
  const containerCardReplies = createElement("section", "container-replies");
  $("#content-home").append(containerCard);
  $(containerCard).append(card, containerCardReplies);

  uiRenderComments.replies = containerCardReplies;
  containerCard.replies = containerCardReplies;
  return containerCard;
};
