"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerIndex = exports.generarIdÚnico = exports.createTag = void 0;
const createTag = (tagName, className, text, id) => {
    const element = document.createElement(tagName);
    if (className) {
        element.classList.add(className);
    }
    if (text) {
        element.textContent = text;
    }
    if (id) {
        element.setAttribute("id", id);
    }
    return element;
};
exports.createTag = createTag;
const generarIdÚnico = () => {
    const idAleatorio = Math.random().toString(8).substring(2, 6);
    return idAleatorio;
};
exports.generarIdÚnico = generarIdÚnico;
const obtenerIndex = () => {
    const indexElement = JSON.parse(localStorage.getItem("arrayTareas")).length - 1;
    return indexElement;
};
exports.obtenerIndex = obtenerIndex;
