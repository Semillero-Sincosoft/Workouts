function selectCard(container,input){
  document.getElementById(container).addEventListener("click", function() {
    document.getElementById(input).checked = true;
  });
}
selectCard("card-1","input-card-1")
selectCard("card-2","input-card-2")
selectCard("card-3","input-card-3")

const cardOne = document.getElementById("card-1");
const contentAmountCardOne = document.getElementById("content-amount-card-one");

const cardTwo = document.getElementById("card-2");
const contentAmountCardTwo = document.getElementById("content-amount-card-two");

const cardThree = document.getElementById("card-3")
const contentAmountCardThree = document.getElementById("content-amount-card-three")

cardOne.addEventListener("click",() => {
  contentAmountCardOne.style.display = "flex"
  contentAmountCardTwo.style.display = "none"
  contentAmountCardThree.style.display = "none"
})
cardTwo.addEventListener("click",() =>{
  contentAmountCardOne.style.display = "none"
  contentAmountCardTwo.style.display = "flex"
  contentAmountCardThree.style.display = "none"
})
cardThree.addEventListener("click",() => {
  contentAmountCardOne.style.display = "none"
  contentAmountCardTwo.style.display = "none"
  contentAmountCardThree.style.display = "flex"
})
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
