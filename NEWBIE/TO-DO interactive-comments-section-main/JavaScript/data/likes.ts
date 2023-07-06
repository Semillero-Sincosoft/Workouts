import { createElement } from "../utilities-ui.js";
import icons from "./svg.js";
import estado from "./state.js";
import local from "../module/localStorage.js";
export const createVotes = (id: number, score: string) => {
  const contentLikes = createElement("aside");

  const contentButton = createElement("div", "button-likes");

  const iconMinus = createElement("button", "icon-plus");
  $(iconMinus).html(icons.minus);
  $(iconMinus).on("click", () => {
    let scoreActual: string | number = $(`#labelScore-${id}`).text();
    scoreActual = parseInt(scoreActual);
    const nuevoEstado = reduce(scoreActual, estado.positivo);
    incrementVotes(nuevoEstado, id);
  });

  const totalVotes = createElement("h2", "score-likes");
  $(totalVotes).attr(`id`, `labelScore-${id}`);
  $(totalVotes).text(score);
  contentButton.append(iconMinus, totalVotes);

  const reduce = (state: number, action:string) => {
    switch (action) {
      case estado.positivo:
        return (state = state + 1);

      case estado.negativo:
        if (state > 0) {
          return (state = state - 1);
        }
      default:
        return state;
    }
  };

  const iconPLus = createElement("button", "icon-minus");
  $(iconPLus).html(icons.plus);
  iconPLus.onclick = () => {
    let scoreActual: string | number = $(`#labelScore-${id}`).text();
    scoreActual = parseInt(scoreActual);
    const nuevoEstado = reduce(scoreActual, estado.negativo);
    incrementVotes(nuevoEstado, id);
  };
  contentButton.append(iconPLus);
  contentLikes.append(contentButton);

  return contentLikes;
};

const incrementVotes = (votos: number, id: number) => {
  const idComment = $(`#labelScore-${id}`).parent().parent().parent()[0].id;
  local.update("comentarios", idComment, "score", votos);
  return $(`#labelScore-${id}`).text(votos);
};
