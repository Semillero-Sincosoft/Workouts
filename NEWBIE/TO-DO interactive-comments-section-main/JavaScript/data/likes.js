import { createElement } from "../utilities-ui.js";
export const createVotes = (svgIconOne, svgIconTwo, id, score) => {
  const button = createElement("div", "button-likes");

  const iconPlus = createElement("button", "icon-plus");
  iconPlus.innerHTML = svgIconOne;
  iconPlus.onclick = () => {
    incrementVotes(true, id);
  };
  button.append(iconPlus);

  const totalVotes = createElement("h2", "score-likes");
  totalVotes.setAttribute("id", "button-" + id);
  totalVotes.textContent = score;
  button.append(totalVotes);

  const iconMinus = createElement("button", "icon-minus");
  iconMinus.innerHTML = svgIconTwo;
  iconMinus.onclick = () => {
    incrementVotes(false, id);
  };
  button.append(iconMinus);

  return button;
};

const incrementVotes = (estado, id) => {
  const totalVotesElement = document.getElementById("button-" + id);
  let contadorVotos = parseInt(totalVotesElement.textContent);
  totalVotesElement.style.userSelect = "none";
  if (estado == true) {
    contadorVotos++;
  } else {
    contadorVotos--;
  }
  if (contadorVotos < 0) {
    contadorVotos = 0;
  }
  totalVotesElement.textContent = contadorVotos;
};
