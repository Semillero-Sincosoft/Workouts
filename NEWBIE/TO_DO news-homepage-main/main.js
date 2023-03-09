// //ACA SE VAN A METER TODOS LOS DATOS
const contenedor = document.querySelector(".body");
const containerMain = document.createElement('main');
containerMain.classList.add('main', 'contenedor')


let header = document.createElement("header");
header.classList.add("header");
let sectionHeader = document.createElement("section");
sectionHeader.classList.add("content");
let articlelogo = document.createElement("article");
let logoHeader = document.createElement("img");
logoHeader.src = "assets/images/logo.svg";
let imgMenuClose = document.createElement("img");
imgMenuClose.src = "assets/images/icon-menu-close.svg";

//viene el nev y boton open
let nav = document.createElement("nav");
let buttonheader = document.createElement("button");
buttonheader.classList.add("hidden");
buttonheader.setAttribute("id", "menu-close");
//boton del menu responsive

let divMenu = document.createElement("div");
divMenu.classList.add("menu-button", "hidden");
let buttonMenuHeader = document.createElement("button");
buttonMenuHeader.setAttribute("id", "menu-button");


//menu cierre
//Este es la lista del header

let imgMenu = document.createElement("img");
imgMenu.src = "assets/images/icon-menu.svg";



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
description.classList.add("description");
imgDesktop.src = "assets/images/image-web-3-desktop.jpg";
imgDesktop.classList.add("desktop");
imgMobile.src = "assets/images/image-web-3-mobile.jpg";
imgMobile.classList.add("mobile");
//creacion del del section info
let sectionInfo = document.createElement("section");
sectionInfo.classList.add("info");
let articleTitle = document.createElement("article");
//titulo descripcion grande
let h1TitleDescription = document.createElement("h1");
articleTitle.classList.add("title");
h1TitleDescription.textContent = "The Bright Future of Web 3.0?";
//creacion de el otro article
let articleWritten = document.createElement("article");
articleWritten.classList.add("written");
let pWritten = document.createElement("p");
pWritten.textContent =
  " We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?";
//coloco el boton
let buttonDescription = document.createElement("button");
buttonDescription.classList.add("info-read");
buttonDescription.textContent = "READ MORE";
//creacion de nueva section"section new"
let contentNew = document.createElement("section");
contentNew.classList.add("content-new");
let h2New = document.createElement("h2");
h2New.textContent = "New";
//aca estan los div del content
let divNew = document.createElement("div");
divNew.classList.add("new");
let h3NewSubtitle = document.createElement("h3");
h3NewSubtitle.classList.add("new-txt");
h3NewSubtitle.textContent = "Hydrogen VS Electric Cars";
let pNew = document.createElement("p");
pNew.textContent = "Will hydrogen-fueled cars ever catch up to EVs?";
let hrLinea = document.createElement("hr");

let divNew2 = document.createElement("div");
divNew2.classList.add("new");
let h3NewSubtitle2 = document.createElement("h3");
h3NewSubtitle2.classList.add("new-txt");
h3NewSubtitle2.textContent = "The Downsides of AI Artistry";
let pNew2 = document.createElement("p");
pNew2.textContent =
  "What are the possible adverse effects of on-demand AI image generation?";
let hrLinea2 = document.createElement("hr");

let divNew3 = document.createElement("div");
divNew3.classList.add("new");
let h3NewSubtitle3 = document.createElement("h3");
h3NewSubtitle3.classList.add("new-txt");
h3NewSubtitle3.textContent = "Is VC Funding Drying Up?";
let pNew3 = document.createElement("p");
pNew3.textContent =
  "Private funding by VC firms is down 50% YOY. We take a look a what that means.";
//-----------footer----------
let footer = document.createElement("footer");
let sectionFooter = document.createElement("section");
sectionFooter.classList.add("cards");
let articleImgFooter = document.createElement("article");
articleImgFooter.classList.add("content-img");
let imgFooter = document.createElement("img");
imgFooter.src = "assets/images/image-retro-pcs.jpg";
let articleCard1 = document.createElement("article");
articleCard1.classList.add("card-1");
let h2Footer = document.createElement("h2");
h2Footer.textContent = "01";
let pFooterSubtitle = document.createElement("p");
pFooterSubtitle.classList.add("subtitle");
pFooterSubtitle.textContent = "Reviving Retro PCs";
let pFooter = document.createElement("p");
pFooter.textContent = "What happens when old PCs are given modern upgrades?";

