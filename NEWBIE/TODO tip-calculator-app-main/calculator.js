const inputBill = document.getElementById("bill");

const inputCustom = document.getElementById("custom");

const buttons = document.querySelectorAll(".content-buttons button");

const inputPeople = document.getElementById("people");

const pBillAmount = document.getElementById("tip-amount");

const resetButtons = document.getElementById("reset-button");

const pPersonTotal = document.getElementById("total");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let tipvalue = e.target.innerText;
    tipvalue = tipvalue.substr(0, tipvalue.length - 1);

    console.log(tipvalue);
    if (inputBill.value === "") {
      return;
    } else if (inputPeople.value === "") {
      inputPeople.value = 1;
    }

    calculateTip(
      parseFloat(inputBill.value),
      parseInt(tipvalue),
      parseInt(inputPeople.value)
    );
  });
});

inputCustom.addEventListener("keyup", (e) => {
  if (event.keyCode === 13) {
    if (inputBill.value === "") {
      resetEveryThing();
      return;
    } else if (inputPeople.value === "") {
      inputPeople.value = 1;
    }

    calculateTip(
      parseFloat(inputBill.value),
      parseFloat(e.target.value),
      parseInt(inputPeople.value)
    );
  }
});

function calculateTip(inputBill, tipPercentage, inputPeople) {
  let tipAmount = (inputBill * (tipPercentage / 100)) / inputPeople;
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);

  let totalAmount = (tipAmount * inputPeople + inputBill) / inputPeople;
  totalAmount = totalAmount.toFixed(2);

  pBillAmount.textContent = `$${tip}`;
  pPersonTotal.textContent = `$${totalAmount}`;
}

resetButtons.addEventListener("click", resetEveryThing);

function resetEveryThing() {
  pBillAmount.textContent = "$0.00";
  pPersonTotal.textContent = "$0.00";

  inputBill.value = "";

  inputPeople.value = "";

  inputCustom.value = "";
}
