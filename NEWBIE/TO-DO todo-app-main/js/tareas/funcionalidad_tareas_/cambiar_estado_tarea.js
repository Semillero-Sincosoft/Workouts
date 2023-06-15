import { obtenerTareas } from "../creación_tareas_/contenedor_tareas.js";
import { tareasRestantes } from "../../filtros/tareas_restantes.js";
export const cambiarEstadoHomeWork = (tarea, input) => {
  const tareas = obtenerTareas();
  console.log(tareas, "cambiar estado antes");

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
  console.log(tareas, "cambiar estado después");
  localStorage.setItem("arrayTareas", JSON.stringify(tareas));
  const itemsLeft = document.getElementById("elements-left");
  itemsLeft.textContent = tareasRestantes() + " items left";
};
