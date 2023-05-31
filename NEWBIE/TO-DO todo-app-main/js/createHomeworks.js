import { createTag } from "./utilities.js";
import icons from "./imgs.js/svg.js"
export function crearTarea(tarea) {
  const { texto, finalizado } = tarea;

  const article = createTag("article","homework")

  const div = createTag("div")

  const input = createTag("input","circular-checkbox");
  input.setAttribute("type", "checkbox");
  input.checked = finalizado;

  const textHomework = createTag("span")
  textHomework.textContent = texto;

  const close = createTag("button")
  close.innerHTML = icons.cross;

  article.append(div, close);
  div.append(input, textHomework);

  return article;
}
