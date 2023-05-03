export const createTag = (tag, clas) => {
  const element = document.createElement(tag);
  element.setAttribute("class", clas.join(" "));

  return element;
};

export const createImage = (image,clas) => {
  const img = document.createElement("img");
  img.src = image;
  img.classList.add(clas)

  return img;
};
