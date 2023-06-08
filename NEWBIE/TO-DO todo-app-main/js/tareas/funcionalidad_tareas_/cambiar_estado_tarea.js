import { obtenerTareas } from "../creación_tareas_/contenedor_tareas.js";
import { tareasRestantes } from "../../filtros/tareas_restantes.js";
export const cambiarEstadoHomeWork = (tarea, input) => {
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

  tareasRestantes();
};
