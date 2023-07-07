import { insertarTarea } from "./tareas/funcionalidad_tareas_/validationHomework";
import { obtenerTareas } from "./tareas/creación_tareas_/contenedor_tareas";
import { insertarDatosTarea } from "./tareas/funcionalidad_tareas_/insertar_datos";
import { generarIdÚnico } from "./utilities";
import { obtenerIndex } from "./utilities";
import { validacionEstado } from "./validacion_estado";

$('#text').on("keyup", (e) => {
  if (e.keyCode == 13) {
    const txtNuevaTarea = (e.target as HTMLInputElement).value;
    const idNuevaTarea = generarIdÚnico();

    if (txtNuevaTarea.trim() !== "") {
      insertarDatosTarea(txtNuevaTarea, idNuevaTarea);
      insertarTarea(
        {
          id: idNuevaTarea,
          texto: txtNuevaTarea,
        },
        parseInt(obtenerIndex())
      );
      $('#text').val("");
    }
  }
});

const tareas = obtenerTareas();
tareas.forEach((tarea: any, index: number) => {
  insertarTarea(tarea, index);
});

validacionEstado();


