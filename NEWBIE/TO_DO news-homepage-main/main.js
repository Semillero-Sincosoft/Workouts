// //ACA SE VAN A METER TODOS LOS DATOS

const createTags = (tags, classes) => {
  const Element = document.createElement(tags);
  classes.forEach((clase) => {
    Element.setAttribute("class", classes);
  });

  return Element;
};
const containerMain = createTags("main", ["main"]);


const createImage = (images) => {
  const imgFooter = document.createElement("img");
  imgFooter.src = images;
  return imgFooter;
};

const header = createTags("header", []);
containerMain.append(header);
const contentHeader = document.createElement("section");
contentHeader.classList.add("content");
header.append(contentHeader);

const articlelogo = (imagelogo) => {
  const contentImgHeader = document.createElement("article");
  const logo = createImage(imagelogo);
  contentImgHeader.append(logo);

  return contentImgHeader;
};
const logito = articlelogo("assets/images/logo.svg");
contentHeader.append(logito);


const nav = createTags("nav", []);
const list = (iconMenu) => {
  const btn = document.createElement("button");
  const img = createImage(iconMenu);
  btn.append(img);
  btn.classList.add("hidden");
  btn.setAttribute("id", "menu-close");
  nav.append(btn);
  return btn;
};
const closeMain = list("assets/images/icon-menu-close.svg");

nav.append(closeMain);
contentHeader.append(nav);
const menuButton = createTags("div", ["menu-button", " hidden"])
contentHeader.append(menuButton)

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

// //content-description
description.appendChild(imgDesktop);
description.appendChild(imgMobile);
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

  const imgFooter = createImage(images);
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

containerMain.append(sectionDescription, footer);
document.body.append(containerMain);


