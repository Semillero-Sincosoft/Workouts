const container = document.createElement("main");
container.classList.add("container", "flex-and-direction");
const head = document.createElement("header");
head.classList.add("head", "flex-justify-and-item");
const bgHeader = document.createElement("div");
bgHeader.classList.add("bg-header", "flex-and-direction");
const menu = document.createElement("article");
menu.classList.add("menu");
const logo = document.createElement("img");
logo.src = "images/logo.svg";
logo.classList.add("logo");
const login = document.createElement("button");
login.classList.add("login");
login.textContent = "Try It Free";

const contentDescrption = document.createElement("section");
contentDescrption.classList.add("content-description");
const description = document.createElement("article");
description.classList.add("description", "flex-and-direction");
const titleDescription = document.createElement("h1");
titleDescription.textContent = "Build The Community Your Fans Will Love";
const writteDescription = document.createElement("p");
writteDescription.textContent =
  " Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.";
const ButtonGet = document.createElement("button");
ButtonGet.classList.add("get-started", "buttons");
ButtonGet.textContent = "Get Started For Free";
const ContentImg = document.createElement("article");
ContentImg.classList.add("content-img");
const imgDescription = document.createElement("img");
imgDescription.src = "images/illustration-mockups.svg";
imgDescription.classList.add("img-written");

container.appendChild(head);
head.appendChild(bgHeader);
bgHeader.appendChild(menu)
menu.appendChild(logo);
menu.appendChild(login);
head.appendChild(contentDescrption);
contentDescrption.appendChild(description);
description.appendChild(titleDescription);
description.appendChild(writteDescription);
contentDescrption.appendChild(ContentImg);
ContentImg.appendChild(imgDescription);
document.body.appendChild(container);
