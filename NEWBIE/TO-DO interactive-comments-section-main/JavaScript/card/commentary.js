import { currentUser } from "../comments.js";
import { createComment } from "../create-comment.js";
import { createElement, createAvatar, createBtn } from "../utilities-ui.js";
import createInputCommentary from "./contentCommentary.js";

export const sectionAddComentary = (image, username, isReply = true) => {
  const imageCurrentUser = currentUser.image.png;
  const contentCommentary = createElement("div", "content-card");
  contentCommentary.classList.add("hidden");

  const photoUser = createAvatar(image);

  const aside = createElement("aside", "avatar-commentary");
  aside.append(photoUser);
  let txtBoton = "REPLY";

  if (isReply == false) {
    txtBoton = "SEND";
    contentCommentary.classList.remove("hidden");
  }
  const buttonReply = createBtn(txtBoton);

  const validation = buttonReply.btn;
  validation.disabled = true;

  let arrobaUsername = "";
  if (isReply) {
    arrobaUsername = `@${username}, `;
  }

  const divTextArea = createInputCommentary(arrobaUsername);

  const txtComentario = divTextArea.textArea;

  contentCommentary.append(aside, divTextArea, buttonReply);

  txtComentario.addEventListener("keyup", () => {
    if (txtComentario.value == arrobaUsername || txtComentario.value <= 10) {
      validation.disabled = true;
    } else {
      validation.disabled = false;
    }
  });
  buttonReply.addEventListener("click", () => {
    const comentario = {
      id: 3,
      content: txtComentario.value,
      createdAt: "JUST NOW",
      score: 0,
      replyingTo: username,
      user: {
        image: {
          png: imageCurrentUser,
          webp: imageCurrentUser,
        },
        username,
      },
      replies: [],
    };
    const cardReply = renderComentaryReply(comentario);
    contentCommentary.innerHTML = "";
    contentCommentary.classList.remove("content-card");
    contentCommentary.append(cardReply);
    // txtComentario.value = "";
    //   //validacion del boton Reply
    //   validation.disabled = true;
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
    comentario.replies.forEach((e) => commentaryReply(e));
  }
  // buttonReply.addEventListener("click", () => {
  //   const comentario = {
  //     content: txtComentario.value,
  //     user: {
  //       username,
  //     },
  //   };
  //   contentCommentary.innerHTML = "";
  //   contentCommentary.classList.remove("content-card");
  //   // descripcionDelComentario.value = "";
  //   //validacion del boton Reply
  //   validation.disabled = true;
  // });
  // const cardReply = commentaryReply(comentario);
  // contentCommentary.append(cardReply);
  // contentCommentary.renderComment = cardReply;

  return contentCommentary;
};
const renderComentaryReply = (comentario) => {
  const cardReply = commentaryReply(comentario);
  return cardReply;
};
function calcularTiempo() {
  const startTime = Date.now();
  const tiempoTranscurrido = Date.now() - startTime; // Calcular la diferencia de tiempo en milisegundos

  // Convertir el tiempo transcurrido a minutos
  const minutosTranscurridos = Math.floor(tiempoTranscurrido / (1000 * 60));
  return minutosTranscurridos;
}

const commentaryReply = (comentario) => {
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

  comentario.replies = replyCommentary;

  const renderComment = createComment(replyCommentary);
  renderComment.classList.add("reply-container");
  const replyWidth = renderComment.querySelector(
    ".reply-container .content-card"
  );
  const ancho = (replyWidth.style.width = "64rem");
  const btnReply = renderComment.querySelector(
    ".reply-container .content-title-card"
  );
  const widthBtnReply = (btnReply.style.width = "53.6rem");
  return renderComment;
};
export default renderComentary;
