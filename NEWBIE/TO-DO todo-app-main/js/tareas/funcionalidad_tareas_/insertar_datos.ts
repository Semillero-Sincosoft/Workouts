import local from "../../../module/localStorage.js";
export const insertarDatosTarea = (text: string, id: number) => {
  const nuevaTarea = { id: id, texto: text, finalizado: false };
  local.add("arrayTareas", nuevaTarea);
};
