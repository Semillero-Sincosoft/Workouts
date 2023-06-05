import { crearTarea } from "./createHomeworks.js";
import { tareas } from "./tareas.js";
import { createTag } from "./utilities.js";
export const container = document.querySelector("main");
const homeworksContent = createTag("section", "content-homework");
homeworksContent.setAttribute("id", "content-homeworks");
const contentListHomeworks = createTag("div", "contenedor-tareas");
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
  if (index !== 1) {
    textOfElement = createTag("P", "p" + index, filter);
    element.append(textOfElement);
  } else {
    const itemAll = createTag("button", "", filter[0]);
    const itemActive = createTag("button", "", filter[1]);
    const itemCompleted = createTag("button", "", filter[2]);
    element.append(itemAll, itemActive, itemCompleted);
  }
  contentFilters.append(element);
});
