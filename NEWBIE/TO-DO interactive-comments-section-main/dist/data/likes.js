"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVotes = void 0;
const utilities_ui_js_1 = require("../utilities-ui.js");
const svg_js_1 = __importDefault(require("./svg.js"));
const state_js_1 = __importDefault(require("./state.js"));
const localStorage_js_1 = __importDefault(require("../module/localStorage.js"));
const createVotes = (id, score) => {
    const contentLikes = (0, utilities_ui_js_1.createElement)("aside");
    const contentButton = (0, utilities_ui_js_1.createElement)("div", "button-likes");
    const iconMinus = (0, utilities_ui_js_1.createElement)("button", "icon-plus");
    $(iconMinus).html(svg_js_1.default.minus);
    $(iconMinus).on("click", () => {
        let scoreActual = $(`#labelScore-${id}`).text();
        scoreActual = parseInt(scoreActual);
        const nuevoEstado = reduce(scoreActual, state_js_1.default.positivo);
        incrementVotes(nuevoEstado, id);
        //const newcommentScore = comentario.score = nuevoEstado;
        // console.log(newcommentScore);
    });
    const totalVotes = (0, utilities_ui_js_1.createElement)("h2", "score-likes");
    $(totalVotes).attr(`id`, `labelScore-${id}`);
    $(totalVotes).text(score);
    contentButton.append(iconMinus, totalVotes);
    const reduce = (state, action) => {
        switch (action) {
            case state_js_1.default.positivo:
                return (state = state + 1);
            case state_js_1.default.negativo:
                if (state > 0) {
                    return (state = state - 1);
                }
            default:
                return state;
        }
    };
    const iconPLus = (0, utilities_ui_js_1.createElement)("button", "icon-minus");
    $(iconPLus).html(svg_js_1.default.plus);
    iconPLus.onclick = () => {
        let scoreActual = $(`#labelScore-${id}`).text();
        scoreActual = parseInt(scoreActual);
        const nuevoEstado = reduce(scoreActual, state_js_1.default.negativo);
        incrementVotes(nuevoEstado, id);
    };
    contentButton.append(iconPLus);
    contentLikes.append(contentButton);
    return contentLikes;
};
exports.createVotes = createVotes;
const incrementVotes = (votos, id) => {
    const idComment = $(`#labelScore-${id}`).parent().parent().parent()[0].id;
    localStorage_js_1.default.update("comentarios", idComment, "score", votos);
    return $(`#labelScore-${id}`).text(votos);
};
