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

function prendidoApagado(ids, open) {
  const modal = document.getElementById("modal");
  modal.classList.toggle("encendido");
  if (open == true) {
    modal.classList.add("encendido");
  } else {
    modal.classList.remove("apagado");
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

function checked(idsArticle, idInput) {
  document.getElementById(idsArticle).addEventListener("click", () => {
    document.getElementById(idInput).checked = true;
  });
}
const bamboo = checked("articleBamboo", "BambooStand");
const black = checked("articleBlack", "Black-edition");
const sponsor = checked("articleReward", "subtitle-reward");

function prendidoApagado2() {
  const articleReward = document.getElementById("articleReward");
  const articleBamboo  = document.getElementById("articleBamboo");
  const contentPrices = document.getElementById("content-prices");

  articleReward.addEventListener('click', ()=>{
    contentPrices.style.display = "flex" 
  })
  articleBamboo.addEventListener('click', ()=>{
    contentPrices.style.display = "none";
    articleBamboo.style.border = "1px solid green ";
  })

}
prendidoApagado2()