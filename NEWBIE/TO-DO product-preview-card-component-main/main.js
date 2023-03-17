const container = document.createElement("main");
container.classList.add("container", "flex", "aling-justify");
const contentPerfume = document.createElement("section");
contentPerfume.classList.add("content-perfume");
const contentImg = document.createElement("article");
contentImg.classList.add("flex", "img-container");
const imgFragance = document.createElement("img");
imgFragance.src = "images/image-product-desktop.jpg";

const contentDescription = document.createElement("section");
contentDescription.classList.add("flex", "main-content");
const title = document.createElement("h4");
title.classList.add("title");
title.textContent = "PERFUME";
const subTitle = document.createElement("h1");
subTitle.classList.add("subtitle");
subTitle.textContent = "Gabrielle Essence Eau De Parfum";
const written = document.createElement("p");
written.classList.add("flex", "description");
written.textContent =
  "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfurmer-Creator for the House of CHANEL.";

contentImg.appendChild(imgFragance);

//nodos principales
document.body.appendChild(container);
container.appendChild(contentPerfume);
contentPerfume.appendChild(contentImg);
container   .appendChild(contentDescription);
contentDescription.appendChild(title);
contentDescription.appendChild(subTitle);
