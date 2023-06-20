// import { currentUser } from "../comments.js";
import { renderComments } from "../renderComments.js";
import {
  createElement,
  createAvatar,
  createBtn,
  generateId,
} from "../utilities-ui.js";
import createTextareaComment from "./contentCommentary.js";
import action from "../data/acciones.js";
import local from "../module/localStorage.js";
import { commentLocal } from "../infoLocalStorage.js";

export const sectionAddComentary = (
  image,
  username,
  actionBtn = action.reply
) => {
  const imageCurrentUser = currentUser.image.png;
  const nameUserReply = currentUser.username;

  const contentCommentary = createElement("div", "content-card");
  const photoUser = createAvatar(image);

  const aside = createElement("aside", "avatar-commentary");
  aside.append(photoUser);
  let txtBoton = action.reply;

  if (actionBtn == action.send) {
    txtBoton = action.send;
    contentCommentary.classList.remove("hidden");
  }
  const buttonReply = createBtn(txtBoton);

  const validation = buttonReply.btn;
  validation.disabled = true;

  let texto = "";

  if (actionBtn == action.reply) {
    texto = `@${username}, `;
  }

  const divTextArea = createTextareaComment(texto);

  const txtComent = divTextArea.textArea;
  contentCommentary.append(aside, divTextArea, buttonReply);

  txtComent.addEventListener("keyup", () => {
    if (txtComent.value == texto || txtComent.value.trim().length <= 10) {
      validation.disabled = true;
    } else {
      validation.disabled = false;
    }
  });

  buttonReply.addEventListener("click", () => {
    const newComment = {
      id: generateId(),
      content: txtComent.value,
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

    const prueba = actionBtn == action.send ? false : true;

    const cardReply = renderComentaryReply(newComment, prueba);
    contentCommentary.innerHTML = "";
    contentCommentary.classList.remove("content-card");

    contentCommentary.append(cardReply);

    validation.disabled = true;
    local.add("comentarios", newComment);
  });

  return contentCommentary;
};

const renderComentary = (isReply = false) => {
  const { user } = commentLocal.comments[0];
  let image, username;
  if (isReply) {
    username = comentario.username;
  }

  if (user) {
    image = commentLocal.comments[0].user.image.png;
    username = comentario.user.username;
  }
  let contentCommentary = sectionAddComentary(currentUser.image.png, username);

  return contentCommentary;
};
const renderComentaryReply = (comentario, isReply) => {
  const cardReply = commentaryReply(comentario, isReply);
  return cardReply;
};

export const commentaryReply = (comentario, isReply) => {
  const { id, content, user, createdAt } = comentario;
  const { image, username } = user;

  const replyCommentary = {
    id: id,
    content: content,

    createdAt,
    score: 0,
    replyingTo: username,
    user: {
      image: {
        png: image.png,
        webp: image.webp,
      },
      username,
    },
    replies: [],
  };
  commentaryReply.id = replyCommentary;

  const renderComment = renderComments(replyCommentary, isReply);
  if (isReply) renderComment.classList.add("reply-container");

  return renderComment;
};
export default renderComentary;
