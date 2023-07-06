"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replace = exports.validationReplies = void 0;
const commentary_js_1 = require("../card/commentary.js");
const accion_js_1 = __importDefault(require("../data/accion.js"));
const infoLocalStorage_js_1 = require("../module/infoLocalStorage.js");
const modal_js_1 = require("../ui/modal.js");
const UpdateComment_js_1 = require("./UpdateComment.js");
const validationReplies = (card, comentario, containerCard) => {
    $(card.replyButton).on("click", () => {
        const addReply = (0, commentary_js_1.sectionAddComentary)(infoLocalStorage_js_1.commentLocal.currentUser.image.png, comentario.user.username, accion_js_1.default.reply, comentario, containerCard);
        $(containerCard).append(addReply);
    });
    $(card.delete).on("click", () => {
        console.log("EVENTO DEL DELETE");
        $(modal_js_1.modalHtml).toggleClass("hidden");
        $(modal_js_1.modalHtml).attr("idEliminar", card.id);
    });
    $(card.edit).on("click", () => {
        const update = (0, UpdateComment_js_1.textUpdate)(card.text, card.id);
        (0, exports.replace)(card.id, update);
    });
};
exports.validationReplies = validationReplies;
const replace = (id, contentHtml) => $(`#content-id${id}`).html(contentHtml);
exports.replace = replace;
