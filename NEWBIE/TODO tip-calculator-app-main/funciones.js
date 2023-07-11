import {
  billTip,
  moneyPerPerson,
  intoBill,
  numberPeople,
  customPercentage,
  tipButtons,
} from "./globalVariable.js";

export const reset = function resetEveryThing() {
  billTip.textContent = "$0.00";
  moneyPerPerson.textContent = "$0.00";

  intoBill.value = "";

  numberPeople.value = "";

  customPercentage.value = "";
};

export function eventButtonTip() {
  tipButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let tipvalue = e.target.innerText.replace("%", "");
      tipvalue = tipvalue / 100;
      valueValidation()

      calculateBill(intoBill, tipvalue, numberPeople);
    });
  });
}

function valueValidation() {
  if (intoBill.value === "") {
    return intoBill;
  } else if (numberPeople.value === "") {
    numberPeople.value = 1;
  }
}


export function eventClickAndValues() {
  customPercentage.addEventListener("keyup", (e) => {
    if (event.keyCode === 13) {
      if (customPercentage.value === "") {
        alert("por favor ingrese valores");
        return;
      } else if (numberPeople.value === "") {
        numberPeople.value = 1;
      }
      let customValue = e.target.value / 100;
      calculateBill(intoBill, customValue, numberPeople);
    }
  });
}

export const calculateBill = function calculateTip(
  intoBill,
  tipPercentage,
  numberPeople
) {
  intoBill = parseFloat(intoBill.value);
  tipPercentage = parseFloat(tipPercentage);
  numberPeople = parseInt(numberPeople.value);

  let tipAmount = (intoBill * tipPercentage) / numberPeople;
  let totalAmount = intoBill / numberPeople + tipAmount;
  billTip.textContent = `$${tipAmount.toFixed(2)}`;
  moneyPerPerson.textContent = `$${totalAmount.toFixed(2)}`;
};
