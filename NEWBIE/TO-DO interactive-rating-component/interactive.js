const container = document.createElement("main");
container.classList.add("flex", "container", "flex-column");
const content = document.createElement("section");
content.classList.add("flex", "content");

const contentStar = document.createElement("article");
const star = document.createElement("img");
star.src = "images/icon-star.svg";
const title = document.createElement("h1");
title.textContent = "How did we do?";

document.body.appendChild(container);
container.appendChild(content);
content.appendChild(contentStar);
contentStar.appendChild(star);
