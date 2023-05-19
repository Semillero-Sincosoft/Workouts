const valueCard1 = document.getElementById("value-card-1");
const buttonValueCard1 = document.getElementById("button-value-card-1");
const valueCard2 = document.getElementById("value-card-2");
const buttonValueCard2 = document.getElementById("button-value-card-2");
const valueCard3 = document.getElementById("value-card-3")
const buttonValueCard3 = document.getElementById("button-value-card-3")


  valueCard1.addEventListener("keyup", (e) => {
    if(event.keyCode == 13){
      if(valueCard1.value > 0 ){
        buttonValueCard1.removeAttribute("disabled")
        buttonValueCard1.classList.remove("button-value-disabled");
        buttonValueCard1.classList.add("button-value") 
      }else{
        valueCard1.style.border = "solid red 1px"
      }
    }
  })

  valueCard2.addEventListener("keyup", (e) => {
    if(event.keyCode == 13){
      if(valueCard2.value >= 25 ){
        buttonValueCard2.removeAttribute("disabled")
        buttonValueCard2.classList.remove("button-value-disabled");
        buttonValueCard2.classList.add("button-value") 
      }else{
        valueCard2.style.border = "solid red 1px"
      }
    }
  })

  valueCard3.addEventListener("keyup", (e) => {
    if(event.keyCode == 13){
      if(valueCard3.value >= 75 ){
        buttonValueCard3.removeAttribute("disabled")
        buttonValueCard3.classList.remove("button-value-disabled");
        buttonValueCard3.classList.add("button-value") 
      }
      else{
        valueCard3.style.border = "solid red 1px"
      }
    }
  })

// valueCard1.addEventListener("keyup", (e) => {
//   if(event.keyCode == 13){
//     if(valueCard1.value >= 25 ){
//       buttonValueCard1.removeAttribute("disabled")
//       buttonValueCard1.classList.remove("button-value-disabled");
//       buttonValueCard1.classList.add("button-value") 
//     }
//   }
// })




function selectCard(container, input) {
  document.getElementById(container).addEventListener("click", function () {
    document.getElementById(input).checked = true;
  });
}
selectCard("card-1", "input-card-1");
selectCard("card-2", "input-card-2");
selectCard("card-3", "input-card-3");

const cardOne = document.getElementById("card-1");
const contentAmountCardOne = document.getElementById("content-amount-card-one");
const cardTwo = document.getElementById("card-2");
const contentAmountCardTwo = document.getElementById("content-amount-card-two");
const cardThree = document.getElementById("card-3");
const contentAmountCardThree = document.getElementById(
  "content-amount-card-three"
);

function addCardClickListener(card, contentAmount) {
  card.addEventListener("click", () => {
    contentAmountCardOne.style.display = "none";
    contentAmountCardTwo.style.display = "none";
    contentAmountCardThree.style.display = "none";
    contentAmount.style.display = "flex";
  });
}
addCardClickListener(cardOne, contentAmountCardOne);
addCardClickListener(cardTwo, contentAmountCardTwo);
addCardClickListener(cardThree, contentAmountCardThree);

function mark() {
  const button = document.getElementById("button-bookmark");
  const textButton = document.getElementById("text-bookmark");

  if (button.classList.contains("active")) {
    button.classList.remove("active");
    textButton.textContent = "Bookmark";
    textButton.style.color = "var(--Dark-gray)";
  } else {
    textButton.textContent = "Bookmarked";
    textButton.style.color = "var(--Moderate-cyan)";
    button.classList.add("active");
  }
}

const botonPrueba = document.getElementById("button-bookmark");
const textoPrueba = document.getElementById("text-bookmark");

botonPrueba.addEventListener("click", function () {
  const botonSeleccionadoPrueba = localStorage.getItem("botonSeleccionado");
  if (botonSeleccionadoPrueba === "true") {
    localStorage.setItem("botonSeleccionado", "false");
    botonPrueba.classList.remove("active");
    textoPrueba.textContent = "Bookmark";
  } else {
    localStorage.setItem("botonSeleccionado", "true");
    botonPrueba.classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const botonSeleccionado = localStorage.getItem("botonSeleccionado");
  if (botonSeleccionado === "true") {
    botonPrueba.classList.add("active");
    textoPrueba.textContent = "Bookmarked";
    textoPrueba.style.color = "var(--Moderate-cyan)";
  }
});

const nav = {
  element: document.getElementById("nav-content"),
  iconOpen: document.getElementById("open"),
  iconClose: document.getElementById("close"),
  firstCard: document.getElementById("content-amount-card-one"),
  secondCard: document.getElementById("content-amount-card-two"),
  thirdCard: document.getElementById("content-amount-card-three"),
  show: function () {
    this.element.classList.remove("oculto");
    this.iconOpen.classList.add("oculto");
    this.iconClose.classList.remove("oculto");
  },
  hidden: function () {
    this.firstCard.removeAttribute("display");
    this.element.classList.add("oculto");
    this.iconOpen.classList.remove("oculto");
    this.iconClose.classList.add("oculto");
  },
};
const dialog = {
  elemento: document.getElementById("dialog-support"),
  mostrar: function () {
    this.elemento.classList.remove("oculto");
  },
  ocultar: function () {
    this.elemento.classList.add("oculto");
  },
};
