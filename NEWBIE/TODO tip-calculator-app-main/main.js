const intoBill = document.getElementById("invoice");
const button = document.querySelectorAll(".content-options-tips button");
const numberOfPeople = document.getElementById("num-people");
const customTip = document.getElementById("custom");
const resultTipAmount = document.getElementById("result-tip");
const resultTotalAmount = document.getElementById("result-total");
const resetButton = document.getElementById("reset-all");
//Calculate Tip When Click On Tip Percentage Button
intoBill.toLocaleString('es-CO', {style: 'currency', currency : 'COP', minimumFractionDigits:0});
button.forEach((buttons) => {
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
//Calculate Tip When User Give Custom Tip Percentage Input
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
function calculateTip(intoBill, tipPercentage, numberOfPeople) {
  let tipAmount = (intoBill * (tipPercentage / 100)) / numberOfPeople;
  tipAmount = tipAmount.toFixed(2);

  let totalAmount = (tipAmount * numberOfPeople + intoBill) / numberOfPeople;
  totalAmount = totalAmount.toFixed(2);

  resultTipAmount.textContent = `$${tipAmount}`;
  resultTotalAmount.textContent = `$${totalAmount}`;
}
//reset
resetButton.addEventListener("click", resetEverything);
function resetEverything() {
  resultTipAmount.textContent = "$0.00";
  resultTotalAmount.textContent = "$0.00";
  intoBill.value = "";
  numberOfPeople.value = "";
  customTip.value = "";
}