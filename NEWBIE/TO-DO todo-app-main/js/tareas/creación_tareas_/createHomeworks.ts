import { createTag } from "../../utilities";
import { createArticle, createInput, createButtonClose } from "./elements";
import { EventChecked } from "../../functionalities/checked";
import { cambiarEstadoHomeWork } from "../funcionalidad_tareas_/cambiar_estado_tarea";

export function crearTarea(tarea: any, index: string) {
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

  $(input).on("change", () => cambiarEstadoHomeWork(tarea, input as HTMLInputElement));
  $(input).on("change", () => EventChecked(input as HTMLInputElement, textHomework));

  return article;
}

