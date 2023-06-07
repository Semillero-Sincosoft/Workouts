import { crearTarea } from "./createHomeworks.js";
import { createTag } from "./utilities.js";
import { mostrarTodasTareas } from "./tareas.js";
// import { mostrarTareasPendientes } from "./tareas.js";
// import { mostrarTodasTareasCompletadas } from "./tareas.js";
import { tareas } from "./tareas.js";
import { eliminarCompletados } from "./tareas.js";
import { mostrarTareas } from "./tareas.js";
export const container = document.querySelector("main");
const homeworksContent = createTag("section", "content-homework");
homeworksContent.setAttribute("id", "content-homeworks");
const contentListHomeworks = createTag("div", "contenedor-tareas","","contenedor-tareas");
const contentFilters = createTag("div", "contenedor-filtros");

export const insertarTarea = (tarea) => {
  const htmlTarea = crearTarea(tarea);
  container.append(homeworksContent);
  homeworksContent.append(contentListHomeworks, contentFilters);
  contentListHomeworks.append(htmlTarea);
};
const filters = [
  "items left",
  ["All", "Active", "Completed"],
  "Clear Completed",
];
filters.map((filter, index) => {
  const element = createTag("div", "content-filter-" + index);
  let textOfElement;
  if (index == 0) {
    textOfElement = createTag("p", "p" + index, filter);
    element.append(textOfElement);
  } else if (index == 1) {
    const itemAll = createTag("button", "filter-all", filter[0],"filter-all");
    const itemActive = createTag("button", "filter-active", filter[1]);
    const itemCompleted = createTag("button", "filter-completed", filter[2]);
    element.append(itemAll, itemActive, itemCompleted);
    itemAll.addEventListener("click",mostrarTodasTareas);
    itemActive.addEventListener("click",() => mostrarTareas(true))
    itemCompleted.addEventListener("click", () => mostrarTareas(false)); 
  } else{
    const itemClear = createTag("button","filter-clear",filter)
    element.append(itemClear)
    itemClear.addEventListener('click',()=>eliminarCompletados())
  }

  contentFilters.append(element);
});
