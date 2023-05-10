const navbar = document.querySelector("nav");
const openMenu = document.getElementById("menu-button");
const closeMenu = document.getElementById("menu-close");
const prueba = document.getElementById("");

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
