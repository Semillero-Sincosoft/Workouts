import { createTag } from "../utilities.js";
import { mostrarTareasPorEstado } from "./mostrar_tarea_por_estado.js";
import { contentFilters } from "../tareas/funcionalidad_tareas_/validationHomework.js";
import { eliminarCompletados } from "./eliminar_completados.js";
import { tareasRestantes } from "./tareas_restantes.js";
export const CrearBarraFiltros = function () {
  const filters = [
    tareasRestantes() + " items left",
    ["All", "Active", "Completed"],
    "Clear Completed",
  ];
  filters.map((filter, index) => {
    const element = createTag("div", "content-filter-" + index);
    let textOfElement;
    if (index == 0) {
      textOfElement = createTag("p", "elements-left", filter, "elements-left");
      element.append(textOfElement);
    } else if (index == 1) {
      const itemAll = createTag(
        "button",
        "filter-all",
        filter[0],
        "filter-all"
      );
      const itemActive = createTag("button", "filter-active", filter[1]);
      const itemCompleted = createTag("button", "filter-completed", filter[2]);
      element.append(itemAll, itemActive, itemCompleted);
      $(itemAll).on("click", () => mostrarTareasPorEstado());
      $(itemActive).on("click", () => mostrarTareasPorEstado(true));
      $(itemCompleted).on("click", () => mostrarTareasPorEstado(false));
    } else {
      const itemClear = createTag("button", "filter-clear", filter);
      element.append(itemClear);
      $(itemClear).on("click", () => eliminarCompletados());
    }
    contentFilters.append(element);
  });
};
