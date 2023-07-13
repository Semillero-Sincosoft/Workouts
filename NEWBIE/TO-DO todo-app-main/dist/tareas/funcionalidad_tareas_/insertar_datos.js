"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertarDatosTarea = void 0;
const localStorage_js_1 = __importDefault(require("../../../module/localStorage.js"));
const insertarDatosTarea = (text, id) => {
    const nuevaTarea = { id: id, texto: text, finalizado: false };
    localStorage_js_1.default.add("arrayTareas", nuevaTarea);
};
exports.insertarDatosTarea = insertarDatosTarea;
