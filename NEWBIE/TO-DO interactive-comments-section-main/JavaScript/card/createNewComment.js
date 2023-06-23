import action from "../data/acciones.js";
import { commentLocal } from "../infoLocalStorage.js";
import local from "../module/localStorage.js";
import { renderComments } from "../renderComments.js";
import { generateId } from "../utilities-ui.js";
import { commentaryReply, sectionAddComentary } from "./commentary.js";

export const createNewCommentary = (
  valor,
  username,
  actionBtn,
  validation,
  id
) => {
  const imageCurrentUser = commentLocal.currentUser.image.png;
  const nameUserReply = commentLocal.currentUser.username;
  const newComment = {
    id: generateId(),
    content: valor,
    createdAt: "JUST NOW",
    score: 0,
    replyingTo: username,
    user: {
      image: {
        png: imageCurrentUser,
        webp: imageCurrentUser,
      },
      username: nameUserReply,
    },
    replies: [],
  };

  const validationButtonReplyOSend = actionBtn == action.send ? false : true;

  const cardReply = commentaryReply(newComment, validationButtonReplyOSend);
  const contentCommentary = renderComments.containerCardReplies; // sectionAddComentary.divCommentary;
  contentCommentary.innerHTML = "";
  // // contentCommentary.classList.remove("content-card");

  const inputHidden = sectionAddComentary.inputHidden;
  inputHidden.value = id;
  contentCommentary.append(cardReply, inputHidden);

  validation.disabled = true;
  local.add("comentarios", newComment, inputHidden.value);
  return cardReply;
};
