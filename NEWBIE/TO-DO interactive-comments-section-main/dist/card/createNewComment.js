"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewCommentary = void 0;
const accion_js_1 = __importDefault(require("../data/accion.js"));
const infoLocalStorage_js_1 = require("../module/infoLocalStorage.js");
const localStorage_js_1 = __importDefault(require("../module/localStorage.js"));
const renderComments_js_1 = require("../renderComments.js");
const ui_js_1 = require("../ui/ui.js");
const utilities_ui_js_1 = require("../utilities-ui.js");
const commentary_js_1 = require("./commentary.js");
const createNewCommentary = (content, username, actionBtn, validation, id) => {
    const imageCurrentUser = infoLocalStorage_js_1.commentLocal.currentUser.image.png;
    const nameUserReply = infoLocalStorage_js_1.commentLocal.currentUser.username;
    const newComment = {
        id: (0, utilities_ui_js_1.generateId)(),
        content: content,
        createdAt: "JUST NOW",
        score: 0,
        replyingTo: username,
        user: {
            image: {
                png: imageCurrentUser,
                webp: imageCurrentUser,
            },
            username: nameUserReply,
        },
        replies: [],
    };
    const validationButtonReplyOSend = actionBtn == accion_js_1.default.send ? false : true;
    const inputHidden = commentary_js_1.sectionAddComentary.inputHidden;
    inputHidden.value = id;
    let cardReply;
    if (id == 0) {
        cardReply = (0, renderComments_js_1.renderComments)(newComment);
    }
    else {
        cardReply = (0, commentary_js_1.commentaryReply)(newComment, validationButtonReplyOSend);
        const contentCommentary = ui_js_1.uiRenderComments.replies;
        $(contentCommentary).append(cardReply, inputHidden);
    }
    validation.disabled = true;
    localStorage_js_1.default.add("comentarios", newComment, inputHidden.value);
    return cardReply;
};
exports.createNewCommentary = createNewCommentary;
