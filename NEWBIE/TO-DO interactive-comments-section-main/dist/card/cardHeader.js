"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonAction = exports.createButtonIcon = exports.createUserAvatar = exports.contentInfoUser = void 0;
const utilities_ui_js_1 = require("../utilities-ui.js");
const svg_js_1 = __importDefault(require("../data/svg.js"));
const infoLocalStorage_js_1 = require("../module/infoLocalStorage.js");
const contentInfoUser = (createdAt, user) => {
    const header = (0, utilities_ui_js_1.createElement)("article", "content-title-card");
    const avatar = (0, exports.createUserAvatar)(user);
    const dateRegister = (0, utilities_ui_js_1.createText)(createdAt);
    $(avatar).append(dateRegister);
    $(header).append(avatar);
    return header;
};
exports.contentInfoUser = contentInfoUser;
const createUserAvatar = (user) => {
    const contentUser = (0, utilities_ui_js_1.createElement)("div", "content-user");
    const photoUser = (0, utilities_ui_js_1.createElement)("img");
    photoUser.src = user.image.png;
    $(contentUser).append(photoUser);
    const nameUser = (0, utilities_ui_js_1.createElement)("h2");
    $(nameUser).text(user.username);
    $(contentUser).append(nameUser);
    return contentUser;
};
exports.createUserAvatar = createUserAvatar;
const createButtonIcon = (svg, text) => {
    const contentReply = (0, utilities_ui_js_1.createElement)("div", "content-button-icon");
    const iconReply = (0, utilities_ui_js_1.createElement)("button", "icon-button");
    iconReply.innerHTML = svg + text;
    $(contentReply).append(iconReply);
    contentReply.iconReply = iconReply;
    return contentReply;
};
exports.createButtonIcon = createButtonIcon;
//pasarala a utilidad  y en cardBody body pasarlar "utilizarla"
const buttonAction = (username) => {
    let iconReply, btnRenderizar;
    iconReply = (0, exports.createButtonIcon)(svg_js_1.default.reply, "Reply");
    btnRenderizar = iconReply;
    const contentIcons = (0, utilities_ui_js_1.createElement)("div", "content-icons");
    const iconDelete = (0, exports.createButtonIcon)(svg_js_1.default.delete, "DELETE");
    const iconEdit = (0, exports.createButtonIcon)(svg_js_1.default.edit, "EDIT");
    $(contentIcons).append(iconDelete, iconEdit);
    if (infoLocalStorage_js_1.commentLocal.currentUser.username == username) {
        btnRenderizar = contentIcons;
    }
    btnRenderizar.reply = iconReply;
    btnRenderizar.delete = iconDelete;
    btnRenderizar.edit = iconEdit;
    btnRenderizar.contentIcons = contentIcons;
    return btnRenderizar;
};
exports.buttonAction = buttonAction;
