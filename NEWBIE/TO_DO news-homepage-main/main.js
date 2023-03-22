const contenedor = document.querySelector(".body");

//*********************************************************** FUNCIÓN PARA CREAR ELEMENTOS HTML*/
//FN_CE
//CREAR UNA FUNCIÓN QUE RECIBA EL TIPO DE ELEMENTO QUE VA A CREAR Y LA CLASE, LA FUNCIÓN RETORNA EL ELEMENTO CREADO
// (tipo, clase) => HTMLElement
// const main = crearEtiqueta("main", "main contenedor");
const containerMain = document.createElement("main");
containerMain.classList.add("main", "contenedor");

const header = document.createElement("header");
header.classList.add("header");

const sectionHeader = document.createElement("section");
sectionHeader.classList.add("content");

// const articleLogo = crearEtiqueta("article"); que la función no se estalle si no le llega la clase
const articlelogo = document.createElement("article");

//*********************************************************** FUNCIÓN PARA CREAR IMG*/
//CREAR UNA FUNCIÓN QUE RECIBA LA URL DE UNA IMAGEN Y RETORNE UN ELEMENTO TIPO IMG
// (src) => HTMLElement img con el src
const logoHeader = document.createElement("img");
logoHeader.src = "assets/images/logo.svg";

const imgMenuClose = document.createElement("img");
imgMenuClose.src = "assets/images/icon-menu-close.svg";

//viene el nev y boton open
const nav = document.createElement("nav");
const buttonheader = document.createElement("button");
buttonheader.classList.add("hidden");
buttonheader.setAttribute("id", "menu-close");
//boton del menu responsive

const divMenu = document.createElement("div");
divMenu.classList.add("menu-button", "hidden");
const buttonMenuHeader = document.createElement("button");
buttonMenuHeader.setAttribute("id", "menu-button");

//menu cierre
//Este es la lista del header
//INVOCAR LA FUNCIÓN PARA CREAR IMG
const imgMenu = document.createElement("img");
imgMenu.src = "assets/images/icon-menu.svg";

const listNav = document.createElement("ul");
listNav.classList.add("ul");

//*********************************************************** FUNCIÓN PARA CREAR LI*/
//CREAR UNA FUNCIÓN QUE RECIBA UN TEXTO Y RETORNE UN LI CON UN TEXTO QUE ES EL PARÁMETRO PASADO A LA FUNCIÓN
// (txt) => <li>txt</li>
const liHome = document.createElement("li");
liHome.classList.add("li");
const pLiText = document.createElement("p");
const textpHome = document.createTextNode("Home");
//lista new
const liNew = document.createElement("li");
liNew.classList.add("li");
const pLiNew = document.createElement("p");
const textPNew = document.createTextNode("New");
//lista popular
const liPopular = document.createElement("li");
liPopular.classList.add("li");
const pLiPopular = document.createElement("p");
const textPPopular = document.createTextNode("Popular");
//lista de trending
const liTrending = document.createElement("li");
liTrending.classList.add("li");
const pliTrending = document.createElement("p");
const textptrending = document.createTextNode("trending");
//lista categories
const licategories = document.createElement("li");
licategories.classList.add("li");
const plicategories = document.createElement("p");
const textPCategories = document.createTextNode("categories");

//INVOCAR FUNCIÓN DE CREACIÓN DE ELEMENTO HTML
//content-description
const sectionDescription = document.createElement("section");
sectionDescription.classList.add("content-description");

//INVOCAR FUNCIÓN PARA CREAR IMÁGENES
const imgDesktop = document.createElement("img");
imgDesktop.classList.add("desktop");
imgDesktop.src = "assets/images/image-web-3-desktop.jpg";

const imgMobile = document.createElement("img");
imgMobile.classList.add("mobile");
imgMobile.src = "assets/images/image-web-3-mobile.jpg";

//FN_CE
const description = document.createElement("section");
description.classList.add("description");
//creacion del del section info
const sectionInfo = document.createElement("section");
sectionInfo.classList.add("info");
const articleTitle = document.createElement("article");
//titulo descripcion grande
const h1TitleDescription = document.createElement("h1");
articleTitle.classList.add("title");
h1TitleDescription.textContent = "The Bright Future of Web 3.0?";
//creacion de el otro article
const articleWritten = document.createElement("article");
articleWritten.classList.add("written");
const pWritten = document.createElement("p");
pWritten.textContent =
  " We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?";
//coloco el boton
const buttonDescription = document.createElement("button");
buttonDescription.classList.add("info-read");
buttonDescription.textContent = "READ MORE";

// //creacion de nueva section"section new"
// const contentNew = document.createElement("section");
// contentNew.classList.add("content-new");
// const h2New = document.createElement("h2");
// h2New.textContent = "New";
// //aca estan los div del content
// const divNew = document.createElement("div");
// divNew.classList.add("new");
// const h3NewSubtitle = document.createElement("h3");
// h3NewSubtitle.classList.add("new-txt");
// h3NewSubtitle.textContent = "Hydrogen VS Electric Cars";
// const pNew = document.createElement("p");
// pNew.textContent = "Will hydrogen-fueled cars ever catch up to EVs?";
// const hrLinea = document.createElement("hr");

