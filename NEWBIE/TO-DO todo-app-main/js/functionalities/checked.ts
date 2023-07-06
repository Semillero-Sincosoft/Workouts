export const EventChecked = function (input, span) {
  const $parentElement = $(span).parent().parent();
  if (input.checked) {
    $(span).addClass("span-checked");
    $parentElement.removeClass("no-completado").addClass("completado")
  } else {
    $(span).removeClass("span-checked")
    $parentElement.removeClass("completado").addClass("no-completado")
  }
};
