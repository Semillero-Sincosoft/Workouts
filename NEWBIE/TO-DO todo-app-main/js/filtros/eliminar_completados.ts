import local from "../../module/localStorage.js";
import { insertarTarea } from "../tareas/funcionalidad_tareas_/validationHomework.js";
import { obtenerTareas } from "../tareas/creación_tareas_/contenedor_tareas.js";
import { validacionEstado } from "../validacion_estado.js";
export const eliminarCompletados = function () {
  const tareas = obtenerTareas();
  for (let i = tareas.length - 1; i >= 0; i--) {
    if (tareas[i].finalizado) {
      tareas.splice(i, 1);
    }
  }
  $("#contenedor-tareas").html("")
  tareas.forEach((tarea:unknown, index: unknown) => {
    insertarTarea(tarea, index);
  });
  local.save("arrayTareas", tareas);
  validacionEstado();
  return tareas;
};
