import { tareas } from "../tareas/creación_tareas_/contenedor_tareas.js";
export const tareasRestantes = function () {
  const itemsLeft = document.getElementsByClassName("elements-left");
  const elementosFaltantes = tareas.filter(
    (elemento) => elemento.finalizado == false
  );
  const numeroDeElementos = elementosFaltantes.length;
  itemsLeft[0].textContent = numeroDeElementos + " items left";
};
