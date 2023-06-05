import { createElement, createAvatar, createBtn } from "../utilities-ui.js";
import createInputCommentary from "./contentCommentary.js";

const createCommetary = (comentario) => {
  const { image, username } = comentario.user;

  const contentCommentary = createElement("div", "content-card");
  contentCommentary.classList.add("hidden");

  const photoUser = createAvatar(image);

  const aside = createElement("aside", "avatar-commentary");

  const button = createBtn("REPLY");

  const validation = button.btn;
  validation.disabled = true;
  const arroba = `@${username}, `;
  const written = createInputCommentary(arroba);

  const txtComentario = written.textArea;

  contentCommentary
  contentCommentary.append(aside, written, button);

  // y.addEventListener()
  const textoNuevoComentario = txtComentario;

  textoNuevoComentario.addEventListener("keyup", () => {
    if (textoNuevoComentario.value == arroba) {
      validation.disabled = true;
    } else {
      validation.disabled = false;
    }
  });

  button.addEventListener("click", () => {
    const startTime = Date.now();
    function calcularTiempo() {
      const tiempoTranscurrido = Date.now() - startTime; // Calcular la diferencia de tiempo en milisegundos

      // Convertir el tiempo transcurrido a minutos
      const minutosTranscurridos = Math.floor(tiempoTranscurrido / (1000 * 60));
      return minutosTranscurridos;
    }

    const replyCommentary = {
      id: 3,
      content: textoNuevoComentario.value,
      createdAt: calcularTiempo(),
      score: 0,
      replyingTo: username,
      user: {
        image: {
          png: `./images/avatars/${image}.png`,
          webp: `./images/avatars/${image}.webp`,
        },
        username: "ramsesmiron",
      },
    };

    comentario.replies.push(replyCommentary);
    console.log(comentario);
    txtComentario.value = "";
    validation.disabled = true;
  });

  aside.append(photoUser);
  return contentCommentary;
};

export default createCommetary;
