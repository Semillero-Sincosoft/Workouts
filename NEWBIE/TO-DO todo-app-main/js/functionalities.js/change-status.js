import { obtenerTareas, tareas } from "../tareas.js";
export const cambiarEstadoHomeWork = (tarea, input) => {
  const tareas = obtenerTareas();

  if (input.checked) {
    tarea.finalizado = true;
  } else {
    tarea.finalizado = false;
  }

  tareas.map((t) => {
    if (t.texto == tarea.texto) {
      t.finalizado = tarea.finalizado;
    }
    return t;
  });
};
