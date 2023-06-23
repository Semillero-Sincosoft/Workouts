import { createElement, generateId } from "../utilities-ui.js";
import icons from "./svg.js";
import estado from "./estados.js";
export const createVotes = (id, score, comentario) => {
  const contentLikes = createElement("aside");

  const contentButton = createElement("div", "button-likes");

  const iconMinus = createElement("button", "icon-plus");
  iconMinus.innerHTML = icons.minus;
  iconMinus.onclick = () => {
    let scoreActual = document.getElementById("labelScore-" + id).textContent;
    scoreActual = parseInt(scoreActual);
    const nuevoEstado = reduce(scoreActual, estado.positivo);
    incrementVotes(nuevoEstado, id);
    //const newcommentScore = comentario.score = nuevoEstado;
    console.log(newcommentScore);
  };
  contentButton.append(iconMinus);

  const totalVotes = createElement("h2", "score-likes");
  totalVotes.setAttribute("id", "labelScore-" + id);
  totalVotes.textContent = score;
  contentButton.append(totalVotes);

  const reduce = (state, action) => {
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
  iconPLus.innerHTML = icons.plus;
  iconPLus.onclick = () => {
    let scoreActual = document.getElementById("labelScore-" + id).textContent;
    scoreActual = parseInt(scoreActual);
    const nuevoEstado = reduce(scoreActual, estado.negativo);
    incrementVotes(nuevoEstado, id);
  };
  contentButton.append(iconPLus);
  contentLikes.append(contentButton);

  return contentLikes;
};

const incrementVotes = (votos, id) => {
  const totalVotesElement = document.getElementById("labelScore-" + id);

  totalVotesElement.textContent = votos;
};
