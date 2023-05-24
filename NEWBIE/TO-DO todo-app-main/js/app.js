import { crearTarea } from "./createHomeworks.js";
export const tareas = [
  { texto: "ir al banco", finalizado: true },
  { texto: "limpiar zapatos", finalizado: false },
  { texto: "barrer la calle", finalizado: true },
];

const main = document.querySelector("main");

const insertarTarea = (tarea) => {
  const { texto, finalizado } = tarea;
  const htmlTarea = crearTarea();
  htmlTarea.querySelector("span").textContent = texto;
  htmlTarea.querySelector("input").checked = finalizado;
  main.append(htmlTarea);
};
tareas.forEach(insertarTarea);

const input = document.getElementById("text");
input.addEventListener("keyup", (e) => {
  if (  e.keyCode == 13) {
    const txtNuevaTarea = e.target.value;
    insertarTarea({
      texto: txtNuevaTarea,
      finalizado: false,
    });
  }
});
