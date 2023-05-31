import { createElement } from "../utilities-ui.js";
import { incrementVotes } from "../functionalities.js";
export const createButtonVotes = (svgIconOne, svgIconTwo, id, score) => {
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
