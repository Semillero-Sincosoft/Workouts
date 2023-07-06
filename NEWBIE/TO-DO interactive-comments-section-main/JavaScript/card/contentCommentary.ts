import { createElement } from "../utilities-ui.js";

const createTextareaComment = (text) => {
  const contentWrittenCommentary = createElement("section", "content-textarea");

  const writtenCommentary = createElement("textarea", "written");
  writtenCommentary.id = "commentary";
  writtenCommentary.textContent = text;
  writtenCommentary.placeholder = "agregar comentario";
  contentWrittenCommentary.textArea = writtenCommentary;

  $(contentWrittenCommentary).append(writtenCommentary);
  return contentWrittenCommentary;
};

export default createTextareaComment;
