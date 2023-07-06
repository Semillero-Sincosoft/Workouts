import { createTag } from "../../utilities.js";
import icons from "../../imgs/svg.js";
import { eliminarTarea } from "../../functionalities/eliminar_tarea.js";
export const createArticle = (id: string, index: string) => {
  const article = createTag("article", "homework", "", id);
  $(article).addClass("no-completado");
  article.setAttribute("index", index);
  return article;
};
export const createInput = (id: number) => {
  const input = createTag("input", "circular-checkbox", "", `input-${id}`);
  $(input).attr("type", "checkbox");
  return input;
};

export const createButtonClose = (index: string) => {
  const close = createTag("button", "icon-delete");
  $(close).html(icons.cross);
  $(close).on("click", () => eliminarTarea(index));
  return close;
};
