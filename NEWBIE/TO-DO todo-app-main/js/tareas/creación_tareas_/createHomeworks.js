import icons from "../../imgs/svg.js";
import { createTag } from "../../utilities.js";
import { EventChecked } from "../../functionalities/checked.js";
import { cambiarEstadoHomeWork } from "../funcionalidad_tareas_/cambiar_estado_tarea.js";
export function crearTarea(tarea) {
  const { texto, id } = tarea;

  const article = createTag("article", "homework");
  article.classList.add("no-completado");
  article.setAttribute("id", id);

  const div = createTag("div");

  const input = createTag("input", "circular-checkbox");
  input.setAttribute("type", "checkbox");

  const textHomework = createTag("span");
  textHomework.textContent = texto;

  const close = createTag("button","icon-delete");
  close.innerHTML = icons.cross;

  article.append(div);
  div.append(input, textHomework);

  article.addEventListener("mouseleave", function() {
    article.removeChild(close); // Remueve el botón del div cuando el mouse sale del artículo
  });
  article.addEventListener("mouseenter", function() {
    article.appendChild(close); // Añade el botón al div cuando se le hace hover al artículo
  });
  

  input.addEventListener("change", () => EventChecked(input, textHomework));
  input.addEventListener("change", () => cambiarEstadoHomeWork(tarea, input));
  return article;
}
