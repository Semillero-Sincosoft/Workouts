import { createTag } from "../../utilities.js";
import { createArticle } from "./elements.js";
import { createInput } from "./elements.js";
import { createButtonClose } from "./elements.js";
import { EventChecked } from "../../functionalities/checked.js";
import { cambiarEstadoHomeWork } from "../funcionalidad_tareas_/cambiar_estado_tarea.js";
export function crearTarea(tarea, index) {
  const { texto, id } = tarea;
  const article = createArticle(id, index);
  const div = createTag("div");
  const input = createInput(id);
  const textHomework = createTag("span", "", texto, `span-${id}`);
  const close = createButtonClose(index);
  
  $(article).append(div);
  $(div).append(input, textHomework);

  $(article).on("mouseenter", function () {
    $(article).append(close);
  });
  $(article).on("mouseleave", function () {
    article.removeChild(close);
  });

  $(input).on("change", () => cambiarEstadoHomeWork(tarea, input));
  $(input).on("change", () => EventChecked(input, textHomework));

  return article;
}
