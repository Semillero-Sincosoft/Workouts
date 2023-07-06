"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cambiarEstadoHomeWork = void 0;
const localStorage_js_1 = __importDefault(require("../../../module/localStorage.js"));
const contenedor_tareas_js_1 = require("../creaci\u00F3n_tareas_/contenedor_tareas.js");
const tareas_restantes_js_1 = require("../../filtros/tareas_restantes.js");
const cambiarEstadoHomeWork = (tarea, input) => {
    const tareas = (0, contenedor_tareas_js_1.obtenerTareas)();
    if (input.checked) {
        tarea.finalizado = true;
    }
    else {
        tarea.finalizado = false;
    }
    tareas.map((t) => {
        if (t.id === tarea.id) {
            t.finalizado = tarea.finalizado;
        }
        return t;
    });
    localStorage_js_1.default.save("arrayTareas", tareas);
    $('#elements-left').text((0, tareas_restantes_js_1.tareasRestantes)() + " items left");
};
exports.cambiarEstadoHomeWork = cambiarEstadoHomeWork;
