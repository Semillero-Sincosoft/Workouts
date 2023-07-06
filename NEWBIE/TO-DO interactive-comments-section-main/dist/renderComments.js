"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderCommentsReply = exports.renderComments = void 0;
const card_js_1 = __importDefault(require("./card/card.js"));
const validation_js_1 = require("./funcionality/validation.js");
const ui_js_1 = require("./ui/ui.js");
const renderComments = (comentario) => {
    const card = (0, card_js_1.default)(comentario);
    const containerCard = (0, ui_js_1.uiRenderComments)(card);
    if (comentario.replies.length > 0) {
        $.each(comentario.replies, (index, comentarioReplica) => {
            const cardReply = (0, exports.renderCommentsReply)(comentarioReplica, containerCard.replies);
            containerCard.replies.append(cardReply);
        });
    }
    (0, validation_js_1.validationReplies)(card, comentario, containerCard);
    return containerCard;
};
exports.renderComments = renderComments;
const renderCommentsReply = (comentario, containerCard) => {
    const card = (0, card_js_1.default)(comentario);
    (0, validation_js_1.validationReplies)(card, comentario, containerCard);
    return card;
};
exports.renderCommentsReply = renderCommentsReply;
