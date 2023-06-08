import { tareas } from "./tareas/creación_tareas_/contenedor_tareas.js";
export const createTag = (tagName, className, text, id) => {
  const element = document.createElement(tagName);
  if (className) {
    element.classList.add(className);
  }
  if (text) {
    element.textContent = text;
  }
  if (id) {
    element.setAttribute("id", id);
  }
  return element;
};
export const generarIdÚnico = () => {
  const idAleatorio = Math.random().toString(8).substring(2, 6);
  return idAleatorio;
};
export const obtenerIndex = () => {
    const indexElement = tareas.length
    return indexElement
}
