import { currentUser } from "../comments.js";
import { renderComments } from "../renderComments.js";
import { createElement, createAvatar, createBtn } from "../utilities-ui.js";
import createInputCommentary from "./contentCommentary.js";
import action from "../data/acciones.js";
export const sectionAddComentary = (
  image,
  username,
  actionBtn = action.reply
) => {
  const imageCurrentUser = currentUser.image.png;
  const nameUserReply = currentUser.username;

  const contentCommentary = createElement("div", "content-card");
  contentCommentary.classList.add("hidden");
  const photoUser = createAvatar(image);

  const aside = createElement("aside", "avatar-commentary");
  aside.append(photoUser);
  let txtBoton = action.reply;

  if (actionBtn == false) {
    txtBoton = action.send;
    contentCommentary.classList.remove("hidden");
  }
  const buttonReply = createBtn(txtBoton);

  const validation = buttonReply.btn;
  validation.disabled = true;

  let arrobaUsername = "";
  if (actionBtn) {
    arrobaUsername = `@${username}, `;
  }

  const divTextArea = createInputCommentary(arrobaUsername);

  const txtComent = divTextArea.textArea;

  contentCommentary.append(aside, divTextArea, buttonReply);

  txtComent.addEventListener("keyup", () => {
    if (txtComent.value == arrobaUsername || txtComent.value.length <= 14) {
      validation.disabled = true;
    } else {
      validation.disabled = false;
    }
    const value = txtComent.value.trim();

    if (value === "" && event.key === " ") {
      event.preventDefault();
    }
  });
  buttonReply.addEventListener("click", () => {
    const newComment = {
      id: 3,
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
    const cardReply = renderComentaryReply(newComment);
    contentCommentary.innerHTML = "";
    contentCommentary.classList.remove("content-card");
    contentCommentary.append(cardReply);
    // txtComentario.value = "";
    //   //validacion del boton Reply

    validation.disabled = true;
  });

  return contentCommentary;
};

const renderComentary = (comentario, isReply = false) => {
  const { user } = comentario;
  let image, username;
  if (isReply) {
    username = comentario.username;
  }

  if (user) {
    image = comentario.user.image.png;
    username = comentario.user.username;
  }
  //const { image, username } = comentario.user;
  let contentCommentary = sectionAddComentary(currentUser.image.png, username);

  if (comentario.replies.length > 0) {
    comentario.replies.forEach((e) => commentaryReply(e, true));
  }

  return contentCommentary;
};
const renderComentaryReply = (comentario) => {
  const cardReply = commentaryReply(comentario);
  return cardReply;
};

const commentaryReply = (comentario, isReply) => {
  const { content, user, createdAt } = comentario;
  const { image, username } = user;

  const replyCommentary = {
    id: 3,
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

  const renderComment = renderComments(replyCommentary, isReply);

  renderComment.classList.add("reply-container");

  return renderComment;
};
export default renderComentary;
