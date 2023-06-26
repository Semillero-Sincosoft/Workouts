import { sectionAddComentary } from "./card/commentary.js";
import action from "./data/acciones.js";
import { commentLocal } from "./module/infoLocalStorage.js";
export const mostrarMiPerfil = () => {
  const contentPrueba = document.getElementById("content-prueba");
  const comentario = {
    id: 0,
  };
  const youProfile = sectionAddComentary(
    commentLocal.currentUser.image.png,
    commentLocal.currentUser.username,
    action.send,
    comentario,
  );
  contentPrueba.append(youProfile);
};
