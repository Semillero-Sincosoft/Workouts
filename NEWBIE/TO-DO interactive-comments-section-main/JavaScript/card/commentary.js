import { createElement, createAvatar } from "../utilities-ui.js";

const createCommetary = (comentario) => {
  const { image } = comentario.user;
  const contentCommentary = createElement("div", "content-card");
  const photoUser = createAvatar(image);
  photoUser.src = image.png;

  const aside = createElement("aside");
  contentCommentary.append(aside);
  aside.append(photoUser);
  return contentCommentary;
};

export default createCommetary;
