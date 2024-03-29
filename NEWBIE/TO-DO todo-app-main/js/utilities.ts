
export const createTag = (tagName?:string, className?:string, text?:string, id?:string) => {
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
  const indexElement =
    JSON.parse(localStorage.getItem("arrayTareas")).length - 1;
  return indexElement;
};
