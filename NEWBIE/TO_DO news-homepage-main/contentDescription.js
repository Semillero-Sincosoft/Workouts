import {createTags, } from "./createElements.js"

export const sectionDescription = createTags("section", ["content-description"]);
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
const drying = Info(
  "The Bright Future of Web 3.0?",
  "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  "READ MORE"
);

description.append(drying);
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
