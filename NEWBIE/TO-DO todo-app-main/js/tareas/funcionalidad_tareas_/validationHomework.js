import { crearTarea } from "../creación_tareas_/createHomeworks.js";
import { createTag } from "../../utilities.js";
import { CrearBarraFiltros } from "../../filtros/creación_filtros.js";
import { tareasRestantes } from "../../filtros/tareas_restantes.js";
const container = $("main");
const homeworksContent = createTag(
  "section",
  "content-homework",
  "",
  "content-homeworks"
);
const contentListHomeworks = createTag(
  "div",
  "contenedor-tareas",
  "",
  "contenedor-tareas"
);
export const contentFilters = createTag("div", "contenedor-filtros");

export const insertarTarea = (tarea, index) => {
  const htmlTarea = crearTarea(tarea, index);
  container.append(homeworksContent);
  homeworksContent.append(contentListHomeworks, contentFilters);
  contentListHomeworks.append(htmlTarea);

  $("#elements-left").text(tareasRestantes() + " items left");
};
CrearBarraFiltros();
