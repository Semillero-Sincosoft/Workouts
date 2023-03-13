const container = document.querySelector("body");

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
const sectionTodo = document.createElement("section");
sectionTodo.classList.add("content");

const contentSupervisor = document.createElement("div");
contentSupervisor.classList.add("columns", "flex-and-direction");
const cardSupervisor = document.createElement("section");
cardSupervisor.classList.add("card-1", "cards");
const titleSupervisor = document.createElement("article");
const h2Supervisor = document.createElement("h2");
h2Supervisor.textContent = "Supervisor";
const pSupervisor = document.createElement("p");
pSupervisor.textContent = "Monitors activity to identify project roadblocks";
titleSupervisor.classList.add("title-content");
const articleImgSup = document.createElement("article");
articleImgSup.classList.add("img", "flex-and-direction");
const imgSupervisor = document.createElement("img");
imgSupervisor.src = "images/icon-supervisor.svg";
// //comienza la card builder
const contentBuilder = document.createElement("div");
contentBuilder.classList.add("columns", "flex-and-direction");
const cardBuilder = document.createElement("section");
cardBuilder.classList.add("card-2", "cards");
const titleBuilder = document.createElement("article");
const h2Builder = document.createElement("h2");
h2Builder.textContent = "Team Builder";
const writtenBuilder = document.createElement("p");
writtenBuilder.textContent =
  "scans our talent network to create the optimal team for your project";
titleBuilder.classList.add("title-content");
const contentImgBuilder = document.createElement("article");
contentImgBuilder.classList.add("img", "flex-and-direction");
const imgBuilder = document.createElement("img");
imgBuilder.src = "images/icon-team-builder.svg";
//karma

const cardKarma = document.createElement("section");
cardKarma.classList.add("card-3", "cards");
const titleKarma = document.createElement("article");
const h2Karma = document.createElement("h2");
h2Karma.textContent = "Karma";
const writtenKarma = document.createElement("p");
writtenKarma.textContent = "Regularly evaluates our talent to ensure quality";
titleKarma.classList.add("title-content");
const contentImgKarma = document.createElement("article");
contentImgKarma.classList.add("img", "flex-and-direction");
const imgKarma = document.createElement("img");
imgKarma.src = "images/icon-karma.svg";
//calculator

const contentCalculator = document.createElement("div");
contentCalculator.classList.add("columns", "flex-and-direction");
const cardCalculator = document.createElement("section");
cardCalculator.classList.add("card-3", "cards");
const titleCalculator = document.createElement("article");
const h2Calculator = document.createElement("h2");
h2Calculator.textContent = "Calculator";
const writtenCalculator = document.createElement("p");
writtenCalculator.textContent =
  "Uses data from past projects to provide better delivery estimates";
  titleCalculator.classList.add("title-content")
const contentImgCalculator = document.createElement("article");
contentImgCalculator.classList.add("img", "flex-and-direction");
const imgCalculator = document.createElement("img");
imgCalculator.src = "images/icon-calculator.svg";
//contenedor header
content.appendChild(header);
header.appendChild(sectionHeader);
sectionHeader.appendChild(h1Header);
sectionHeader.appendChild(h2Header);
sectionHeader.appendChild(pHeader);
//contenedor supervisor
sectionTodo.appendChild(contentSupervisor);
contentSupervisor.appendChild(cardSupervisor);
cardSupervisor.appendChild(titleSupervisor);
titleSupervisor.appendChild(h2Supervisor);
titleSupervisor.appendChild(pSupervisor);
cardSupervisor.appendChild(articleImgSup);
articleImgSup.appendChild(imgSupervisor);
// //contenedor  builder
contentBuilder.appendChild(cardBuilder);
cardBuilder.appendChild(titleBuilder);
titleBuilder.appendChild(h2Builder);
titleBuilder.appendChild(writtenBuilder);
cardBuilder.appendChild(contentImgBuilder);
contentImgBuilder.appendChild(imgBuilder);
// //contenedor karma
sectionTodo.appendChild(cardKarma);
cardKarma.appendChild(titleKarma);
titleKarma.appendChild(h2Karma);
titleKarma.appendChild(writtenKarma);
cardKarma.appendChild(contentImgKarma);
contentImgKarma.appendChild(imgKarma);

//contenedor calculator

contentCalculator.appendChild(cardCalculator);
cardCalculator.appendChild(titleCalculator);
titleCalculator.appendChild(h2Calculator);
titleCalculator.appendChild(writtenCalculator);
cardCalculator.appendChild(contentImgCalculator);
contentImgCalculator.appendChild(imgCalculator);

//aca comienza las cartas

//nodos principales

container.appendChild(content);
content.appendChild(header);
content.appendChild(sectionTodo);
sectionTodo.appendChild(contentSupervisor);
contentBuilder.appendChild(cardKarma);
sectionTodo.appendChild(contentBuilder);
sectionTodo.appendChild(contentCalculator);
