"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentaryReply = exports.addSectionComment = exports.sectionAddComentary = void 0;
const renderComments_js_1 = require("../renderComments.js");
const utilities_ui_js_1 = require("../utilities-ui.js");
const contentCommentary_js_1 = __importDefault(require("./contentCommentary.js"));
const accion_js_1 = __importDefault(require("../data/accion.js"));
const infoLocalStorage_js_1 = require("../module/infoLocalStorage.js");
const createNewComment_js_1 = require("./createNewComment.js");
const sectionAddComentary = (image, username, actionBtn = accion_js_1.default.reply, comentario, containerCard) => {
    const { id } = comentario;
    const $contentCommentary = (0, utilities_ui_js_1.createElement)("div", "content-card");
    exports.sectionAddComentary.divCommentary = $contentCommentary;
    const photoUser = (0, utilities_ui_js_1.createAvatar)(image);
    const inputHidden = (0, utilities_ui_js_1.createElement)("input");
    $(inputHidden).attr("type", "hidden");
    exports.sectionAddComentary.inputHidden = inputHidden;
    const aside = (0, utilities_ui_js_1.createElement)("aside", "avatar-commentary");
    $(aside).append(photoUser);
    let txtBoton = accion_js_1.default.reply;
    if (actionBtn == accion_js_1.default.send) {
        txtBoton = accion_js_1.default.send;
    }
    const buttonReply = (0, utilities_ui_js_1.createBtn)(txtBoton);
    const validation = buttonReply.btn;
    validation.disabled = true;
    let texto = "";
    if (actionBtn == accion_js_1.default.reply) {
        texto = `@${username}, `;
    }
    const divTextarea = (0, contentCommentary_js_1.default)(texto);
    $($contentCommentary).append(aside, divTextarea, buttonReply);
    const txtComent = divTextarea.textArea;
    $(txtComent).on("keyup", () => {
        if ($(txtComent).val == texto || txtComent.value.trim().length <= 10) {
            validation.disabled = true;
        }
        else {
            validation.disabled = false;
        }
    });
    $(buttonReply).on("click", () => {
        const cardReply = (0, createNewComment_js_1.createNewCommentary)(txtComent.value, username, actionBtn, validation, id);
        if (!id == 0) {
            containerCard.replies.append(cardReply);
            $($contentCommentary).addClass("hidden");
        }
    });
    return $contentCommentary;
};
exports.sectionAddComentary = sectionAddComentary;
const addSectionComment = (comentario) => {
    const { user } = comentario;
    let image, username;
    if (user) {
        image = user.image.png;
        username = user.username;
    }
    return (0, exports.sectionAddComentary)(infoLocalStorage_js_1.commentLocal.currentUser.image.png, username);
};
exports.addSectionComment = addSectionComment;
const commentaryReply = (comentario, isReply) => {
    const { id, content, user, createdAt } = comentario;
    const { image, username } = user;
    const replyCommentary = {
        id: id,
        content: content,
        replica: true,
        createdAt,
        score: 0,
        replyingTo: username,
        user: {
            image: {
                png: image.png,
                webp: image.webp,
            },
            username,
        },
        replies: [],
    };
    exports.commentaryReply.id = replyCommentary;
    const renderComment = (0, renderComments_js_1.renderCommentsReply)(replyCommentary, isReply);
    if (isReply)
        return renderComment;
    return (0, renderComments_js_1.renderComments)(replyCommentary);
};
exports.commentaryReply = commentaryReply;
