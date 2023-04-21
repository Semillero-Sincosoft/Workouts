import { button, intoBill,numberOfPeople, customTip, resetButton,resultTipAmount,resultTotalAmount} from "./variables.js";
import { calculateTip} from "./funciones.js";
export const eventButton =  button.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
      let tipValue = e.target.textContent.replace("%", "");
      // let tipValue = e.target.textContent.replace("%",""); re factorizado linea 11
      if (intoBill.value === "") return;
      if (numberOfPeople.value === "") numberOfPeople.value = 1;
  
      calculateTip(
        parseFloat(intoBill.value),
        parseInt(tipValue),
        parseInt(numberOfPeople.value)
      );
    });
  });
  
   customTip.addEventListener("keyup", (e) => {
    if (event.keyCode == 13) {
      if (customTip.value === "") {
        alert("Ingrese valores")
        return;
      } else if (numberOfPeople.value === "") {
        numberOfPeople.value = 1;
      }
      calculateTip(
        parseFloat(intoBill.value),
        parseFloat(e.target.value),
        parseInt(numberOfPeople.value)
      );
    }
  });

  resetButton.addEventListener("click", resetEverything);
function resetEverything() {
  resultTipAmount.textContent = "$0.00";
  resultTotalAmount.textContent = "$0.00";
  intoBill.value = "";
  numberOfPeople.value = "";
  customTip.value = "";
}