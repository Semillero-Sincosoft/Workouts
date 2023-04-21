import {
  pBillAmount,
  pPersonTotal,
  inputBill,
  inputPeople,
  inputCustom,
} from "./variablesGlobals.js";

export const reset = function resetEveryThing() {
  pBillAmount.textContent = "$0.00";
  pPersonTotal.textContent = "$0.00";

  inputBill.value = "";

  inputPeople.value = "";

  inputCustom.value = "";
};
