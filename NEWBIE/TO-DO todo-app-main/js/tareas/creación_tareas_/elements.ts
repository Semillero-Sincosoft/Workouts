import { createTag } from "../../utilities";
import icons from "../../imgs/svg";
import { eliminarTarea } from "../../functionalities/eliminar_tarea";

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
  const parsedIndex = parseInt(index);
  const close = createTag("button", "icon-delete");
  $(close).html(icons.cross);
  $(close).on("click", () => eliminarTarea(parsedIndex));
  return close;
};
