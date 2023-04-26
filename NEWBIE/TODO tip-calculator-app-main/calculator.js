import {
  customPercentage,
  resetButton,
  intoBill,
  numberPeople,
} from "./variablesGlobals.js";

import { eventButton, calculateBill, reset } from "./funciones.js";

eventButton();

customPercentage.addEventListener("keyup", (e) => {
  if (event.keyCode === 13) {
    if (customPercentage.value === "") {
      alert("por favor ingrese valores");
      return;
    } else if (numberPeople.value === "") {
      numberPeople.value = 1;
    }

    calculateBill(
      parseFloat(intoBill.value),
      parseFloat(e.target.value),
      parseInt(numberPeople.value)
    );
  }
});

reset();
resetButton.addEventListener("click", reset);
