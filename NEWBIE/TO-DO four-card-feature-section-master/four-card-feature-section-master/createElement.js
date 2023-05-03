export const createTagsCLass = (tags, classes) => {
  const element = document.createElement(tags);
  element.setAttribute("class", classes.join(" "));

  return element;
};

//creacion de una funcion que crea etiquetas
export const createTags = (tags) => {
  const element = document.createElement(tags);
  return element;
};
