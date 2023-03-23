// //ACA SE VAN A METER TODOS LOS DATOS

const containerMain = document.createElement("main");
containerMain.classList.add("main", "contenedor");

// const sectionHeader = document.createElement("section");
// sectionHeader.classList.add("content");
// const articlelogo = document.createElement("article");
// const logoHeader = document.createElement("img");
// logoHeader.src = "assets/images/logo.svg";
// const imgMenuClose = document.createElement("img");
// imgMenuClose.src = "assets/images/icon-menu-close.svg";

// //viene el nav y boton open
// const nav = document.createElement("nav");
// const buttonheader = document.createElement("button");
// buttonheader.classList.add("hidden");
// buttonheader.setAttribute("id", "menu-close");
// //boton del menu responsive

// const divMenu = document.createElement("div");
// divMenu.classList.add("menu-button", "hidden");
// const buttonMenuHeader = document.createElement("button");
// buttonMenuHeader.setAttribute("id", "menu-button");

// //menu cierre
// //Este es la lista del header

// articlelogo.appendChild(logoHeader);
// header.appendChild(sectionHeader);

// sectionHeader.appendChild(articlelogo);
// // sectionHeader.appendChild(nav);
// sectionHeader.appendChild(divMenu);

// const imagesHeader = (imagess) => {
//   const imgsHeader = document.createElement("img");
//   imgsHeader.src = imagess;

//   return imgsHeader;
// };

// const header = (elemento) => {
//   const head = document.createElement(elemento);
//   return head;
// };

// // const div = header("header");

const testImage = (images) => {
  const imgFooter = document.createElement("img");
  imgFooter.src = images;
  return imgFooter;
};

const header = document.createElement("header");
containerMain.append(header);
const contentHeader = document.createElement("section");
contentHeader.classList.add("content");
header.append(contentHeader);

const articlelogo = (imagelogo) => {
  const contentImgHeader = document.createElement("article");
  const logo = testImage(imagelogo);
  contentImgHeader.append(logo);

  return contentImgHeader;
};
const xd = articlelogo("assets/images/logo.svg")
console.log(xd)
contentHeader.append(xd)

const head = (pNav) => {
  const li = document.createElement("li");
  const pli = document.createElement("p");
  pli.textContent = pNav;

  li.append(pli);
  header.append(contentHeader);
  return li;
};

const lihome = head("Home");
const liNew = head("New");
const liPopular = head("Popular");
const licategories = head("Categories");

// const contentGame = (
//   titleFooter,
//   subtitlep,
//   writtenFooter,
//   images,
//   classArticle
// ) => {
//   const cards = document.createElement("section");
//   cards.classList.add("cards");
//   const contentImg = document.createElement("article");

//   const imgFooter = testImage(images);

//   contentImg.append(imgFooter);

//   cards.append(contentImg);

//   const contentCard2 = document.createElement("article");
//   contentCard2.classList.add(classArticle);

//   const h2Footer = document.createElement("h2");
//   h2Footer.textContent = titleFooter;

//   const subtitle = document.createElement("p");
//   subtitle.classList.add("subtitle");
//   subtitle.textContent = subtitlep;

//   const prueba = document.createElement("p");
//   prueba.textContent = writtenFooter;

//   contentCard2.append(h2Footer, subtitle, prueba);
//   cards.append(contentCard2);
//   return cards;
// };

//  const imgMenu = document.createElement("img");
//  imgMenu.src = "assets/images/icon-menu.svg";

// const listNav = document.createElement("ul");
// listNav.classList.add("ul");
// const liHome = document.createElement("li");
// liHome.classList.add("li");
// const pLiText = document.createElement("p");
// const textpHome = document.createTextNode("Home");
// //lista new
// const liNew = document.createElement("li");
// liNew.classList.add("li");
// const pLiNew = document.createElement("p");
// const textPNew = document.createTextNode("New");
// //lista popular
// const liPopular = document.createElement("li");
// liPopular.classList.add("li");
// const pLiPopular = document.createElement("p");
// const textPPopular = document.createTextNode("Popular");
// //lista de trending
// const liTrending = document.createElement("li");
// liTrending.classList.add("li");
// const pliTrending = document.createElement("p");
// const textptrending = document.createTextNode("trending");
// //lista categories
// const licategories = document.createElement("li");
// licategories.classList.add("li");
// const plicategories = document.createElement("p");
// const textPCategories = document.createTextNode("categories");
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

// //lista home
// liHome.appendChild(textpHome);
// liHome.appendChild(pLiText);
// pLiText.appendChild(textpHome);
// listNav.appendChild(liHome);
// //lista new
// liNew.appendChild(textPNew);
// liNew.appendChild(pLiNew);
// listNav.appendChild(liNew);
// pLiNew.appendChild(textPNew);
// //lista popular
// liPopular.appendChild(textPPopular);
// liPopular.appendChild(pLiPopular);
// listNav.appendChild(liPopular);
// pLiPopular.appendChild(textPPopular);
// // lista trending
// liTrending.appendChild(textptrending);
// liTrending.appendChild(pliTrending);
// pliTrending.appendChild(textptrending);
// listNav.appendChild(liTrending);
// // lista categories
// licategories.appendChild(textPCategories);
// licategories.appendChild(plicategories);
// plicategories.appendChild(textPCategories);
// listNav.appendChild(licategories);

// //agregacion de boton de menu
// divMenu.appendChild(buttonMenuHeader);
//  buttonMenuHeader.appendChild(imgMenu);

// //content-description
description.appendChild(imgDesktop);
description.appendChild(imgMobile);
// nav.appendChild(buttonheader);
// buttonheader.appendChild(imgMenuClose);
// nav.appendChild(listNav);
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
const h2New = document.createElement("h2");
h2New.textContent = "New";
contentNew.append(h2New);

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

const footer = document.createElement("footer");

const contentGame = (
  titleFooter,
  subtitlep,
  writtenFooter,
  images,
  classArticle
) => {
  const cards = document.createElement("section");
  cards.classList.add("cards");

  const contentImg = document.createElement("article");

  const imgFooter = testImage(images);
  contentImg.append(imgFooter);
  cards.append(contentImg);

  const contentCard2 = document.createElement("article");
  contentCard2.classList.add(classArticle);

  const h2Footer = document.createElement("h2");
  h2Footer.textContent = titleFooter;

  const subtitle = document.createElement("p");
  subtitle.classList.add("subtitle");
  subtitle.textContent = subtitlep;

  const prueba = document.createElement("p");
  prueba.textContent = writtenFooter;

  contentCard2.append(h2Footer, subtitle, prueba);
  cards.append(contentCard2);
  return cards;
};
const card1 = contentGame(
  "01",
  "Reviving Retro PCs",
  "What happens when old PCs are given modern upgrades?",
  "assets/images/image-retro-pcs.jpg",
  "card-1"
);

footer.append(card1);

const card2 = contentGame(
  "01",
  "Reviving Retro PCs",
  " Our best picks for various needs and budgets.",
  "assets/images/image-top-laptops.jpg",
  "card-2"
);

footer.append(card2);

const card3 = contentGame(
  "01",
  "Reviving Retro PCs",
  "How the pandemic has sparked fresh opportunities.",
  "assets/images/image-gaming-growth.jpg",
  "card-3"
);

footer.append(card3);

//nodos principales

containerMain.appendChild(sectionDescription);
containerMain.append(footer);
document.body.append(containerMain);
