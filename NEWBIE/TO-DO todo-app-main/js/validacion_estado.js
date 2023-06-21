export const validacionEstado = () => {
  const localArrayTareas = JSON.parse(localStorage.getItem("arrayTareas"));
  localArrayTareas.map((tarea, index) => {
    const article = document.getElementById(tarea.id);
    const input = document.getElementById(`input-${tarea.id}`);
    if (tarea.finalizado === false) {
      input.checked = false;
      article.classList.remove("completado");
      article.classList.add("no-completado");
    } else if (tarea.finalizado === true) {
      input.checked = true;
      article.classList.remove("no-completado");
      article.classList.add("completado");
    }
  });
};
