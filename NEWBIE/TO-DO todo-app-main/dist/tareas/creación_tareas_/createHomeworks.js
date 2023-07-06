"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearTarea = void 0;
const utilities_1 = require("../../utilities");
const elements_1 = require("./elements");
const checked_1 = require("../../functionalities/checked");
const cambiar_estado_tarea_1 = require("../funcionalidad_tareas_/cambiar_estado_tarea");
function crearTarea(tarea, index) {
    const { texto, id } = tarea;
    const article = (0, elements_1.createArticle)(id, index);
    const div = (0, utilities_1.createTag)("div");
    const input = (0, elements_1.createInput)(id);
    const textHomework = (0, utilities_1.createTag)("span", "", texto, `span-${id}`);
    const close = (0, elements_1.createButtonClose)(index);
    $(article).append(div);
    $(div).append(input, textHomework);
    $(article).on("mouseenter", function () {
        $(article).append(close);
    });
    $(article).on("mouseleave", function () {
        article.removeChild(close);
    });
    $(input).on("change", () => (0, cambiar_estado_tarea_1.cambiarEstadoHomeWork)(tarea, input));
    $(input).on("change", () => (0, checked_1.EventChecked)(input, textHomework));
    return article;
}
exports.crearTarea = crearTarea;
