const container = document.querySelector(".body");

const content = document.createElement("main");
content.classList.add("card", "flex-width");
const sectionEscrito = document.createElement("section");
sectionEscrito.classList.add("escrito");

const articleSedan = document.createElement("article");
articleSedan.classList.add("sedan", "flex-direction");
const imgCardSedan = document.createElement("img");
imgCardSedan.classList.add("img");
imgCardSedan.src = "images/icon-sedans.svg";
const h1Sedan = document.createElement("h1");
h1Sedan.classList.add("title");
h1Sedan.textContent = "SEDANS";
const pTextoSedan = document.createElement("p");
pTextoSedan.classList.add("text");
pTextoSedan.textContent =
  "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.";
const buttonSedan = document.createElement("button");
buttonSedan.classList.add("learn1", "learns");
buttonSedan.textContent = "Learn More";
//card SUVS
const articleSuvs = document.createElement("article");
articleSuvs.classList.add("suvs", "flex-direction");
const imgCardSuvs = document.createElement("img");
imgCardSuvs.classList.add("img");
imgCardSuvs.src = "images/icon-suvs.svg";
const h1Suvs = document.createElement("h1");
h1Suvs.classList.add("title");
h1Suvs.textContent = "SUSV";
const pTextoSuvs = document.createElement("p");
pTextoSuvs.classList.add("text");
pTextoSuvs.textContent =
  "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.";
const buttonSuvs = document.createElement("button");
buttonSuvs.classList.add("learn2", "learns");
buttonSuvs.textContent = "Learn More";
//card LUXU
const articleLuxu = document.createElement("article");
articleLuxu.classList.add("luxu", "flex-direction");
const imgCardLuxu = document.createElement("img");
imgCardLuxu.classList.add("img");
imgCardLuxu.src = "images/icon-luxury.svg";
const h1Luxu = document.createElement("h1");
h1Luxu.classList.add("title");
h1Luxu.textContent = "LUXURY";
const pTextoLuxu = document.createElement("p");
pTextoLuxu.classList.add("text");
pTextoLuxu.textContent =
  "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.";
const buttonLuxu = document.createElement("button");
buttonLuxu.classList.add("learn3", "learns");
buttonLuxu.textContent = "Learn More";
//card sedan
sectionEscrito.appendChild(articleSedan);
articleSedan.appendChild(imgCardSedan);
articleSedan.appendChild(h1Sedan);
articleSedan.appendChild(pTextoSedan);
articleSedan.appendChild(buttonSedan);
//card suvs
sectionEscrito.appendChild(articleSuvs);
articleSuvs.appendChild(imgCardSuvs);
articleSuvs.appendChild(h1Suvs);
articleSuvs.appendChild(pTextoSuvs);
articleSuvs.appendChild(buttonSuvs);
//card Luxu
sectionEscrito.appendChild(articleLuxu);
articleLuxu.appendChild(imgCardLuxu);
articleLuxu.appendChild(h1Sedan);
articleLuxu.appendChild(pTextoLuxu);
articleLuxu.appendChild(buttonLuxu);
//nodos principales
container.appendChild(content);
content.appendChild(sectionEscrito);
