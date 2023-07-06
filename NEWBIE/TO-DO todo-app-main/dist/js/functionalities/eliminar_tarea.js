"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarTarea = void 0;
const validationHomework_js_1 = require("../tareas/funcionalidad_tareas_/validationHomework.js");
const contenedor_tareas_js_1 = require("../tareas/creaci\u00F3n_tareas_/contenedor_tareas.js");
const tareas_restantes_js_1 = require("../filtros/tareas_restantes.js");
const localStorage_js_1 = __importDefault(require("../../module/localStorage.js"));
const validacion_estado_js_1 = require("../validacion_estado.js");
const eliminarTarea = function (index) {
    const tarea = (0, contenedor_tareas_js_1.obtenerTareas)();
    tarea.splice(index, 1);
    $('#contenedor-tareas').empty();
    localStorage_js_1.default.save("arrayTareas", tarea);
    tarea.forEach(validationHomework_js_1.insertarTarea);
    $('#elements-left').text((0, tareas_restantes_js_1.tareasRestantes)() + " items left");
    (0, validacion_estado_js_1.validacionEstado)();
};
exports.eliminarTarea = eliminarTarea;
