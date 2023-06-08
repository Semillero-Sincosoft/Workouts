export const EventChecked = function (input, span) {
  if (input.checked) {
    span.classList.add("span-checked");
    span.parentNode.parentNode.classList.remove("no-completado");
    span.parentNode.parentNode.classList.add("completado");
  } else {
    span.classList.remove("span-checked");
    span.parentNode.parentNode.classList.remove("completado");
    span.parentNode.parentNode.classList.add("no-completado");
  }
};
