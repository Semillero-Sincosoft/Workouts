"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentLocal = void 0;
const comments_js_1 = require("../comments.js");
const localStorage_js_1 = __importDefault(require("./localStorage.js"));
if (localStorage_js_1.default.get("comentarios") == null) {
    localStorage_js_1.default.save("comentarios", comments_js_1.comentarios);
}
exports.commentLocal = localStorage_js_1.default.get("comentarios");
