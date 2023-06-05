export const tareas = [];

function elementsLeft() {
  const p = document.getElementsByClassName("p0");
  const elementosFaltantes = tareas.filter(
    (elemento) => elemento.finalizado == false
  );
  const numeroDeElementos = elementosFaltantes.length;
  p[0].textContent = numeroDeElementos + " items left";
  console.log(p);
}

export const insertarDatosTarea = (text, id) => {
  const nuevaTarea = { id: id, texto: text, finalizado: false };
  tareas.push(nuevaTarea);
  console.log(tareas);

  elementsLeft();

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

  elementsLeft();
};
