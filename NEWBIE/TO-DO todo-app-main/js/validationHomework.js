import { crearTarea } from "./createHomeworks.js";

export const container = document.querySelector("main");
const homeworksContent = document.createElement("section");
homeworksContent.setAttribute("id", "content");
homeworksContent.classList.add("content");
export const insertarTarea = (tarea) => {
  const htmlTarea = crearTarea(tarea);
  container.append(homeworksContent);
  homeworksContent.append(htmlTarea);
};
