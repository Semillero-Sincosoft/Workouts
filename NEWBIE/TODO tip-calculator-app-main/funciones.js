import {resultTipAmount, resultTotalAmount} from "./variables.js";
export const calculateTip = function (intoBill, tipPercentage, numberOfPeople) {
  let tipAmount = (intoBill * (tipPercentage / 100)) / numberOfPeople;
  let totalAmount = (intoBill / numberOfPeople) + tipAmount;
  resultTipAmount.textContent = `$${tipAmount.toFixed(2)}`;
  resultTotalAmount.textContent = `$${totalAmount.toFixed(2)}`;
}