// const divNew2 = document.createElement("div");
// divNew2.classList.add("new");
// const h3NewSubtitle2 = document.createElement("h3");
// h3NewSubtitle2.classList.add("new-txt");
// h3NewSubtitle2.textContent = "The Downsides of AI Artistry";
// const pNew2 = document.createElement("p");
// pNew2.textContent =
//   "What are the possible adverse effects of on-demand AI image generation?";
// const hrLinea2 = document.createElement("hr");

// const divNew3 = document.createElement("div");
// divNew3.classList.add("new");
// const h3NewSubtitle3 = document.createElement("h3");
// h3NewSubtitle3.classList.add("new-txt");
// h3NewSubtitle3.textContent = "Is VC Funding Drying Up?";
// const pNew3 = document.createElement("p");
// pNew3.textContent =
//   "Private funding by VC firms is down 50% YOY. We take a look a what that means.";
// //-----------footer----------
// const footer = document.createElement("footer");
// const sectionFooter = document.createElement("section");
// sectionFooter.classList.add("cards");
// const articleImgFooter = document.createElement("article");
// articleImgFooter.classList.add("content-img");
// const imgFooter = document.createElement("img");
// imgFooter.src = "assets/images/image-retro-pcs.jpg";
// const articleCard1 = document.createElement("article");
// articleCard1.classList.add("card-1");
// const h2Footer = document.createElement("h2");
// h2Footer.textContent = "01";
// const pFooterSubtitle = document.createElement("p");
// pFooterSubtitle.classList.add("subtitle");
// pFooterSubtitle.textContent = "Reviving Retro PCs";
// const pFooter = document.createElement("p");
// pFooter.textContent = "What happens when old PCs are given modern upgrades?";

// const sectionFooter2 = document.createElement("section");
// sectionFooter2.classList.add("cards");
// const articleImgFooter2 = document.createElement("article");
// articleImgFooter2.classList.add("content-img");
// const imgFooter2 = document.createElement("img");
// imgFooter2.src = "assets/images/image-top-laptops.jpg";
// const articleCard2 = document.createElement("article");
// articleCard2.classList.add("card-2");
// const h2Footer2 = document.createElement("h2");
// h2Footer2.textContent = "02";
// const pFooterSubtitle2 = document.createElement("p");
// pFooterSubtitle2.classList.add("subtitle");
// pFooterSubtitle2.textContent = "Top 10 Laptops of 2022";
// const pFooter2 = document.createElement("p");
// pFooter2.textContent = "Our best picks for various needs and budgets.";

// const sectionFooter3 = document.createElement("section");
// sectionFooter3.classList.add("cards");
// const articleImgFooter3 = document.createElement("article");
// articleImgFooter3.classList.add("content-img");
// const imgFooter3 = document.createElement("img");
// imgFooter3.src = "assets/images/image-gaming-growth.jpg";
// const articleCard3 = document.createElement("article");
// articleCard3.classList.add("card-3");
// const h2Footer3 = document.createElement("h2");
// h2Footer3.textContent = "03";
// const pFooterSubtitle3 = document.createElement("p");
// pFooterSubtitle3.classList.add("subtitle");
// pFooterSubtitle3.textContent = "The Growth of Gaming";
// const pFooter3 = document.createElement("p");
// pFooter3.textContent = "How the pandemic has sparked fresh opportunities.";

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
buttonheader.appendChild(imgMenuClose);
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

const contentNew = document.createElement("section");
contentNew.classList.add("content-new");
sectionDescription.append(contentNew);

//*********************************************************** FUNCIÓN NOTICIAS*/
//CREAR UNA FUNCIÓN QUE RECIBA DOS PARÁMETROS DE TEXTO Y RETORNE UN ELEMENTO HTML div que adentro tenga un h3 y un p con cada texto
// (title, writtennew) =>  <div class="new"> <h3> title </h3> <p> writtenNew </p> </div>
//definición de la función
const creaNoticia = (title, writtenNew) => {
  const divNew = document.createElement("div");
  divNew.classList.add("new");

  //titulo
  const newSubtitle = document.createElement("h3");
  newSubtitle.classList.add("new-txt");
  newSubtitle.textContent = title;

  //description
  let pNew = document.createElement("p");
  pNew.textContent = writtenNew;

  contentNew.append(divNew);
  divNew.append(newSubtitle, pNew);

  return divNew;
};

//invocación de la función
const noticiaHydrogen = creaNoticia(
  "Hydrogen VS Electric Cars",
  "Will hydrogen-fueled cars ever catch up to EVs?"
);

//invocación de la función
const noticiaAI = creaNoticia(
  "The downsides of AI Artistry",
  "What are the possibles adverse effects of on-demand AI image generation?"
);

//invocación de la función
const noticiaVC = creaNoticia(
  "Is VC Funding Drying Up",
  "Private funding by VC firms is down 50%"
);

contentNew.append(noticiaHydrogen, noticiaAI, noticiaVC);

// contentNew.append()
const footer = (titleFooter, writtenFooter) => {
  const h2Footer = document.createElement("h2");
  h2Footer.textContent = writtenFooter;

  const subtitle = document.createElement("p");
  subtitle.textContent = writtenFooter;
};

//nodos principales
sectionHeader.appendChild(articlelogo);
sectionHeader.appendChild(nav);
sectionHeader.appendChild(divMenu);
contenedor.appendChild(containerMain);
containerMain.appendChild(header);
containerMain.appendChild(sectionDescription);
// containerMain.appendChild(footer);
// sectionDescription.append(y2);
