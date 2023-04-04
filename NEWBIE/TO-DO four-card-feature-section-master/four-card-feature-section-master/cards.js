//funcion que crea etiquetas con clases
const createTagsCLass = (tags, classes) => {
  const element = document.createElement(tags);
  element.setAttribute("class", classes.join(" "));

  return element;
};

//creacion de una funcion que crea etiquetas
const createTags = (tags) => {
  const element = document.createElement(tags);
  return element;
};

const main = createTags("section");
const wrapperHeader = (title, subtitle, written) => {
  const head = createTagsCLass("header", ["encabezado", "flex-and-direction"]);
  const sectionHeader = createTagsCLass("section", ["title"]);
  const titleHeader = createTags("h1");
  const subtitleHeader = createTags("h2");
  const writtenHeader = createTags("p");

  titleHeader.textContent = title;
  subtitleHeader.textContent = subtitle;
  writtenHeader.textContent = written;
  head.append(sectionHeader);
  sectionHeader.append(titleHeader, subtitleHeader, writtenHeader);

  return head;
};

const header = wrapperHeader(
  "Reliable, efficient delivery",
  "Powered by Technology",
  "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful"
);
//creacion de una funcion que crea tarjetas

const content = createTagsCLass("section", ["content"]);
const cards = (title, written, img, clas) => {
  const contentCards = createTagsCLass("div", [
    "columns",
    "flex-and-direction",
  ]);

  const content = createTagsCLass("section", ["cards"]);
  content.classList.add(clas);
  contentCards.append(content);
  const contentTitle = createTagsCLass("article", ["title-content"]);
  const title2 = createTags("h2");
  title2.textContent = title;
  contentTitle.append(title2);
  const contentWritten = createTags("p");
  contentWritten.textContent = written;

  contentImg = createTagsCLass("article", ["img", "flex-and-direction"]);
  img1 = createTags("img");
  img1.src = img;

  content.append(contentTitle, contentImg);

  contentTitle.appendChild(contentWritten);
  contentImg.appendChild(img1);

  return contentCards;
};

const supervisor = cards(
  "Supervisor",
  "Monitors activity to identify project roadblocks",
  "images/icon-supervisor.svg",
  "card-1"
);

const builder = cards(
  "Team Builder",
  "scans our talent network to create the optimal team for your project",
  "images/icon-team-builder.svg",
  "card-2"
);
const karma = cards(
  "Karma",
  "Regularly evaluates our talent to ensure quality",
  "images/icon-karma.svg",
  "card-3"
);
const calculator = cards(
  "Calculator",
  "Uses data from past projects to provide better delivery estimates",
  "images/icon-calculator.svg",
  "card-4"
);

main.append(header, content);
content.append(supervisor, builder, calculator);
builder.append(karma);
document.body.append(main);
