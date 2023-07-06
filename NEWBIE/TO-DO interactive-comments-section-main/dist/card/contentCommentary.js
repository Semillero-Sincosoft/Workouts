"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_ui_js_1 = require("../utilities-ui.js");
const createTextareaComment = (text) => {
    const contentWrittenCommentary = (0, utilities_ui_js_1.createElement)("section", "content-textarea");
    const writtenCommentary = (0, utilities_ui_js_1.createElement)("textarea", "written");
    writtenCommentary.id = "commentary";
    writtenCommentary.textContent = text;
    writtenCommentary.placeholder = "agregar comentario";
    contentWrittenCommentary.textArea = writtenCommentary;
    $(contentWrittenCommentary).append(writtenCommentary);
    return contentWrittenCommentary;
};
exports.default = createTextareaComment;
