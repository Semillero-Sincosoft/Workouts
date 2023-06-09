import { tareas } from "../creación_tareas_/contenedor_tareas.js";
import { tareasRestantes } from "../../filtros/tareas_restantes.js";
export const insertarDatosTarea = (text, id) => {
  const nuevaTarea = { id: id, texto: text, finalizado: false };
  //localStorage.getItem("arrayTareas", JSON.parse('arrayTareas'));
  tareas.push(nuevaTarea);
  localStorage.setItem("arrayTareas",JSON.stringify(tareas))
  console.log(tareas, "iNSERTAR TAREAS");
  const prueba = JSON.parse(localStorage.getItem("arrayTareas"));
  console.log(prueba,'es el local')
};
