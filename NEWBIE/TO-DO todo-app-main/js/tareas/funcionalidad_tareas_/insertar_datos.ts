import local from "../../../module/localStorage.js";
export const insertarDatosTarea = (text, id) => {
  const nuevaTarea = { id: id, texto: text, finalizado: false };
  local.add("arrayTareas", nuevaTarea);
};
