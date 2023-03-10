const container = document.querySelector(".body");

const header = document.createElement("header");
header.classList.add("encabezado", "flex-and-direction");
const content = document.createElement("main");
content.classList.add("envoltura");
const sectionHeader = document.createElement("section");
sectionHeader.classList.add("title");
const h1Header = document.createElement("h1");
h1Header.textContent = "Reliable, efficient delivery";
const h2Header = document.createElement("h2");
h2Header.textContent = "Powered by Technology";
const pHeader = document.createElement("p");
pHeader.textContent =
  "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful";
//desde aca comienza el section content
const sectionContent = document.createElement("section");
sectionContent.classList.add("content");
const divContent = document.createElement("div");
divContent.classList.add("columns", "flex-and-direction");
const sectionCard1 = document.createElement("section");
sectionCard1.classList.add("card-1", "cards");
const articleTitle = document.createElement("article");
const h2Supervisor = document.createElement("h2");
h2Supervisor.textContent = "Supervisor";
const pSupervisor = document.createElement("p");
pSupervisor.textContent = "Monitors activity to identify project roadblocks";
articleTitle.classList.add("title-content");
const articleImgSup = document.createElement("article");
const imgSupervisor = document.createElement("img");
imgSupervisor.src = "images/icon-supervisor.svg";
//aca se esta el header

content.appendChild(header)
header.appendChild(sectionHeader);
sectionHeader.appendChild(h1Header);
sectionHeader.appendChild(h2Header);
sectionHeader.appendChild(pHeader);
//aca comienza las cartas

//nodos principales

container.appendChild(content);
content.appendChild(header);
