export const validacionEstado = (): void => {
  const localArrayTareas: any[] = JSON.parse(localStorage.getItem("arrayTareas"));
  localArrayTareas.map((tarea: any) => {
    const article = $("#" + tarea.id);
    const input = $(`#input-${tarea.id}`);
    const span = $(`#span-${tarea.id}`);
    if (tarea.finalizado === false) {
      input.prop("checked", false);
      span.removeClass("span-checked");
      article.removeClass("completado");
      article.addClass("no-completado");
    } else if (tarea.finalizado === true) {
      input.prop("checked", true);
      span.addClass("span-checked");
      article.removeClass("no-completado");
      article.addClass("completado");
    }
  });
};
