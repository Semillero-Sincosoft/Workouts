"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.textUpdate = void 0;
const utilities_ui_js_1 = require("../utilities-ui.js");
const validation_js_1 = require("./validation.js");
const localStorage_js_1 = __importDefault(require("../module/localStorage.js"));
const textUpdate = (texto, id) => {
    const contentUpdate = (0, utilities_ui_js_1.createElement)("section", "update");
    const text = (0, utilities_ui_js_1.createElement)("textarea", "update-textarea");
    text.textContent = texto;
    const btnUpdate = (0, utilities_ui_js_1.createBtn)("UPDATE");
    $(btnUpdate).on("click", () => {
        const newTextUpdate = text.value;
        const textReplace = $("<p>", {
            class: "update",
        }).text(newTextUpdate);
        (0, validation_js_1.replace)(id, textReplace);
        localStorage_js_1.default.update("comentarios", id, "content", newTextUpdate);
    });
    contentUpdate.append(text, btnUpdate);
    return contentUpdate;
};
exports.textUpdate = textUpdate;
