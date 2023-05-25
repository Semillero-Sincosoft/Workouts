import { insertarTarea, prueba } from "./validationHomework.js";
export const tareas = [
  { texto: "ir al banco", finalizado: true },
  { texto: "limpiar zapatos", finalizado: false },
  { texto: "barrer la calle", finalizado: true },
];

tareas.forEach(insertarTarea);

export const articleStick = [
  {
    Text: `item left`,
  },
  {
    buttons: {
      button1: "all",
      button2: "active",
      button3: "complete",
    },
  },
  {
    clearComplete: "clear complete",
  },
];

articleStick.forEach(prueba);

const input = document.getElementById("text");
input.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    const txtNuevaTarea = e.target.value;
    insertarTarea({
      texto: txtNuevaTarea,
      finalizado: false,
    });
    document.getElementById("text").value = "";
  }
});
