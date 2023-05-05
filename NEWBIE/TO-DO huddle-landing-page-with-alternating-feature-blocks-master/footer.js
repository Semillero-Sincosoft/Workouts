import { createImage, createTag } from "./createElements.js";

export const footer = document.createElement("footer");
export const contentFooter = createTag("section", ["content-footer"]);

export const contactUs = createTag("article", [
  "contact-us",
  "flex-and-direction",
]);

export const logoWhite = createImage("images/logo-white.svg", "logo-white");
export function contact(imageContacUs, text) {
  const contentInfo = createTag("div", ["content-info"]);
  const info = createTag("div", ["info"]);
  const contentIcon = createTag("div", ["icons-info"]);
  const icon = document.createElement("img");
  icon.src = imageContacUs;
  const textContact = document.createElement("p");
  textContact.textContent = text;
  contentFooter.append(contactUs);
  contactUs.append(contentInfo);
  contentInfo.append(info);
  info.append(contentIcon);
  contentIcon.append(icon);
  info.append(textContact);

  return contentInfo;
}

export const contentList = document.createElement("article");
contentList.classList.add("list");
const textLi2 = ["About Us", "What We Do", "FAQ"];
const textLi = ["Career", "Blog", "Contact Us"];
function crearEL(list) {
  const ul = document.createElement("ul");
  ul.classList.add("flex-and-direction");
  contentList.append(ul);
  for (let i = 0; i < list.length; i++) {
    const li = document.createElement("li");

    li.textContent = list[i];
    ul.append(li);
  }

  return ul;
}

export const list = crearEL(textLi);
const list2 = crearEL(textLi2);

export const contentNetworks = createTag("article", ["content-networks"]);
const networks = (img) => {
  const networksFace = createImage(img, "a");
  contentNetworks.append(networksFace);
  return networksFace;
};

export const facebook = networks("images/facebook (4).svg");
export const twitter = networks("images/gorjeo (2).svg");
export const instagram = networks("images/instagram (3).svg");
