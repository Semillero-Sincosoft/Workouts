import { stick } from "./selection.js";
import { crearTarea } from "./createHomeworks.js";

export const container = document.querySelector("main");
const homeworksContent = document.createElement("section");
homeworksContent.setAttribute("id","content")
homeworksContent.classList.add("content");
export const insertarTarea = (tarea) => {
  const { texto, finalizado } = tarea;
  const htmlTarea = crearTarea();
  htmlTarea.querySelector("span").textContent = texto;
  htmlTarea.querySelector("input").checked = finalizado;
  container.append(homeworksContent);
  homeworksContent.append(htmlTarea, stick);
};

