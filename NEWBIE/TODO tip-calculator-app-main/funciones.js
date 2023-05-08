import {
  button,
  intoBill,
  numberOfPeople,
  customTip,
  resetButton,
  resultTipAmount,
  resultTotalAmount,
} from "./elementosHTML.js";
import { calculateTip } from "./operaciones.js";
export const eventButton = button.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    let tipValue = e.target.textContent.replace("%", "");
    tipValue = tipValue / 100;
    if (intoBill === "") {
      return;
    }
    if (numberOfPeople.value === "") {
      numberOfPeople.value = 1;
    }

    calculateTip(intoBill, tipValue, numberOfPeople);
  });
});

customTip.addEventListener("keyup", (e) => {
  if (event.keyCode == 13) {
    if (customTip.value === "") {
      customTip.classList.add("event-error")
      customTip.setAttribute("placeholder", "error %")
      return;
    }
    if (numberOfPeople.value === "") {
      numberOfPeople.value = 1;
    }
    let tipCustomValue = e.target.value / 100
    calculateTip(intoBill, tipCustomValue, numberOfPeople);
  }
});

resetButton.addEventListener("click", resetEverything);
function resetEverything() {
  resultTipAmount.textContent = "$0.00";
  resultTotalAmount.textContent = "$0.00";
  intoBill.value = "";
  numberOfPeople.value = "";
  customTip.value = "";
  customTip.classList.remove("event-error")
  customTip.setAttribute("placeholder", "Custom")
}
