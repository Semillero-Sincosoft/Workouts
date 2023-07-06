"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.createBtn = exports.createAvatar = exports.createText = exports.createElement = void 0;
const createElement = (tagName, className, id) => {
    const element = document.createElement(tagName);
    if (className) {
        $(element).addClass(className);
    }
    if (id) {
        $(element).attr("id", id);
    }
    return element;
};
exports.createElement = createElement;
const createText = (texto, clas) => {
    const text = (0, exports.createElement)("p", clas);
    $(text).text(texto);
};
exports.createText = createText;
const createAvatar = (image) => {
    const photo = (0, exports.createElement)("img");
    photo.src = image;
    return photo;
};
exports.createAvatar = createAvatar;
const createBtn = (text) => {
    const contentBtn = (0, exports.createElement)("article", "btn-commentary");
    const btn = (0, exports.createElement)("button");
    $(btn).text(text);
    contentBtn.btn = btn;
    contentBtn.append(btn);
    return contentBtn;
};
exports.createBtn = createBtn;
const generateId = (id) => {
    return Math.random().toString(8).substring(2, 6);
};
exports.generateId = generateId;
