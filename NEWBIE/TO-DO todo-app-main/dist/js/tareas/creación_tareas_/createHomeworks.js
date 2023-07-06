"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearTarea = void 0;
const utilities_js_1 = require("../../utilities.js");
const elements_js_1 = require("./elements.js");
const elements_js_2 = require("./elements.js");
const elements_js_3 = require("./elements.js");
const checked_js_1 = require("../../functionalities/checked.js");
const cambiar_estado_tarea_js_1 = require("../funcionalidad_tareas_/cambiar_estado_tarea.js");
function crearTarea(tarea, index) {
    const { texto, id } = tarea;
    const article = (0, elements_js_1.createArticle)(id, index);
    const div = (0, utilities_js_1.createTag)("div");
    const input = (0, elements_js_2.createInput)(id);
    const textHomework = (0, utilities_js_1.createTag)("span", "", texto, `span-${id}`);
    const close = (0, elements_js_3.createButtonClose)(index);
    $(article).append(div);
    $(div).append(input, textHomework);
    $(article).on("mouseenter", function () {
        $(article).append(close);
    });
    $(article).on("mouseleave", function () {
        article.removeChild(close);
    });
    $(input).on("change", () => (0, cambiar_estado_tarea_js_1.cambiarEstadoHomeWork)(tarea, input));
    $(input).on("change", () => (0, checked_js_1.EventChecked)(input, textHomework));
    return article;
}
exports.crearTarea = crearTarea;
