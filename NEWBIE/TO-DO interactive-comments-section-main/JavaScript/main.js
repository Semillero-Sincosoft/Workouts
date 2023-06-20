import { sectionAddComentary } from "./card/commentary.js";
import { comentarios } from "./comments.js";
import action from "./data/acciones.js";
import { modalDelete, modalHtml } from "./modal.js";
import { renderComments } from "./renderComments.js";
import local from "./module/localStorage.js";
import localStorage from "./module/localStorage.js";
import { commentLocal } from "./infoLocalStorage.js";
localStorage.save("comentarios", comentarios);
console.log(commentLocal,'HPTA')
comentarios.forEach(renderComments());
const contentHome = document.getElementById("content-home");
// const youProfile = sectionAddComentary(
//   currentUser.image.png,
//   currentUser.username,
//   action.send
// );
contentHome.append(youProfile);

export const elimina = (id) => {
  local.delete("comentarios", id);
};
const modal = modalDelete();
modal.cancel.addEventListener("click", () => {
  modalHtml.classList.toggle("hidden");
  const idElimina = modalHtml.getAttribute("idEliminar");
  elimina(idElimina);
  const eliminarCard = document
    .getElementById(idElimina)
    .parentNode.parentNode.remove();
});

modal.btnNoCancel.addEventListener("click", () => {
  modalHtml.classList.toggle("hidden");
});
