"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentary = exports.deleteLocal = void 0;
const modal_js_1 = require("../ui/modal.js");
const localStorage_js_1 = __importDefault(require("../module/localStorage.js"));
const deleteLocal = (id) => {
    localStorage_js_1.default.delete("comentarios", id);
};
exports.deleteLocal = deleteLocal;
const deleteCommentary = () => {
    const modal = (0, modal_js_1.modalDelete)();
    $(modal.cancel).on("click", () => {
        $(modal_js_1.modalHtml).toggleClass("hidden");
        const deleteId = $(modal_js_1.modalHtml).attr("idEliminar");
        (0, exports.deleteLocal)(deleteId);
        $(`#${deleteId}`).remove();
    });
    $(modal.btnNoCancel).on("click", () => {
        $(modal_js_1.modalHtml).toggleClass("hidden");
    });
};
exports.deleteCommentary = deleteCommentary;
