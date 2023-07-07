import { createElement, createText } from "../utilities-ui.js";

const contentBodyCard = (comentario, id) => {
  const contentWritten = createElement(
    "article",
    "txt-prueba",
    `content-id${id}`
  );

  const textComment = createText(comentario, "text-comment");
  $(contentWritten).append(textComment);
  return contentWritten;
};

export default contentBodyCard;
