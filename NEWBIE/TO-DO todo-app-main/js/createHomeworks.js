import icons from "./imgs.js/svg.js";
import { createTag } from "./utilities.js";
import { EventChecked } from "./functionalities.js/checked.js";
import { cambiarEstadoHomeWork } from "./functionalities.js/change-status.js";
export function crearTarea(tarea) {
  const { texto } = tarea;

  const article = createTag("article", "homework");

  const div = createTag("div");

  const input = createTag("input", "circular-checkbox");
  input.setAttribute("type", "checkbox");

  const textHomework = createTag("span");
  textHomework.textContent = texto;

  const close = createTag("button");
  close.innerHTML = icons.cross;

  article.append(div, close);
  div.append(input, textHomework);

  input.addEventListener("change", () => EventChecked(input, textHomework));
  input.addEventListener("change", () => cambiarEstadoHomeWork(tarea, input));
  return article;
}

