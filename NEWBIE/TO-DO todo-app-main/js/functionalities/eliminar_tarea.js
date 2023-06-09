import { insertarTarea } from "../tareas/funcionalidad_tareas_/validationHomework.js";
import { tareas } from "../tareas/creación_tareas_/contenedor_tareas.js";
import { obtenerTareas } from "../tareas/creación_tareas_/contenedor_tareas.js";
import { tareasRestantes } from "../filtros/tareas_restantes.js";
export const eliminarTarea = function (index) {
  const tarea = obtenerTareas();
  tarea.splice(index, 1);
  const divContent = document.getElementById("contenedor-tareas");
  divContent.innerHTML = "";
  localStorage.setItem("arrayTareas",JSON.stringify(tarea))
  tarea.forEach(insertarTarea);
  const itemsLeft = document.getElementById("elements-left");
  itemsLeft.textContent = tareasRestantes() + " items left";
  console.log(tareas, "mira ACÁ");
};
