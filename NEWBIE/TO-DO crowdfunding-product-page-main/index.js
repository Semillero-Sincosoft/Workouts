const openCLose = () => {
  const navbar = document.querySelector("nav");
  navbar.classList.toggle("open");
  const imgMenu = document.getElementById("img-menu");
  if (navbar.classList.contains("open")) {
    imgMenu.src = "images/icon-close-menu.svg";
  } else {
    imgMenu.src = "images/icon-hamburger.svg";
  }
};
function toggleCard(open) {
  const cardAlert = document.getElementById("card-alert");
  const modal = document.getElementById("modal");
  modal.classList.toggle("modal");
  if (open == true) {
    cardAlert.style.display = "flex";
  } else {
    cardAlert.style.display = "none";
  }
}

function addToFavorites() {
  const btnBookmark = document.getElementById("btn-bookmark");
  const textBookmark = document.getElementById("p-bookmark");

  //si tiene clase active quítesela

  // está preguntando si btn tiene la clase active
  if (btnBookmark.classList.contains("active")) {
    //si tiene la clase
    //cambiar el texto a booked
    btnBookmark.classList.remove("active");
    textBookmark.textContent = "Bookmark";
  } else {
    //no tiene la clase
    //cambia el texto a book
    textBookmark.textContent = "Bookmarked";
    btnBookmark.classList.add("active");
  }
}

function openCloseCard() {
  const closeCard = document.querySelectorAll(".btn-card");
  const containerSales = document.getElementById("container-sales");
  closeCard.classList.remove("prueba");
  if (closeCard.classList.contains("prueba")) {
    containerSales.style.opacity = "1";
  } else {
    closeCard.classList.add("prueba");
    containerSales.style.opacity = "0";
  }
}
openCloseCard()
