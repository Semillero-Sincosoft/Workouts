import { createElement, createText } from "../utilities-ui.js";

const contentBodyCard = (comentario, id) => {
  const contentWritten = createElement(
    "article",
    "content-written",
    `content-id${id}`
  );

  const textComment = createText(comentario, "text-comment");
  $(contentWritten).append(textComment);
  return contentWritten;
};

export default contentBodyCard;
