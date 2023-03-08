// //ACA SE VAN A METER TODOS LOS DATOS
const contenedor = document.querySelector(".main");

let header = document.createElement("header");
header.classList.add("header");
let sectionHeader = document.createElement("section");
sectionHeader.classList.add("content");
let logoHeader = document.createElement("img");
logoHeader.src = "assets/images/logo.svg";
let nav = document.createElement("nav");
let listNav = document.createElement("ul");
listNav.classList.add("ul");
let liHome = document.createElement("li");
liHome.classList.add("li");
let textLiHome = document.createTextNode("Home");

sectionHeader.appendChild(logoHeader);
header.appendChild(sectionHeader);
liHome.appendChild(textLiHome);
listNav.appendChild(liHome);
nav.appendChild(listNav);
sectionHeader.appendChild(nav);
contenedor.appendChild(header);
