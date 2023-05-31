import { insertarTarea } from "./validationHomework.js";
import { obtenerTareas} from "./servicios.js";
import { insertarDatosTarea } from "./servicios.js";

const tareas = obtenerTareas() 
tareas.forEach(insertarTarea);
const homeworkAssignment = document.getElementById("text");
homeworkAssignment.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    const txtNuevaTarea = e.target.value;

    if (txtNuevaTarea.trim() !== "") {
      insertarTarea({
        texto: txtNuevaTarea,
        finalizado: false,
      })
      insertarDatosTarea(txtNuevaTarea)
      document.getElementById("text").value = "";
    }
  }
});
