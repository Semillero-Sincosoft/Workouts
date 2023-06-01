export const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  if (className) {
    element.classList.add(className);
  }
  return element;
};

export const createText = (texto, clas) => {
  const text = createElement("p", clas);
  text.textContent = texto;
  return text;
};

export const createAvatar = (image) => {
  const photo = createElement("img");
  photo.src = image.png;
  return photo;
};