let sectionFooter2 = document.createElement("section");
sectionFooter2.classList.add("cards");
let articleImgFooter2 = document.createElement("article");
articleImgFooter2.classList.add("content-img");
let imgFooter2 = document.createElement("img");
imgFooter2.src = "assets/images/image-top-laptops.jpg";
let articleCard2 = document.createElement("article");
articleCard2.classList.add("card-2");
let h2Footer2 = document.createElement("h2");
h2Footer2.textContent = "02";
let pFooterSubtitle2 = document.createElement("p");
pFooterSubtitle2.classList.add("subtitle");
pFooterSubtitle2.textContent = "Top 10 Laptops of 2022";
let pFooter2 = document.createElement("p");
pFooter2.textContent = "Our best picks for various needs and budgets.";

let sectionFooter3 = document.createElement("section");
sectionFooter3.classList.add("cards");
let articleImgFooter3 = document.createElement("article");
articleImgFooter3.classList.add("content-img");
let imgFooter3 = document.createElement("img");
imgFooter3.src = "assets/images/image-gaming-growth.jpg";
let articleCard3 = document.createElement("article");
articleCard3.classList.add("card-3");
let h2Footer3 = document.createElement("h2");
h2Footer3.textContent = "03";
let pFooterSubtitle3 = document.createElement("p");
pFooterSubtitle3.classList.add("subtitle");
pFooterSubtitle3.textContent = "The Growth of Gaming";
let pFooter3 = document.createElement("p");
pFooter3.textContent = "How the pandemic has sparked fresh opportunities.";

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

//agregacion de boton de menu
divMenu.appendChild(buttonMenuHeader);
buttonMenuHeader.appendChild(imgMenu);



//content-description
description.appendChild(imgDesktop);
description.appendChild(imgMobile);
nav.appendChild(buttonheader);
buttonheader.appendChild(imgMenuClose)
nav.appendChild(listNav);
//aca se encuentra el containerMain de descripcion y sus hijos
sectionDescription.appendChild(description);
description.appendChild(sectionInfo);
//aca se coloca el titulo
sectionInfo.appendChild(articleTitle);
articleTitle.appendChild(h1TitleDescription);
//se agrega article written
sectionInfo.appendChild(articleWritten);
articleWritten.appendChild(pWritten);
//aca va el boton de la descripcion
articleWritten.appendChild(buttonDescription);
//creacion de nueva section"content new"
sectionDescription.appendChild(contentNew);
contentNew.appendChild(h2New);
//agrego un nuevo div
contentNew.appendChild(divNew);
divNew.appendChild(h3NewSubtitle);
divNew.appendChild(pNew);
divNew.appendChild(hrLinea);
//
contentNew.appendChild(divNew2);
divNew2.appendChild(h3NewSubtitle2);
divNew2.appendChild(pNew2);
divNew2.appendChild(hrLinea2);
//
contentNew.appendChild(divNew3);
divNew3.appendChild(h3NewSubtitle3);
divNew3.appendChild(pNew3);

footer.appendChild(sectionFooter);
sectionFooter.appendChild(articleImgFooter);
articleImgFooter.appendChild(imgFooter);
sectionFooter.appendChild(articleCard1);
articleCard1.appendChild(h2Footer);
articleCard1.appendChild(pFooterSubtitle);
articleCard1.appendChild(pFooter);

footer.appendChild(sectionFooter2);
sectionFooter2.appendChild(articleImgFooter2);
articleImgFooter2.appendChild(imgFooter2);
sectionFooter2.appendChild(articleCard2);
articleCard2.appendChild(h2Footer2);
articleCard2.appendChild(pFooterSubtitle2);
articleCard2.appendChild(pFooter2);

footer.appendChild(sectionFooter3);
sectionFooter3.appendChild(articleImgFooter3);
articleImgFooter3.appendChild(imgFooter3);
sectionFooter3.appendChild(articleCard3);
articleCard3.appendChild(h2Footer3);
articleCard3.appendChild(pFooterSubtitle3);
articleCard3.appendChild(pFooter3);

//nodos principales
sectionHeader.appendChild(articlelogo);
sectionHeader.appendChild(nav);
sectionHeader.appendChild(divMenu);
contenedor.appendChild(containerMain)
containerMain.appendChild(header);
containerMain.appendChild(sectionDescription);
containerMain.appendChild(footer);
