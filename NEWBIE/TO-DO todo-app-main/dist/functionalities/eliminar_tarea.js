"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarTarea = void 0;
const validationHomework_1 = require("../tareas/funcionalidad_tareas_/validationHomework");
const contenedor_tareas_1 = require("../tareas/creaci\u00F3n_tareas_/contenedor_tareas");
const tareas_restantes_1 = require("../filtros/tareas_restantes");
const localStorage_1 = __importDefault(require("../../module/localStorage"));
const validacion_estado_1 = require("../validacion_estado");
const eliminarTarea = function (index) {
    const tarea = (0, contenedor_tareas_1.obtenerTareas)();
    tarea.splice(index, 1);
    $('#contenedor-tareas').empty();
    localStorage_1.default.save("arrayTareas", tarea);
    tarea.forEach(validationHomework_1.insertarTarea);
    $('#elements-left').text((0, tareas_restantes_1.tareasRestantes)() + " items left");
    (0, validacion_estado_1.validacionEstado)();
};
exports.eliminarTarea = eliminarTarea;
