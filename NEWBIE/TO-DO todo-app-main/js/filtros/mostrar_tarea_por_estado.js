export const mostrarTareasPorEstado = function (estado) {
  const TareaCompletada = document.querySelectorAll(".homework");
  TareaCompletada.forEach((article) => {
    if (estado === true && article.classList.contains("completado")) {
      article.classList.add("hidden");
    } else if (
      estado === false &&
      article.classList.contains("no-completado")
    ) {
      article.classList.add("hidden");
    } else {
      article.classList.remove("hidden");
    }
  });
};
