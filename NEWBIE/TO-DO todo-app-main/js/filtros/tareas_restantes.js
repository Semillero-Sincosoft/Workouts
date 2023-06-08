import { tareas } from "../tareas/creación_tareas_/contenedor-tareas.js";
export const tareasRestantes = function () {
  const itemsLeft = document.getElementsByClassName("p0");
  const elementosFaltantes = tareas.filter(
    (elemento) => elemento.finalizado == false
  );
  const numeroDeElementos = elementosFaltantes.length;
  itemsLeft[0].textContent = numeroDeElementos + " items left";
};
