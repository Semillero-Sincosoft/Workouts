export const createElement = (
  tagName: string,
  className?: string,
  id?: string
) => {
  const element = document.createElement(tagName);
  if (className) {
    $(element).addClass(className);
  }
  if (id) {
    $(element).attr("id", id);
  }
  return element;
};

export const createText = (texto: string, clas?: string) => {
  const text = createElement("p", clas);
  $(text).text(texto);
};

export const createAvatar = (image: string) => {
  const photo: HTMLImageElement = createElement("img") as HTMLImageElement;
  photo.src = image;
  return photo;
};

export const createBtn = (text:string) => {
  const contentBtn = createElement("article", "btn-commentary") ;
  const btn = createElement("button");
  $(btn).text(text);
  contentBtn.btn = btn;
  contentBtn.append(btn);
  return contentBtn;
};

export const generateId = (id:string) => {
  return Math.random().toString(8).substring(2, 6);
};
