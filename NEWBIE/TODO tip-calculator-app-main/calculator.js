function divideNumbers() {
  const inputBill = document.getElementById("values").value;
  const custom = document.getElementById("add-percentage").value;
  const prices = document.getElementById("result-prices");

  prices.innerText = "$" + inputBill * (custom / 100);

  return prices;
}

divideNumbers();
