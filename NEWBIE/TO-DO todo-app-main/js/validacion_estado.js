export const validacionEstado = () => {
  const localArrayTareas = JSON.parse(localStorage.getItem("arrayTareas"));
  localArrayTareas.map((tarea) => {
    const article = document.getElementById(tarea.id);
    const input = document.getElementById(`input-${tarea.id}`);
    const span = document.getElementById(`span-${tarea.id}`)
    if (tarea.finalizado === false) {
      input.checked = false;
      span.classList.remove("span-checked")
      article.classList.remove("completado");
      article.classList.add("no-completado");
    } else if (tarea.finalizado === true) {
      span.classList.add("span-checked")
      input.checked = true;
      article.classList.remove("no-completado");
      article.classList.add("completado");
    }
  });
};
