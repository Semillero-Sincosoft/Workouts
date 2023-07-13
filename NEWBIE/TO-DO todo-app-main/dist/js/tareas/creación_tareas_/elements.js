"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createButtonClose = exports.createInput = exports.createArticle = void 0;
const utilities_1 = require("../../utilities");
const svg_1 = __importDefault(require("../../imgs/svg"));
const eliminar_tarea_1 = require("../../functionalities/eliminar_tarea");
const createArticle = (id, index) => {
    const article = (0, utilities_1.createTag)("article", "homework", "", id);
    $(article).addClass("no-completado");
    article.setAttribute("index", index);
    return article;
};
exports.createArticle = createArticle;
const createInput = (id) => {
    const input = (0, utilities_1.createTag)("input", "circular-checkbox", "", `input-${id}`);
    $(input).attr("type", "checkbox");
    return input;
};
exports.createInput = createInput;
const createButtonClose = (index) => {
    const parsedIndex = parseInt(index);
    const close = (0, utilities_1.createTag)("button", "icon-delete");
    $(close).html(svg_1.default.cross);
    $(close).on("click", () => (0, eliminar_tarea_1.eliminarTarea)(parsedIndex));
    return close;
};
exports.createButtonClose = createButtonClose;
