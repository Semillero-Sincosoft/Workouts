export const validacionEstado = () => {
  const localArrayTareas = JSON.parse(localStorage.getItem("arrayTareas"));

  localArrayTareas.map((tarea, index) => {
    const article = document.getElementById(tarea.id); // Obtener el elemento 'article' específico por su ID
    const input = document.getElementById(`input-${tarea.id}`); // Obtener el elemento 'input' específico por su ID

    if (tarea.finalizado === false) {
      console.log("AHORA ES FALSE");
      input.checked = false;
      article.classList.remove("completado");
      article.classList.add("no-completado");
    } else if (tarea.finalizado === true) {
      console.log("AHORA ES TRUE");
      input.checked = true;
      article.classList.remove("no-completado");
      article.classList.add("completado");
      console.log(article, "PADRE");
    }
  });
};
