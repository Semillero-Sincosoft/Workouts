export const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  if (className) {
    element.classList.add(className);
  }
  return element;
};

export const createUserAvatar = (user) => {
  const contentUser = createElement("div","content-user");

  const photoUser = createElement("img");
  photoUser.src = user.image.png;
  contentUser.append(photoUser);

  const nameUser = createElement("h2");
  nameUser.textContent = user.username;
  contentUser.append(nameUser)

  return contentUser;
}

export const createButtonIcon = (svg,text) => {
  const contentReply = createElement("div", "content-button-icon");

  const iconReply = createElement("div", "icon-button");
  iconReply.innerHTML = svg;
  contentReply.append(iconReply);

  const textReply = createElement("p", "text-icon-button");
  textReply.textContent = text;
  contentReply.append(textReply);

  return contentReply
}

export const createText = (content) =>{
  const text = createElement("p","text-comment");
  text.textContent = content;
  return text;
}
export const createCommentHeader = () =>{
  const header = createElement("article","content-title-card");
  return header
}