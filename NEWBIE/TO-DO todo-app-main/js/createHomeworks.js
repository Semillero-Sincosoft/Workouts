
export function crearTarea() {
  const article = document.createElement("article");
  article.classList.add("homeworks")
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.classList.add("circular-checkbox")
  const text = document.createElement("span");
  article.append(input, text);
  return article;
}
 