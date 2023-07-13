"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validationHomework_js_1 = require("./tareas/funcionalidad_tareas_/validationHomework.js");
const contenedor_tareas_js_1 = require("./tareas/creaci\u00F3n_tareas_/contenedor_tareas.js");
const insertar_datos_js_1 = require("./tareas/funcionalidad_tareas_/insertar_datos.js");
const utilities_js_1 = require("./utilities.js");
const utilities_js_2 = require("./utilities.js");
const validacion_estado_js_1 = require("./validacion_estado.js");
$('#text').on("keyup", (e) => {
    if (e.keyCode == 13) {
        const txtNuevaTarea = e.target.value;
        const idNuevaTarea = (0, utilities_js_1.generarIdÚnico)();
        if (txtNuevaTarea.trim() !== "") {
            (0, insertar_datos_js_1.insertarDatosTarea)(txtNuevaTarea, idNuevaTarea);
            (0, validationHomework_js_1.insertarTarea)({
                id: idNuevaTarea,
                texto: txtNuevaTarea,
            }, (0, utilities_js_2.obtenerIndex)());
            $('#text').val("");
        }
    }
});
const tareas = (0, contenedor_tareas_js_1.obtenerTareas)();
tareas.forEach((tarea, index) => {
    (0, validationHomework_js_1.insertarTarea)(tarea, index);
});
(0, validacion_estado_js_1.validacionEstado)();
