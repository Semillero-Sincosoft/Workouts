import { crearTarea } from "../creación_tareas_/createHomeworks";
import { createTag } from "../../utilities";
import { CrearBarraFiltros } from "../../filtros/creación_filtros";
import { tareasRestantes } from "../../filtros/tareas_restantes";

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

export const insertarTarea = (tarea: any, index: string) => {
  const htmlTarea = crearTarea(tarea, index);
  container.append(homeworksContent);
  homeworksContent.append(contentListHomeworks, contentFilters);
  contentListHomeworks.append(htmlTarea);

  $("#elements-left").text(tareasRestantes() + " items left");
};

CrearBarraFiltros();
