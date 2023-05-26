import { createElement } from "../utilities-ui.js";
import icons from "./svgs.js";

export const createButtonVotes = (id, score) => {
  const button = createElement("div", "button-likes");

  const totalVotes = createElement("h2", "score-likes");
  totalVotes.setAttribute("id", "button-" + id);
  totalVotes.textContent = score;

  const iconPlus = createElement("div", "icon-plus");
  iconPlus.innerHTML = icons.minus;
  iconPlus.onclick = () => {
    totalVotes.textContent = score++;
  };
  button.append(iconPlus);

  button.append(totalVotes);

  const iconMinus = createElement("div", "icon-minus");
  iconMinus.innerHTML = icons.plus;
  iconMinus.onclick = () => {
    score = score - 1 < 0 ? 0 : score - 1;
    totalVotes.textContent = score;
  };
  button.append(iconMinus);

  return button;
};
