import { insertarTarea } from "../tareas/funcionalidad_tareas_/validationHomework";
import { obtenerTareas } from "../tareas/creación_tareas_/contenedor_tareas";
import { tareasRestantes } from "../filtros/tareas_restantes";
import local from "../../module/localStorage";
import { validacionEstado } from "../validacion_estado";

export const eliminarTarea = function (index: number) {
  const tarea = obtenerTareas();
  tarea.splice(index, 1);
  $('#contenedor-tareas').empty();
  local.save("arrayTareas", tarea);
  tarea.forEach((tareaItem, indexItem) => insertarTarea(tareaItem, indexItem.toString()));
  $('#elements-left').text(tareasRestantes() + " items left");
  validacionEstado();
};
