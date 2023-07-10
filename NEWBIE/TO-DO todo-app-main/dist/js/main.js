"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validationHomework_1 = require("./tareas/funcionalidad_tareas_/validationHomework");
const contenedor_tareas_1 = require("./tareas/creaci\u00F3n_tareas_/contenedor_tareas");
const insertar_datos_1 = require("./tareas/funcionalidad_tareas_/insertar_datos");
const utilities_1 = require("./utilities");
const utilities_2 = require("./utilities");
const validacion_estado_1 = require("./validacion_estado");
$('#text').on("keyup", (e) => {
    if (e.keyCode == 13) {
        const txtNuevaTarea = e.target.value;
        const idNuevaTarea = (0, utilities_1.generarIdÚnico)();
        if (txtNuevaTarea.trim() !== "") {
            (0, insertar_datos_1.insertarDatosTarea)(txtNuevaTarea, idNuevaTarea);
            (0, validationHomework_1.insertarTarea)({
                id: idNuevaTarea,
                texto: txtNuevaTarea,
            }, parseInt((0, utilities_2.obtenerIndex)()));
            $('#text').val("");
        }
    }
});
const tareas = (0, contenedor_tareas_1.obtenerTareas)();
tareas.forEach((tarea, index) => {
    (0, validationHomework_1.insertarTarea)(tarea, index);
});
(0, validacion_estado_1.validacionEstado)();
