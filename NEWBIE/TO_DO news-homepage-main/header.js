import { createTags, createImage } from "./createElements.js";

export const header = createTags("header", []);
export const contentHeader = createTags("section", ["content"]);
header.append(contentHeader);

export const articlelogo = (imagelogo) => {
  const contentImgHeader = document.createElement("article");
  const logo = createImage(imagelogo);
  contentImgHeader.append(logo);

  return contentImgHeader;
};

export const containerMain = createTags("main", ["main"]);
export const logito = articlelogo("assets/images/logo.svg");

containerMain.append(header);
contentHeader.append(logito);

const nav = createTags("nav", ["nav"]);
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

