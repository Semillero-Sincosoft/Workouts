import { crearTarea } from "./createHomeworks.js";
import { createTag } from "./utilities.js";
export const container = document.querySelector("main");
const homeworksContent = createTag ("section","content-homework");
homeworksContent.setAttribute("id", "content-homeworks");

export const insertarTarea = (tarea) => {
  const htmlTarea = crearTarea(tarea);
  container.append(homeworksContent);
  homeworksContent.append(htmlTarea);
};
