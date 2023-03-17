const navbar = document.querySelector("nav");

const mostrarMenu = () => {
  navbar.classList.add("open");
};

const ocultarMenu = function () {
  navbar.classList.remove("open");
};

const openMenu = document.getElementById("menu-button");
openMenu.addEventListener("click", mostrarMenu);

const closeMenu = document.getElementById("menu-close");
closeMenu.addEventListener("click", ocultarMenu);
