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