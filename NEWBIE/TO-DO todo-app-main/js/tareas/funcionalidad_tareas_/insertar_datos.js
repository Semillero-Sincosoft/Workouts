import { tareas } from "../creación_tareas_/contenedor_tareas.js";
import { tareasRestantes } from "../../filtros/tareas_restantes.js";
export const insertarDatosTarea = (text, id) => {
  const nuevaTarea = { id: id, texto: text, finalizado: false };
  tareas.push(nuevaTarea);
  console.log(tareas,'iNSERTAR TAREAS');
  localStorage.setItem("arrayTareas", JSON.stringify(tareas));
  tareasRestantes();
};
