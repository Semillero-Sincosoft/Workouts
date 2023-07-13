"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tareasRestantes = void 0;
const contenedor_tareas_1 = require("../tareas/creaci\u00F3n_tareas_/contenedor_tareas");
const tareasRestantes = function () {
    const tareas = (0, contenedor_tareas_1.obtenerTareas)();
    const elementosFaltantes = tareas.filter((elemento) => !elemento.finalizado);
    const numeroDeElementos = elementosFaltantes.length;
    return numeroDeElementos;
};
exports.tareasRestantes = tareasRestantes;
