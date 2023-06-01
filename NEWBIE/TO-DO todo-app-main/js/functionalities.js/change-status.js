export const cambiarEstadoHomeWork = (tarea, input) => {
    if (input.checked) {
      tarea.finalizado = true;
    } else {
      tarea.finalizado = false;
    }
    console.log(tarea);
  };