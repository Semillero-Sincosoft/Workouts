import createCard from "./card/card.js";
import {
  addSectionComment,
  commentaryReply,
  sectionAddComentary,
} from "./card/commentary.js";
import acciones from "./data/acciones.js";
import { commentLocal } from "./infoLocalStorage.js";
import { modalHtml } from "./modal.js";
import { createElement } from "./utilities-ui.js";

export const renderComments = (comentario) => {
  const contentHome = document.getElementById("content-home");

  const containerCard = createElement("section", "container-card");
  const containerCardReplies = createElement(
    "section",
    "container-replies",
    `replies${comentario.id}`
  );

  const card = createCard(comentario);
  const sectionCommentary = addSectionComment(comentario);

  contentHome.append(containerCard);

  containerCard.append(card, containerCardReplies);

  let commentReply;
  if (comentario.replies.length > 0) {
    commentReply = comentario.replies.forEach((comentarioReplica) => {
      comentarioReplica.replica = true;
      const reply = commentaryReply(comentarioReplica, true);
      containerCardReplies.append(reply);
      containerCard.append(containerCardReplies);
    });
  }

  if (comentario.replica) {
    containerCardReplies.append(commentReply);
    containerCard.append(containerCardReplies);
  }

  containerCard.commentary = sectionCommentary;
  // containerCard.contentBtn = card;
  validationReplies(card, comentario.id, containerCard);
  renderComments.containerCardReplies = containerCardReplies;
  return containerCard;
};

export const renderCommentsReply = (comentario) => {
  const card = createCard(comentario);

  validationReplies(
    card,
    comentario.id,
    document.getElementById(`replies${comentario.id}`)
  );
  return card;
};

const validationReplies = (card, idComment, containerCard) => {
  card.replyButton.addEventListener("click", () => {
    // commentary.classList.remove("hidden");
    const addReply = sectionAddComentary(
      commentLocal.currentUser.image.png,
      commentLocal.currentUser.username,
      acciones.reply,
      idComment
    );
    containerCard.append(addReply);
  });

  card.delete.addEventListener("click", () => {
    console.log("EVENTO DEL DELETE");
    modalHtml.classList.toggle("hidden");
    modalHtml.setAttribute("idEliminar", card.id);
  });

  card.edit.addEventListener("click", () => {
    console.log("EVENTO DEL EDIT");
  });
};
