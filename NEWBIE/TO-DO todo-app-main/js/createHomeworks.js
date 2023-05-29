export function crearTarea(tarea) {
  const { finalizado, texto } = tarea;
  const article = document.createElement("article");
  article.classList.add("homeworks");
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.classList.add("circular-checkbox");
  input.checked = finalizado;
  const textHomework = document.createElement("span");
  textHomework.textContent = texto;
  const close = document.createElement("img");
  close.src = "images/icon-cross.svg";
  article.append(div, close);
  div.append(input, textHomework);
  return article;
}
