
const openCLose = () => {
  const navbar = document.querySelector("nav");
  const openMenu = document.getElementById("menu-button");
  const closeMenu = document.getElementById("menu-close");
  openMenu.addEventListener("click", () => {
    navbar.classList.add("open");
    openMenu.style.display = "none";
    closeMenu.style.display = "flex";
  });

  closeMenu.addEventListener("click", () => {
    navbar.classList.remove("open");
    openMenu.style.display = "flex";
    closeMenu.style.display = "none";
  });
};

openCLose();


const buttonProyect = document.getElementById("button-proyect");
const cardAlert = document.getElementById("card-alert");
const div = document.getElementById("div");
buttonProyect.addEventListener("click", () => {
  cardAlert.style.display = "flex";
  div.classList.add("xd");
});

const btnGotIt = document.getElementById("btn-got-it");

btnGotIt.addEventListener("click", () => {
  cardAlert.style.display = "none ";
  div.style.display = "none";
});

const pbookmark = document.getElementById("p-bookmark");
const btnBookmark = document.getElementById("btn-bookmark");

// document.body.addEventListener("click", () => {
//   pbookmark.textContent = "boomark";
// });

// btnBookmark.addEventListener("click", () => {});

window.addEventListener("click", function (e) {
  if (btnBookmark.contains(e.target)) {
    pbookmark.textContent = "Bookmarked";
    pbookmark.style.color = "var(--Dark-gray)";
    // Clicked in box
  } else {
    pbookmark.textContent = "Bookmark";
    pbookmark.style.color = "#bbb";
    // Clicked outside the box
  }
});
