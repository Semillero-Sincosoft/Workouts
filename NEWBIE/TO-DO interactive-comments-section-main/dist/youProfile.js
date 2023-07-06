"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMyProfile = void 0;
const commentary_js_1 = require("./card/commentary.js");
const accion_js_1 = __importDefault(require("./data/accion.js"));
const infoLocalStorage_js_1 = require("./module/infoLocalStorage.js");
const showMyProfile = () => {
    const myProfile = $("#content-prueba");
    const comment = {
        id: 0,
    };
    const youProfile = (0, commentary_js_1.sectionAddComentary)(infoLocalStorage_js_1.commentLocal.currentUser.image.png, infoLocalStorage_js_1.commentLocal.currentUser.username, accion_js_1.default.send, comment);
    myProfile.append(youProfile);
};
exports.showMyProfile = showMyProfile;
