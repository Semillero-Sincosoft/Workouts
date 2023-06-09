import { insertarTarea } from "./tareas/funcionalidad_tareas_/validationHomework.js";
import { obtenerTareas } from "./tareas/creación_tareas_/contenedor_tareas.js";
import { insertarDatosTarea } from "./tareas/funcionalidad_tareas_/insertar_datos.js";
import { generarIdÚnico } from "./utilities.js";
import { obtenerIndex } from "./utilities.js";


const homeworkAssignment = document.getElementById("text");
homeworkAssignment.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    const txtNuevaTarea = e.target.value;
    const idNuevaTarea = generarIdÚnico();
 
    if (txtNuevaTarea.trim() !== "") {
      insertarTarea({
        id: idNuevaTarea,
        texto: txtNuevaTarea,
      },obtenerIndex());
      insertarDatosTarea(txtNuevaTarea, idNuevaTarea);
      document.getElementById("text").value = "";
    }
  }
});
const tareas = obtenerTareas();
tareas.forEach((tarea, index)=>{insertarTarea(tarea,index)});



// const tareas = [1,2,3,4];

// tareas.forEach((tarea, index)=>{
//     console.log(tarea, index)
// })
