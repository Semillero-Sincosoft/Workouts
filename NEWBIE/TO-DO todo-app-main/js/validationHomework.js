import { crearTarea } from "./createHomeworks.js";
import { stick } from "./selection.js";
import { articleStick } from "./app.js";
export const main = document.querySelector("main");
const content = document.createElement("section");

content.classList.add("content");
export const insertarTarea = (tarea) => {
  const { texto, finalizado } = tarea;
  const htmlTarea = crearTarea();
  htmlTarea.querySelector("span").textContent = texto;
  htmlTarea.querySelector("input").checked = finalizado;
  main.append(content);
  content.append(htmlTarea, stick);
};

export const prueba = (article) => {
  const { text } = article;

  const texto = (querySelector("p").textContent = text);

  stick.append(texto);
};
