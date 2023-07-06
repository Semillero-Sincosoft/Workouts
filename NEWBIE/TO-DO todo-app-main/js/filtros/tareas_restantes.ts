import { obtenerTareas } from "../tareas/creación_tareas_/contenedor_tareas";

export const tareasRestantes = function () {
  const tareas = obtenerTareas();
  const elementosFaltantes = tareas.filter(
    (elemento: { finalizado: boolean }) => !elemento.finalizado
  );
  const numeroDeElementos = elementosFaltantes.length;
  return numeroDeElementos;
};
