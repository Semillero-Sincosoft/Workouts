export function crearTarea() {
  const article = document.createElement("article");
  article.classList.add("homeworks");
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.classList.add("circular-checkbox");
  const text = document.createElement("span");
  const close = document.createElement("img");
  close.src = "images/icon-cross.svg";
  article.append(div, close);
  div.append(input, text);
  return article;
}

function crearButtons(text) {
  const buttons = document.createElement("buttons");
  buttons.textContent = text;
  return buttons;
}

const all = crearButtons("all");

function crearTareaArticle() {
  const articles = document.createElement("article");
  const text = document.createElement("p");
  
}
