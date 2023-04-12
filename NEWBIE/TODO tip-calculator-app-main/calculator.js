const containerButtons = document.querySelector(".content-buttons");
const input = document.createElement("input");

const prices = document.getElementById("result-prices");

const createButton = (classes, text, porci) => {
  button = document.createElement("button");
  button.classList.add(classes);
  button.innerText = text;
  button.value = porci;
  containerButtons.append(button);
  containerButtons.append(input);
  return button;
};

const button1 = createButton("buttons", "5%", 0.05);
const button2 = createButton("buttons", "10%", 0.1);
const button3 = createButton("buttons", "15%", 0.15);
const button4 = createButton("buttons", "25%", 0.25);
const button5 = createButton("buttons", "50%", 0.5);

const prueba = document.querySelectorAll("buttons").value;

input.classList.add("custom");
input.id = "add-percentage";
input.type = "number";
input.placeholder = "Custom";
const numero = input.value

const custom = document.getElementById("add-percentage");

prices.textContent = "$" + numero * custom;

prices.textContent = "$" + numero * button1;

const p = (argumento1, argumento2)=>{



}
// const arrayButton = [5, 10, 15, 25, 50];

// function divideNumbers() {
//   const inputBill = document.getElementById("values").value;
//   const custom = document.getElementById("add-percentage").value;
//   const prices = document.getElementById("result-prices");

//   prices.innerText = "$" + inputBill * (custom / 100);
//   return prices;
// }

// // arrayButton.map((el) => {
// //   const createButton = document.createElement("button");
// //   createButton.classList.add("buttons");
// //   createButton.innerText = el + "%";
// //   const prueba = el / 100;
// //   createButton.value = prueba;
// //   createButton.value = prueba;
// //   containerButtons.append(createButton);

// // });
// // prices.innerText = "$" + inputBill * (5 / 100);
