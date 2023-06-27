import { createTag, createImage } from "./createElements.js";

export const head = createTag("header", ["head", "flex-justify-and-item"]);
export const bgHeader = createTag("div", ["bg-header", "flex-and-direction"]);
export const menu = createTag("article", ["menu"]);

export const logo = document.createElement("img");
logo.src = "images/logo.svg";
logo.classList.add("logo");

export const contentDescrption = createTag("section", ["content-description"]);
const description = createTag("article", ["description", "flex-and-direction"]);
export const header = (h1, p, writtenBtn) => {
  const titleDescription = createTag("h1", [""]);
  titleDescription.textContent = h1;
  const writteDescription = createTag("p", [""]);
  writteDescription.textContent = p;
  const ButtonGet = createTag("button", ["get-started", "buttons"]);
  ButtonGet.textContent = writtenBtn;
  const ContentImg = createTag("article", ["content-img"]);
  const imgDescription = createImage(
    "images/illustration-mockups.svg",
    "img-written"
  );
  contentDescrption.append(description, ContentImg);
  description.append(titleDescription, writteDescription);
  ContentImg.appendChild(imgDescription);
  return contentDescrption;
};