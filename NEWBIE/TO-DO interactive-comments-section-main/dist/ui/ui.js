"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uiRenderComments = void 0;
const utilities_ui_js_1 = require("../utilities-ui.js");
const uiRenderComments = (card) => {
    const containerCard = (0, utilities_ui_js_1.createElement)("section", "container-card");
    exports.uiRenderComments.containerCard = containerCard;
    const containerCardReplies = (0, utilities_ui_js_1.createElement)("section", "container-replies");
    $("#content-home").append(containerCard);
    $(containerCard).append(card, containerCardReplies);
    exports.uiRenderComments.replies = containerCardReplies;
    containerCard.replies = containerCardReplies;
    return containerCard;
};
exports.uiRenderComments = uiRenderComments;
