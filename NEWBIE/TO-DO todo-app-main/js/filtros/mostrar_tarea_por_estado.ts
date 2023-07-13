export const mostrarTareasPorEstado = function (estado?:boolean) {
  $(".homework").each(function () {
    if (estado === true && $(this).hasClass("completado")) {
      $(this).addClass("hidden");
    } else if (estado === false && $(this).hasClass("no-completado")) {
      $(this).addClass("hidden");
    } else {
      $(this).removeClass("hidden");
    }
  });
};
