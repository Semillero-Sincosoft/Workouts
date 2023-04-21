import {resultTipAmount, resultTotalAmount} from "./variables.js";
export const calculateTip = function (intoBill, tipPercentage, numberOfPeople) {
  let tipAmount = (intoBill * (tipPercentage / 100)) / numberOfPeople;
  tipAmount = tipAmount.toFixed(2);

  let totalAmount = (tipAmount * numberOfPeople + intoBill) / numberOfPeople;
  totalAmount = totalAmount.toFixed(2);

  resultTipAmount.textContent = `$${tipAmount}`;
  resultTotalAmount.textContent = `$${totalAmount}`;
}