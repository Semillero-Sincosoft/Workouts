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

export function eventButton() {
  tipButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let tipvalue = e.target.innerText.replace("%", "");

      console.log(tipvalue);
      if (intoBill.value === "") {
        return;
      } else if (numberPeople.value === "") {
        numberPeople.value = 1;
      }

      calculateBill(
        parseFloat(intoBill.value),
        parseInt(tipvalue),
        parseInt(numberPeople.value)
      );
    });
  });
}

export const calculateBill = function calculateTip(
  intoBill,
  tipPercentage,
  numberPeople
) {
  let tipAmount = (intoBill * (tipPercentage / 100)) / numberPeople;

  let totalAmount = intoBill / numberPeople + tipAmount;

  billTip.textContent = `$${tipAmount.toFixed(2)}`;
  moneyPerPerson.textContent = `$${totalAmount.toFixed(2)}`;
};

function esPar() {}
