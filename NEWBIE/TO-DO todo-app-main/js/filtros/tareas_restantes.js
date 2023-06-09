import { tareas } from "../tareas/creación_tareas_/contenedor_tareas.js";
export const tareasRestantes = function () {
  const elementosFaltantes = tareas.filter(
    (elemento) => elemento.finalizado == false,
    );
    const numeroDeElementos = elementosFaltantes.length;
    console.log(tareas,'restantes XV')
    return numeroDeElementos
    //itemsLeft[0].textContent = numeroDeElementos + " items left";
};
