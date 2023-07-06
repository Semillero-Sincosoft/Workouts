"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const renderComments_js_1 = require("./renderComments.js");
const infoLocalStorage_js_1 = require("./module/infoLocalStorage.js");
const youProfile_js_1 = require("./youProfile.js");
const DeleteComment_js_1 = require("./funcionality/DeleteComment.js");
infoLocalStorage_js_1.commentLocal.comments.map((comentario) => (0, renderComments_js_1.renderComments)(comentario));
(0, youProfile_js_1.showMyProfile)();
(0, DeleteComment_js_1.deleteCommentary)();
