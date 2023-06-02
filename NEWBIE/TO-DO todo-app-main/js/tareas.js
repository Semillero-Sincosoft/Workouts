export const tareas = [];

export const insertarDatosTarea = (text,id) => {
  const nuevaTarea = {id:id,texto: text, finalizado: false };
  tareas.push(nuevaTarea);
  console.log(tareas);
};
export const obtenerTareas = () => {
  return tareas;
};

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
};
