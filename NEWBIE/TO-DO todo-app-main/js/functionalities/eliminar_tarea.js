import { insertarTarea } from "../tareas/funcionalidad_tareas_/validationHomework.js";
import { tareas } from "../tareas/creación_tareas_/contenedor_tareas.js";
import { obtenerTareas } from "../tareas/creación_tareas_/contenedor_tareas.js";
export const eliminarTarea = function (index) {
  const nuevo = obtenerTareas();
  nuevo.splice(index, 1);
  const divContent = document.getElementById("contenedor-tareas");
  divContent.innerHTML = "";
  nuevo.forEach(insertarTarea);
  console.log(tareas, "mira ACÁ");
};
