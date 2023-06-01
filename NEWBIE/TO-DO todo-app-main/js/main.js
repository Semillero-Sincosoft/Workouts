import { insertarTarea } from "./validationHomework.js";
import { obtenerTareas } from "./tareas.js";
import { insertarDatosTarea } from "./tareas.js";


const homeworkAssignment = document.getElementById("text");
homeworkAssignment.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    const txtNuevaTarea = e.target.value;
    
    if (txtNuevaTarea.trim() !== "") {
      insertarTarea({
        texto: txtNuevaTarea
      });
      insertarDatosTarea(txtNuevaTarea);
      document.getElementById("text").value = "";
    }
  }
});

const tareas = obtenerTareas();
tareas.forEach(insertarTarea);