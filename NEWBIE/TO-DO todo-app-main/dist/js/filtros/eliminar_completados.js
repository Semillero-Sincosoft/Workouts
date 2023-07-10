"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarCompletados = void 0;
const localStorage_js_1 = __importDefault(require("../../module/localStorage.js"));
const validationHomework_js_1 = require("../tareas/funcionalidad_tareas_/validationHomework.js");
const contenedor_tareas_js_1 = require("../tareas/creaci\u00F3n_tareas_/contenedor_tareas.js");
const validacion_estado_js_1 = require("../validacion_estado.js");
const eliminarCompletados = function () {
    const tareas = (0, contenedor_tareas_js_1.obtenerTareas)();
    for (let i = tareas.length - 1; i >= 0; i--) {
        if (tareas[i].finalizado) {
            tareas.splice(i, 1);
        }
    }
    $("#contenedor-tareas").html("");
    tareas.forEach((tarea, index) => {
        (0, validationHomework_js_1.insertarTarea)(tarea, index);
    });
    localStorage_js_1.default.save("arrayTareas", tareas);
    (0, validacion_estado_js_1.validacionEstado)();
    return tareas;
};
exports.eliminarCompletados = eliminarCompletados;
