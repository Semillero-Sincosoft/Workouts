"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modalDelete = exports.modalHtml = void 0;
const utilities_ui_js_1 = require("../utilities-ui.js");
exports.modalHtml = document.getElementById("content-modal");
const modalDelete = () => {
    $(exports.modalHtml).addClass("hidden");
    const contentModal = (0, utilities_ui_js_1.createElement)("section", "content-modal");
    const title = (0, utilities_ui_js_1.createElement)("h2", "title-modal");
    $(title).text("Delete comment");
    const textModal = (0, utilities_ui_js_1.createText)("Are you sure want to delete this comment? This will remove the comment and can't be undone", "txtModal");
    const contentBtn = (0, utilities_ui_js_1.createElement)("div", "conten-btn");
    const doNotDelete = (0, utilities_ui_js_1.createBtn)("NO, CANCEL");
    $(doNotDelete).addClass("btn-no-delete");
    contentModal.btnNoCancel = doNotDelete;
    const btnEliminate = (0, utilities_ui_js_1.createBtn)("YES, DELETE");
    $(btnEliminate).addClass("btn-yes-delete");
    contentModal.cancel = btnEliminate;
    $(contentModal).append(title, textModal, contentBtn);
    $(contentBtn).append(doNotDelete, btnEliminate);
    $(exports.modalHtml).append(contentModal);
    return contentModal;
};
exports.modalDelete = modalDelete;
