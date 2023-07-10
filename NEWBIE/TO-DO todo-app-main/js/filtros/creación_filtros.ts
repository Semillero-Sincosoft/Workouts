import { createTag } from "../utilities";
import { mostrarTareasPorEstado } from "./mostrar_tarea_por_estado";
import { contentFilters } from "../tareas/funcionalidad_tareas_/validationHomework";
import { eliminarCompletados } from "./eliminar_completados";
import { tareasRestantes } from "./tareas_restantes";

export const CrearBarraFiltros = function () {
  const filters: (string | string[])[] = [
    tareasRestantes() + " items left",
    ["All", "Active", "Completed"],
    "Clear Completed",
  ];
  filters.map((filter: string | string[], index: number) => {
    const element = createTag("div", "content-filter-" + index);
    let textOfElement: HTMLElement;
    if (index == 0) {
      textOfElement = createTag("button", "filter-all", filter[0] as string, "filter-all");

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
      const itemClear = createTag("button", "filter-clear", filter[0] as string);
      element.append(itemClear);
      $(itemClear).on("click", () => eliminarCompletados());
    }
    contentFilters.append(element);
  });
};
