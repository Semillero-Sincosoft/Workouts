import local from "../../../module/localStorage";
import { obtenerTareas } from "../creación_tareas_/contenedor_tareas.js";
import { tareasRestantes } from "../../filtros/tareas_restantes.js";
export const cambiarEstadoHomeWork = (tarea:any, input: HTMLInputElement) => {
  const tareas = obtenerTareas();
  if (input.checked) {
    tarea.finalizado = true;
  } else {
    tarea.finalizado = false;
  }
  tareas.map((t) => {
    if (t.id === tarea.id) {
      t.finalizado = tarea.finalizado;
    }
    return t;
  });
  local.save("arrayTareas", tareas);
  $('#elements-left').text(tareasRestantes() + " items left")
};
