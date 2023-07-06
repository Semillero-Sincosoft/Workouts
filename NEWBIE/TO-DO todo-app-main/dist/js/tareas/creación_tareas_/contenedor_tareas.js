"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerTareas = void 0;
const obtenerTareas = () => {
    const tareas = localStorage.getItem("arrayTareas") !== null
        ? JSON.parse(localStorage.getItem("arrayTareas"))
        : [];
    return tareas;
};
exports.obtenerTareas = obtenerTareas;
