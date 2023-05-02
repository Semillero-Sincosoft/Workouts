export const createTags = (tags, classes) => {
  const Element = document.createElement(tags);
  Element.setAttribute("class", classes.join(" "));
  return Element;
};

//funcion para crear imgs solamente
export const createImage = (images) => {
  const imgFooter = document.createElement("img");
  imgFooter.src = images;
  return imgFooter;
};
