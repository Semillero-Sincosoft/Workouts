import {
  billTip,
  moneyPerPerson,
  intoBill,
  numberPeople,
  customPercentage,
  tipButtons,
} from "./variablesGlobals.js";

export const reset = function resetEveryThing() {
  billTip.textContent = "$0.00";
  moneyPerPerson.textContent = "$0.00";

  intoBill.value = "";

  numberPeople.value = "";

  customPercentage.value = "";
};

export function pruena() {
  tipButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let tipvalue = e.target.innerText.replace("%", "");

      console.log(tipvalue);
      if (intoBill.value === "") {
        return;
      } else if (numberPeople.value === "") {
        numberPeople.value = 1;
      }

      calculatePrueba(
        parseFloat(intoBill.value),
        parseInt(tipvalue),
        parseInt(numberPeople.value)
      );
    });
  });
}

export const calculatePrueba = function calculateTip(
  inputBill,
  tipPercentage,
  inputPeople
) {
  let tipAmount = (inputBill * (tipPercentage / 100)) / inputPeople;
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);

  let totalAmount = (tipAmount * inputPeople + inputBill) / inputPeople;
  totalAmount = totalAmount.toFixed(2);

  billTip.textContent = `$${tip}`;
  moneyPerPerson.textContent = `$${totalAmount}`;
};
