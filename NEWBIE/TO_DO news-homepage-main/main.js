// //ACA SE VAN A METER TODOS LOS DATOS
//funcion para crear etiquetas
const createTags = (tags, classes) => {
  const Element = document.createElement(tags);
  Element.setAttribute("class", classes.join(" "));
  return Element;
};
const containerMain = createTags("main", ["main"]);
//funcion para crear imgs solamente
const createImage = (images) => {
  const imgFooter = document.createElement("img");
  imgFooter.src = images;
  return imgFooter;
};

const header = createTags("header", []);
containerMain.append(header);
const contentHeader = createTags("section", ["content"]);
header.append(contentHeader);

//funcion para meter dentro de un article una imagen
const articlelogo = (imagelogo) => {
  const contentImgHeader = document.createElement("article");
  const logo = createImage(imagelogo);
  contentImgHeader.append(logo);

  return contentImgHeader;
};
const logito = articlelogo("assets/images/logo.svg");
contentHeader.append(logito);

//funcion para crear
const nav = createTags("nav", []);
const button = (iconMenu, idS) => {
  const btn = document.createElement("button");
  const img = createImage(iconMenu);
  btn.append(img);
  btn.classList.add("hidden");
  btn.setAttribute("id", idS);
  nav.append(btn);
  return btn;
};
contentHeader.append(nav);
const closeMain = button("assets/images/icon-menu-close.svg", "menu-close");

nav.append(closeMain);

const menuButton = createTags("div", ["menu-button", "hidden"]);
contentHeader.append(menuButton);
const menuclick = button("assets/images/icon-menu.svg", "menu-button");
menuButton.append(menuclick);

//fnucion para hacer lista
const createLi = (li) => {
  const ul = document.createElement("ul");
  li.forEach((element) => {
    const lili = document.createElement("li");
    const pp = document.createElement("p");
    pp.innerHTML = element;
    lili.append(pp);
    ul.append(lili);
  });
  return ul;
};
nav.append(createLi(["home", "new", "popular", "categories"]));

const sectionDescription = createTags("section", ["content-description"]);
const description = document.createElement("section");
description.classList.add("description");

//funcion para crear imgs con clases
const imageAndClass = (image1, clas) => {
  const desktop = document.createElement("img");
  desktop.src = image1;
  desktop.classList.add(clas);
  return desktop;
};
const Desktop = imageAndClass(
  "assets/images/image-web-3-desktop.jpg",
  "desktop"
);
description.append(Desktop);
const mobile = imageAndClass("assets/images/image-web-3-mobile.jpg", "mobile");
description.appendChild(mobile);

//funcion para crear una seccion
const Info = (h1, p, btton) => {
  const sectionInfo = createTags("section", ["info"]);
  const contentTitle = createTags("article", ["title"]);
  const TitleDescription = document.createElement("h1");
  TitleDescription.textContent = h1;
  const contentWritten = createTags("article", ["written"]);
  const writtenDescripcion = document.createElement("p");
  writtenDescripcion.textContent = p;
  const buttonDescription = document.createElement("button");
  buttonDescription.classList.add("info-read");
  buttonDescription.textContent = btton;
  sectionInfo.append(contentTitle, contentWritten);
  contentTitle.append(TitleDescription);
  contentWritten.append(writtenDescripcion, buttonDescription);
  return sectionInfo;
};
const hola = Info(
  "The Bright Future of Web 3.0?",
  "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  "READ MORE"
);

description.append(hola);
sectionDescription.appendChild(description);

const contentNew = document.createElement("section");
contentNew.classList.add("content-new");
sectionDescription.append(contentNew);
const h2New = document.createElement("h2");
h2New.textContent = "New";
contentNew.append(h2New);
//*********************************************************** FUNCIÓN NOTICIAS*
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

  const imgFooter = createImage(images);
  contentImg.append(imgFooter);
  cards.append(contentImg);

  const contentCard2 = document.createElement("article");
  contentCard2.classList.add(classArticle);

  const h2Footer = document.createElement("h2");
  h2Footer.textContent = titleFooter;

  const subtitle = createTags("p", ["subtitle"]);
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
containerMain.append(sectionDescription, footer);
document.body.append(containerMain);
