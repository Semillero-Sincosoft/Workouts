"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_ui_js_1 = require("../utilities-ui.js");
const contentBodyCard = (comentario, id) => {
    const contentWritten = (0, utilities_ui_js_1.createElement)("article", "content-written", `content-id${id}`);
    const textComment = (0, utilities_ui_js_1.createText)(comentario, "text-comment");
    $(contentWritten).append(textComment);
    return contentWritten;
};
exports.default = contentBodyCard;
