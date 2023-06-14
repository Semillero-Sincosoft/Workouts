import sectionAddComentary from "./card/commentary.js";
import { comentarios, currentUser } from "./comments.js";
import action from "./data/acciones.js";
import { modalDelete, modalHtml } from "./modal.js";
import { renderComments } from "./renderComments.js";
import local from "./module/localStorage.js";
import createCard from "./card/card.js";
comentarios.forEach(renderComments);

const contentHome = document.getElementById("content-home");
const youProfile = sectionAddComentary(
  currentUser.image.png,
  currentUser.username,
  action.send
);
contentHome.append(youProfile);

const modal = modalDelete();

// const eliminarReplicas = (comentario) => {
//   const { replies } = comentario;
//   const eliminar = renderComentary(replies);

//   // eliminar.replies.length;
//   eliminar.slice(replies, 1);
// };

modal.cancel.addEventListener("click", () => {
  modalHtml.classList.toggle("hidden");
  const idElimina = modalHtml.getAttribute("idEliminar");
  //local.delete("comentarios", id);
  //const idRepli = createCard.id;
  // eliminarReplicas(comentario)
  elimina(idElimina);
});

export const elimina = (id) => {
  local.delete("comentarios", id);
};
modal.btnNoCancel.addEventListener("click", () => {
  modalHtml.classList.toggle("hidden");
});
