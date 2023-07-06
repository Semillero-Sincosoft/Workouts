import { insertarTarea } from "../tareas/funcionalidad_tareas_/validationHomework.js";
import { obtenerTareas } from "../tareas/creación_tareas_/contenedor_tareas.js";
import { tareasRestantes } from "../filtros/tareas_restantes.js";
import local from "../../module/localStorage.js";
import { validacionEstado } from "../validacion_estado.js";
export const eliminarTarea = function (index) {
  const tarea = obtenerTareas();
  tarea.splice(index, 1);
  $('#contenedor-tareas').empty()
  local.save("arrayTareas", tarea);
  tarea.forEach(insertarTarea);
  $('#elements-left').text(tareasRestantes() + " items left")
  validacionEstado();
};
