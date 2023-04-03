const createTagsCLass = (tags, classes) => {
  const element = document.createElement(tags);
  element.setAttribute("class", classes.join(" "));

  return element;
};

const content = createTagsCLass("main", ["wrapper"]);

const createTags = (tags) => {
  const element = document.createElement(tags);
  return element;
};
const encabezado = createTagsCLass("header", [
  "encabezado",
  "flex-and.direction",
]);
content.append(encabezado);
const wrapperHeader = (title, subtitle, writtenHeader) => {
  const sectionHeader = createTagsCLass("section", ["title"]);
  const sectionXd = createTags("h1");
  // const b = createTags("h2");
  // const c = createTags("p");

 sectionXd.textContent = title;
  // b = document.textContent = subtitle;
  // c = document.textContent = writtenHeader;
    sectionHeader.append(sectionXd);

  return sectionHeader;
};

const prueba = wrapperHeader(
  "Reliable, efficient delivery"
  // "Powered by Technology",
  // "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful"
);

encabezado.append(prueba);
document.body.append(content);
