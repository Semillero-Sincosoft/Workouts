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
    textoPrueba.style.color = "var(--Moderate-cyan)"
  }
});


const nav = {
  element: document.getElementById("nav-content"),
  iconOpen: document.getElementById("open"),
  iconClose: document.getElementById("close"),
  show: function () {
    this.element.classList.remove("oculto");
    this.iconOpen.classList.add("oculto");
    this.iconClose.classList.remove("oculto");
  },
  hidden: function () {
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
