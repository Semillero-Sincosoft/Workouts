// //ACA SE VAN A METER TODOS LOS DATOS
const contenedor = document.querySelector(".main");

let header = document.createElement("header");
header.classList.add("header");
let sectionHeader = document.createElement("section");
sectionHeader.classList.add("content");
sectionHeader.classList.add("content");
let articlelogo = document.createElement("article");
let logoHeader = document.createElement("img");
logoHeader.src = "assets/images/logo.svg";
//Este es la lista del header

let nav = document.createElement("nav");
let buttonheader = document.createElement("button");
buttonheader.classList.add("hidden");
buttonheader.setAttribute("id", "menu-close");


let imgMenuClose =document.createElement("img")
imgMenuClose.src="assets/images/icon-menu-close.svg"
let listNav = document.createElement("ul");
listNav.classList.add("ul");
let liHome = document.createElement("li");
liHome.classList.add("li");
let pLiText = document.createElement("p");
let textpHome = document.createTextNode("Home");
//lista new
let liNew = document.createElement("li");
liNew.classList.add("li");
let pLiNew = document.createElement("p");
let textPNew = document.createTextNode("New");
//lista popular
let liPopular = document.createElement("li");
liPopular.classList.add("li");
let pLiPopular = document.createElement("p");
let textPPopular = document.createTextNode("Popular");
//lista de trending
let liTrending = document.createElement("li");
liTrending.classList.add("li");
let pliTrending = document.createElement("p");
let textptrending = document.createTextNode("trending");
//lista categories
let licategories = document.createElement("li");
licategories.classList.add("li");
let plicategories = document.createElement("p");
let textPCategories = document.createTextNode("categories");
//content-description
let sectionDescription = document.createElement("section");
sectionDescription.classList.add("content-description");
let imgDesktop = document.createElement("img");
let imgMobile = document.createElement("img");

let description = document.createElement("section");

imgDesktop.src = "assets/images/image-web-3-desktop.jpg";
imgDesktop.classList.add("desktop");
imgMobile.src = "assets/images/image-web-3-mobile.jpg";
imgMobile.classList.add("mobile");

//acá se colocan los hijos
sectionHeader.appendChild(logoHeader);
articlelogo.appendChild(logoHeader);
header.appendChild(sectionHeader);
//lista home
liHome.appendChild(textpHome);
liHome.appendChild(pLiText);
pLiText.appendChild(textpHome);
listNav.appendChild(liHome);
//lista new
liNew.appendChild(textPNew);
liNew.appendChild(pLiNew);
listNav.appendChild(liNew);
pLiNew.appendChild(textPNew);
//lista popular
liPopular.appendChild(textPPopular);
liPopular.appendChild(pLiPopular);
listNav.appendChild(liPopular);
pLiPopular.appendChild(textPPopular);
// lista trending
liTrending.appendChild(textptrending);
liTrending.appendChild(pliTrending);
pliTrending.appendChild(textptrending);
listNav.appendChild(liTrending);
// lista categories
licategories.appendChild(textPCategories);
licategories.appendChild(plicategories);
plicategories.appendChild(textPCategories);
listNav.appendChild(licategories);

//content-description
sectionDescription.appendChild(imgDesktop);
sectionDescription.appendChild(imgMobile);

nav.appendChild(listNav);
nav.appendChild(buttonheader);

//nodos principales
sectionHeader.appendChild(articlelogo);
sectionHeader.appendChild(nav);
contenedor.appendChild(header);
contenedor.appendChild(sectionDescription);

sectionDescription.appendChild(description);
