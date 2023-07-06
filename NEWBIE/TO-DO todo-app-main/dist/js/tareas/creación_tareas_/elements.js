"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createButtonClose = exports.createInput = exports.createArticle = void 0;
const utilities_js_1 = require("../../utilities.js");
const svg_js_1 = __importDefault(require("../../imgs/svg.js"));
const eliminar_tarea_js_1 = require("../../functionalities/eliminar_tarea.js");
const createArticle = (id, index) => {
    const article = (0, utilities_js_1.createTag)("article", "homework", "", id);
    $(article).addClass("no-completado");
    article.setAttribute("index", index);
    return article;
};
exports.createArticle = createArticle;
const createInput = (id) => {
    const input = (0, utilities_js_1.createTag)("input", "circular-checkbox", "", `input-${id}`);
    $(input).attr("type", "checkbox");
    return input;
};
exports.createInput = createInput;
const createButtonClose = (index) => {
    const close = (0, utilities_js_1.createTag)("button", "icon-delete");
    $(close).html(svg_js_1.default.cross);
    $(close).on("click", () => (0, eliminar_tarea_js_1.eliminarTarea)(index));
    return close;
};
exports.createButtonClose = createButtonClose;
