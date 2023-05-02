import {resultTipAmount, resultTotalAmount} from "./elementosHTML.js";
export const calculateTip = function (intoBill, tipPercentage, numberOfPeople) {
  intoBill = parseFloat(intoBill.value)
  tipPercentage = parseFloat(tipPercentage)
  numberOfPeople = parseInt(numberOfPeople.value);
  let tipAmount = (intoBill * tipPercentage) / numberOfPeople;
  let totalAmount = (intoBill / numberOfPeople) + tipAmount;
  resultTipAmount.textContent = `$${tipAmount.toFixed(2)}`;
  resultTotalAmount.textContent = `$${totalAmount.toFixed(2)}`;
}