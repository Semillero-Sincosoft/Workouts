import { createElement, createText } from "./utilities-ui.js";

import { createCommentHeader } from "./scripts/comment/header.js";
import { createButtonVotes } from "./scripts/votes.js";

export const createComment = (comentarioPr) => {
  const idComment = comentarioPr.id;
  const score = comentarioPr.score;
  const timeAgo = comentarioPr.createdAt;

  const card = createElement("article", "content-card");
  card.setAttribute("id", idComment);

  const contentLikes = createElement("aside");
  card.append(contentLikes);

  const buttonVotes = createButtonVotes(idComment, score);
  contentLikes.append(buttonVotes);

  // contenedor comentario
  const comment = createElement("section", "content-comment");
  card.append(comment);

  //Contenedor de encabezado del comentario
  const header = createCommentHeader(comentarioPr.user, comentarioPr.createdAt);
  comment.append(header);

  const contentHome = document.getElementById("content-home");
  contentHome.append(card);
  //texto Comentario
  const textComment = createText(comentarioPr.content);
  comment.append(textComment);
  //texto Comentario
};
